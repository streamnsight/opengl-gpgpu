function GPGPU(size) {

    // Our problem space
    // The size must be a power of 2 and the textures must be square
    var width  = Math.sqrt(size / 4);
    var height = width;

    // textures for input and output data
    var dataTexture   = null;

    // We need 2 output textures to swap buffers
    var outputTexture1 = null;
    var outputTexture2 = null;
    var outputTextures = [];
    // framebuffer to render in
    var frameBuffer = null;

    var tick = 0;

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

    var tickHandle = gl.getUniformLocation(program, "tick");

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
    outputTexture1 = createTexture(null);
    outputTexture2 = createTexture(null);
    // this also unbinds TEXTURE0, which will hold the input Data

    outputTextures = [outputTexture1, outputTexture2];


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

        // Attach the texture to frameBuffer, swapping at each tick
        tick++;
        gl.uniform1f(tickHandle, tick);
        attachFrameBuffer(outputTextures[tick % 2]);
        var status = frameBufferIsComplete();

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
        // Create an output buffer object to store read data
        var buffer = new Float32Array(4 * width * height);

        // bind the outputTexture to TEXTURE0
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, outputTextures[tick % 2]);

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

// 4096 for size gives us a texture that is 32 x 32 (with 4 floats per point)
// 67,108,864 is 4096 x 4096 x 4
var nb_dots_x = 64;
var nb_dots_y = nb_dots_x;
var size = nb_dots_x * nb_dots_y * 4;

var inputData = new Float32Array(size);
for (var i = 0; i < nb_dots_x; i++) {
  for (var j = 0; j < nb_dots_y; j++) {
    inputData[4 * (i * nb_dots_y + j) + 0] = (i - (nb_dots_x / 2)) / nb_dots_x ;   // R value = X coord [-1.0 1.0]
    inputData[4 * (i * nb_dots_y + j) + 1] = (j - (nb_dots_y / 2)) / nb_dots_y;   // G value = Y coord [-1.0 1.0]
    inputData[4 * (i * nb_dots_y + j) + 2] = 0.0;   // B value = nothing
    inputData[4 * (i * nb_dots_y + j) + 3] = 0.0;   // A value = nothing
  }
}

var width = 512;
var height = 512;

var gpgpu = new GPGPU(size);
var canvas = document.getElementById("canvas");
canvas.setAttribute("width", width);
canvas.setAttribute("height", height);
var ctx = canvas.getContext('2d');

gpgpu.setData(inputData);

function renderDots(results) {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < results.length; i +=4) {
        var x = width / 2 + ((width / 2) * results[i]);
        var y = height / 2 + ((height / 2) * results[i + 1]);
        var r = 1.0;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(128, 150, 200, 1.0)";
        ctx.fill();
    }
}

function loop() {
    gpgpu.compute();
    var buffer = gpgpu.readData();
    renderDots(buffer);
    setTimeout(function () {
        requestAnimationFrame( loop );
    }, 1000/30);
}

loop();
