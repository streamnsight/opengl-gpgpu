#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D data;          // handler on the data texture
varying vec2 vTextureCoord;      // textures coordinates transferred from vertex shader

uniform float width;
uniform float height;
uniform float scale;

vec4 mandelbrot(vec2 vTextureCoord)
{
    float n = 0.;
    // the 1st vector is the center of the zoom: defined to zoom nicely into more structures
    // then it's XY coords on the texture, offset to center the graph, and scaled
    vec2 c = vec2(-.745,.186) + 3. * (vTextureCoord - 0.5)*pow(.2,0.1+scale),
         z = c*n;
    
    for( int i=0; i<200; i++ )  // iterate to find the divergence
    {
        z = vec2( z.x*z.x - z.y*z.y, 2.*z.x*z.y ) + c;   // basic Mandelbrot formula
        if( dot(z,z)>1e4) break;
        n++;
    }
    // return a value that if function of n (number of iterations to reach divergence) to define the color
    // starting color is (3.0, 4.0, 11.0) which is blueish
    // the n - log2(log2(dot(z,z)) just gives a gradient of colors from the n value
    return .5 + .5*cos( vec4(3,4,11,0) + .05*(n - log2(log2(dot(z,z)))) );
}


void main() {

	gl_FragColor = mandelbrot(vTextureCoord);
}