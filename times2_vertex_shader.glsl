attribute vec3 position;
attribute vec2 textureCoord;

#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying highp vec2 vTextureCoord;

void main() {
    gl_Position = vec4(position, 1.0);
    vTextureCoord = textureCoord;
}
