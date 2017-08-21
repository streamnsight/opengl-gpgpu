attribute vec3 position;

#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec3 vColor;

void main() {
    gl_Position = vec4(position, 0.7);
    gl_PointSize = 1.0;
    vColor = vec3(position.xy, 0.0);
}
