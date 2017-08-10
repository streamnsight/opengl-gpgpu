function GPGPU(size) {

    // Our problem space
    // The size must be a power of 2 and the textures must be square
    var width  = Math.sqrt(size / 4);
    var height = width;

    // textures for input and output data
    var dataTexture   = null;
    var outputTexture = null;
    // framebuffer to render in
    var frameBuffer = null;

    // create canvas, but don’t attach it to an element
    var canvas = document.createElement('canvas');

    // default attributes: don’t use alpha (transparency), depth, or smoothing
    var attributes = {alpha: false, depth: false, antialias: false};

    // get GL context
    var gl = canvas.getContext("webgl", attributes) || canvas.getContext('experimental-webgl', attributes);

    // we want floating point textures so let’s check for support
    var FPTexture = gl.getExtension('OES_texture_float');
    if (FPTexture == null) {
        console.error("no support for floating point textures!");
    }

    // using the <link rel="import"> method to store shader
    var vs_source = document.getElementById("vertex-shader").import.body.textContent;
    var fs_source = document.getElementById("fragment-shader").import.body.textContent;

    // compile vertex shader
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vs_source); // ← source is a string extracted from tag
    gl.compileShader(vertexShader);
    var success = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);

    // compile fragment shader
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fs_source);
    gl.compileShader(fragmentShader);
    success = gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS);

    // Create program object
    var program = gl.createProgram();
    // attach compiled shaders
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // link the program
    gl.linkProgram(program);
    success = gl.getProgramParameter(program, gl.LINK_STATUS);

    // Geometry of the model: a simple square covering the full viewport range [-1, 1]
    // with texture coordinates covering the full texture range [0, 1]
    var geometry = new Float32Array(
        [
            -1.0, 1.0, 0.0, 0.0, 1.0,   // upper left (X,Y,Z + texture coords (s,t)
            -1.0, -1.0, 0.0, 0.0, 0.0,  // lower left
            1.0, 1.0, 0.0, 1.0, 1.0,    // upper right
            1.0, -1.0, 0.0, 1.0, 0.0    // lower right
        ]
    );

    // Store this data into a gl buffer
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, geometry, gl.STATIC_DRAW);

    gl.useProgram(program);
    // Get handles on our variables and uniforms:
    // this makes the link between the CPU and GPU variables

    // position handle will point to the X,Y,Z coordinates called ‘position’ in the shader
    var positionAttributeHandle = gl.getAttribLocation(program, "position");

    // texture handle will point to the s,t texture coordinates data called ‘textureCoord’
    var textureAttributeHandle = gl.getAttribLocation(program, "textureCoord");

    gl.enableVertexAttribArray(positionAttributeHandle);
    gl.enableVertexAttribArray(textureAttributeHandle);


    // Tell the attribute how to get data out of the geometry buffer (ARRAY_BUFFER)
    gl.vertexAttribPointer(positionAttributeHandle,
        3, // x,y,z vertex coords = 3 FLOATs
        gl.FLOAT, // type
        gl.FALSE, // do not normalize
        5 * 4, // stride (each element of the geometry is 5 floats of 4 bytes)
        0 // offset start at 0 for vertex positions
    );

    gl.vertexAttribPointer(textureAttributeHandle,
        2, // s,t textures coordinates = 2 FLOATs
        gl.FLOAT, // type
        gl.FALSE, // do not normalize
        5 * 4, // stride (each texture coord of the geometry is 5 floats of 4 bytes)
        3 * 4  // offset start at byte 12 for texture positions, after X,Y,Z coords
    );

    // set viewport to cover our problem space
    gl.viewport(0, 0, width, height);

    // create an outputTexture to hold results: same code as previous page, with null as data
    outputTexture = createTexture(null);
    // this also unbinds TEXTURE0, which will hold the input Data

    // Attach the texture to frameBuffer
    attachFrameBuffer(outputTexture);
    var status = frameBufferIsComplete();


    function createTexture(data) {
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture); // Bind the texture so the following methods effect this texture.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);  // disable filters (set to nearest)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); // wrap = clamp to edge = no wrap
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        // Pixel format and data for the texture
        gl.texImage2D(gl.TEXTURE_2D, // Target is the current texture bound above.
            0,                 // Level of detail 0 = full res (no downsampling)
            gl.RGBA,           // Internal format RGBA.
            width,             // Width - normalized to s.
            height,            // Height - normalized to t.
            0,                 // Always 0 in OpenGL ES.
            gl.RGBA,           // Format for each pixel RGBA.
            gl.FLOAT,          // Data type for each channel = FLOAT.
            data);             // Image data in the described format (4 FLOATs * nb data points), or null.

        // Unbind the texture.
        gl.bindTexture(gl.TEXTURE_2D, null);
        return texture;
    }

    // Check that our buffer was created properly
    function frameBufferIsComplete() {
        var message;
        var status;
        var value;

        status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

        switch (status) {
            case gl.FRAMEBUFFER_COMPLETE:
                message = "Framebuffer is complete.";
                value   = true;
                break;
            case gl.FRAMEBUFFER_UNSUPPORTED:
                message = "Framebuffer is unsupported";
                value   = false;
                break;
            case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                message = "Framebuffer incomplete attachment";
                value   = false;
                break;
            case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                message = "Framebuffer incomplete (missmatched) dimensions";
                value   = false;
                break;
            case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                message = "Framebuffer incomplete missing attachment";
                value   = false;
                break;
            default:
                message = "Unexpected framebuffer status: " + status;
                value   = false;
        }
        return {isComplete: value, message: message};
    }


    function setData(data) {
        // Create the input data texture
        dataTexture = createTexture(data);

        // create a handle for the data texture that will be called ‘data’ in the program
        var dataTextureHandle = gl.getUniformLocation(program, "data");
        // bind input data texture to GPU TEXTURE0
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, dataTexture);
        // set uniform data texture handle to point to TEXTURE0
        gl.uniform1i(dataTextureHandle, 0);

    }

    function compute() {

        // Run the calculation, that is, render the square
        if (status.isComplete) {
            // draw the ‘square’ model
            gl.drawArrays(
                gl.TRIANGLE_STRIP, //primitive type
                0, //offset in ARRAY_BUFFER where we have the data
                4 //count (4 points to build 2 triangles)
            );
        }
        else {
            console.log(status.message);
        }
    }

    function attachFrameBuffer(texture) {

        if (frameBuffer == null) {
            // create a frame buffer to render in
            frameBuffer = gl.createFramebuffer();
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT0, // We are providing the color buffer.
            gl.TEXTURE_2D,        // This is a 2D image texture.
            texture,              // The output texture.
            0);                   // 0, we aren't using MIPMAPs

        return frameBuffer;
    }


    // Get the output data
    function readData() {
        console.log("read buffer");
        // Create an output buffer object to store read data
        var buffer = new Float32Array(4 * width * height);

        // bind the outputTexture to TEXTURE0
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, outputTexture);

        // Read texture data into the buffer
        gl.readPixels(
            0,           // x-coord of lower left corner
            0,           // y-coord of lower left corner
            width,       // width of the block
            height,      // height of the block
            gl.RGBA,     // Format of pixel data.
            gl.FLOAT,    // Data type of the pixel data, must match makeTexture
            buffer       // Load pixel data into buffer
        );
        return buffer;
    }

    return {
        setData: setData,
        compute: compute,
        readData: readData
    }
}


