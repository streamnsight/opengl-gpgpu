# GPU Computing in the browser with OpenGL

Code for the presentation at the Santa Cruz Javascript Meetup (2017-08-24)

These are a few example of GPU computing:

- Simple math operations: time2 multiplies every element of a matrix by 2, compares to CPU and look at performance.
Try it with various mathematical operations to see when GPU shines.

- Waving flag: 2 versions, processing on GPU and rendering with canvas, or rendering with GPU

- Mandelbrot Set

- Mandelbulb Set: a 3D version of the Mandelbrot set

Althought not technically GPU computing as Mandelbrot sets require no input,
the technique is similar and shows how to render in the canvas directly, as well as the power of the method for such applications.

## Overview

The point of this repository is to show how to setup WebGL to run calculations on the GPU.

## Times2

This example will show results in the console only, so don't expect anything on the page.

It is very similar to what needs to be configured to render a 3D model, except it uses textures to
store input data, which is mapped 1-to-1 to the viewport by rendering a square (2 triangles) over the full
viewport range.

The full texture covers the whole square, so that when rendered on a viewport that is exactly the size of the
input data, each pixel corresponds to a cell in the input data, and can be easily processed by the fragment shader.
Output is rendered in a framebuffer in a canvas not attached to the DOM, so it is not visible.

The data is read out by reading pixels from the texture.

The code runs multiple times and shows timing, compared to CPU.
Try changing the math operation to exp() or log() and see how the GPU, if not better for basic operations like 2x, becomes much more efficient on harder computation.

## Waving flag

There are 3 versions of this example:

- One version that shows the GPU compute with iterations, outputs the data in a buffer (like times2) and renders with `canvas`

- The second one uses the GPU to render the dots, creating a new vertexBuffer with the computed data, using a second shader program to render the dots.

- The third version takes advantage of vertex texture to simulate a geometry shader, and read point coordinates from the texture,
avoiding the readPixel call that transfers data to and from the CPU and is costly. In that version, vertex indices are encoded in the vertexBuffer, instead of XYZ coordinates
and used to look up the coordinates in the texture; This is necessary because the gl_VertexID input is not available in WebGL.


## Mandelbrot set.

Everybody has seen the famous Mandelbrot set: it is a purely computed graphic, meaning each pixel color is determined by looking at the divergence of a complex-number equation.

Since GPU is designed for rendering, this example computes each pixel's color value and renders it as output directly.

## Mandelbulb set

Mandelbulb is a 3D version of the Mandelbrot set. Now instead of complex numbers (2 dimensions) we're adding a dimension, as well as more variants of the bulb.

Check out the shader code for comments on what to play with.

