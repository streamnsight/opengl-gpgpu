#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D data;          // handler on the data texture
//varying vec2 vTextureCoord;      // textures coordinates transferred from vertex shader
const float width = 64.0;
const float height = 64.0;
const float radius = 1.0 / 512.0;
const float blur = 1.0 / 512.0;

// get texture coordinates from index
vec2 id_to_texCoords(float id) {
    float x = fract(id / width);
    float y = floor(id / width);
    return vec2(x, y / height);
}

// Get distance from point a to point b
float dist(vec2 a, vec2 b)
{
    vec2 d = vec2(b - a);
	return dot(d, d); // dot product = d.x * d.x + d.y * d.y = distance squared
}

vec4 render(vec4 glPosition) {
    // point color
    vec3 color = vec3(1.0, 0.5, 0.1);
    // set background color as starting point (white)
    vec3 bg_color = vec3(1.0);
    vec4 pos = 1.5 * (vec4(-256.0, -256.0, 0.0, 0.0) + glPosition) / 512.0;
    // set distance to a large number
//    vec2 d = vec2(1000.0);
    float d = 10000.0;
    // loop through all data points (XY coords of calculated points)
    for (float i = 0.0; i < 4096.0; i++ )
    {
        // get position in data texture from index of point
        vec2 texCoords = id_to_texCoords(i);
        // get XY coords of point from data texture
        vec4 pPosition = texture2D(data, texCoords.st);
        // calculate the minimum distance to the point being rendered
        // it's actually the distance square but it's faster this way in the loop
        d = min(d, dist(pos.xy, pPosition.xy));
    }
//     mix background color with dot color and smooth
    color = mix(color, bg_color, smoothstep(radius, radius + blur, sqrt(d)));
    return vec4(color, 1.0);
}

void main()
{
    // gl_FragColor is a special GL variable a fragment shader
    // is responsible for setting. It is a RGBA vector of the output color
    gl_FragColor = render(gl_FragCoord); // vec4(computeElement(vTextureCoord), 0.0, 0.0);
}