var timeDiff = {
    ms: function(t1, t2) {
        return t2 - t1 + "ms";
    }
};

var nb_loops = 200000;

// 4096 for size gives us a texture that is 32 x 32 (with 4 floats per point)
// 67,108,864 is 4096 x 4096 x 4
var size = 4096;

var inputData = new Float32Array(size);
for (var i = 0; i < size / 4; i++) {
    inputData[4 * i + 0] = i;   // R value
    inputData[4 * i + 1] = i;   // G value
    inputData[4 * i + 2] = i;   // B value
    inputData[4 * i + 3] = i;   // A value
}

console.log(inputData);
var gpgpu = new GPGPU(size);

var t0 = new Date();

gpgpu.setData(inputData);

var t1 = new Date();
console.log("loaded data in: " + timeDiff.ms(t0, t1));

for (i = 0; i < nb_loops; i++) {
    gpgpu.compute();
}
var t2 = new Date();
console.log("compute took: " + timeDiff.ms(t1, t2));

var buffer = gpgpu.readData();
var t3 = new Date();
console.log("reading data took: " + timeDiff.ms(t2, t3));
console.log("total: " + timeDiff.ms(t0, t3));

console.log(buffer);


var outputData = new Float32Array(size);

function computeOnCPU() {
    for (var i = 0; i < size; i++) {
        //outputData[i] = 2 * inputData[i];
        //outputData[i] = Math.sqrt(inputData[i]);
        outputData[i] = Math.log(inputData[i]);
    }
}

console.log("on CPU");
var t4 = new Date();
for (i = 0; i < nb_loops; i++) {
    computeOnCPU();
}
var t5 = new Date();
console.log("compute took: " + timeDiff.ms(t4, t5));
console.log(outputData);