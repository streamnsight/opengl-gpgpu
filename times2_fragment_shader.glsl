#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D data;          // handler on the data texture
varying vec2 vTextureCoord;      // textures coordinates transferred from vertex shader

// compute simple 2x for each data point
vec4 computeElement(vec2 texCoords)
{
    vec4 values = texture2D(data, texCoords.st); // lookup value in texture
//    return 2.0 * values; // multiply all 4 RGBA values by 2
//    return sqrt(values); // multiply all 4 RGBA values by 2
    return log(values); // multiply all 4 RGBA values by 2
}

void main()
{
    // gl_FragColor is a special GL variable a fragment shader
    // is responsible for setting. It is a RGBA vector of the output color
    gl_FragColor = computeElement(vTextureCoord);
}
