#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D data;          // handler on the data texture
varying vec2 vTextureCoord;      // textures coordinates transferred from vertex shader
uniform float tick;

// compute simple 2x for each data point
vec2 computeElement(vec2 texCoords)
{
    vec4 values = texture2D(data, texCoords.st); // lookup value in texture
    return vec2(values.r + 0.01 * sin(0.1 * tick + 5.0 * texCoords.s), values.g + 0.005 * cos(0.2 * tick + 11.0 * texCoords.t));
}

void main()
{
    // gl_FragColor is a special GL variable a fragment shader
    // is responsible for setting. It is a RGBA vector of the output color
    gl_FragColor = vec4(computeElement(vTextureCoord), 0.0, 0.0);
}
