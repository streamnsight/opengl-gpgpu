#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

void main()
{
	// point color
    vec3 color = vec3(1.0, 0.5, 0.3);

    // smoothing pass (because point primitives are rendered as squares)
    // if distance between current fragment coords (in local sprite space) and 0.5 is above threshold
    // discard the fragment
    vec2 pt = gl_PointCoord - vec2(0.5);
	if(pt.x*pt.x+pt.y*pt.y > 0.25) {
		discard;
	}
    gl_FragColor = vec4(color, 1.0);
}
