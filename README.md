# GPU Computing in the browser with OpenGL

These are a few example of GPU computing.

- Simple math operations: time2 multiplies every element of a matrix by 2
- Mandelbrot
- Mandelbulb

Althought not technically GPU computing as Mandelbrot sets require no input,
the technique is similar and shows how to render in the canvas directly, as well as the power of the method for such applications.

## Overview

The point of this repository is to show how to setup WebGL to run calculations on the GPU.

## Time2

This example will show results in the console only
It is very similar to what needs to be configured to render a 3D model, except it uses textures to
store input data, which is mapped 1-to-1 to the viewport by rendering a square (2 triangles) over the full
viewport range. The full texture covers the whole square, so that when rendered on a viewport that is exactly the size of the
input data, each pixel corresponds to a cell in the input data, and can be easily processed by the fragment shader.
Output is rendered in a framebuffer in a canvas not attached to the DOM, so it is not visible.

The data is read out by reading pixels from the texture.

## Mandelbrot set.