attribute vec3 position;

#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D data;          // handler on the data texture
const float width = 64.0;
const float height = 64.0;


// get texture coordinates from index
vec2 id_to_texCoords(float id) {
    float x = fract(id / width);
    float y = floor(id / width);
    return vec2(x, y / height);
}


void main() {
	vec2 pos = id_to_texCoords(position.r);
	vec4 positions = texture2D(data, pos.st);
    gl_Position = vec4(positions.xy, 0.0, 1.0);
    gl_PointSize = 3.0;
}
