/**
 * @constructor
 */
function WebGLRenderingContext() {
}

WebGLRenderingContext.prototype = {
    ACTIVE_ATTRIBUTES: 35721,
    ACTIVE_TEXTURE: 34016,
    ACTIVE_UNIFORMS: 35718,
    ALIASED_LINE_WIDTH_RANGE: 33902,
    ALIASED_POINT_SIZE_RANGE: 33901,
    ALPHA: 6406,
    ALPHA_BITS: 3413,
    ALWAYS: 519,
    ARRAY_BUFFER: 34962,
    ARRAY_BUFFER_BINDING: 34964,
    ATTACHED_SHADERS: 35717,
    BACK: 1029,
    BLEND: 3042,
    BLEND_COLOR: 32773,
    BLEND_DST_ALPHA: 32970,
    BLEND_DST_RGB: 32968,
    BLEND_EQUATION: 32777,
    BLEND_EQUATION_ALPHA: 34877,
    BLEND_EQUATION_RGB: 32777,
    BLEND_SRC_ALPHA: 32971,
    BLEND_SRC_RGB: 32969,
    BLUE_BITS: 3412,
    BOOL: 35670,
    BOOL_VEC2: 35671,
    BOOL_VEC3: 35672,
    BOOL_VEC4: 35673,
    BROWSER_DEFAULT_WEBGL: 37444,
    BUFFER_SIZE: 34660,
    BUFFER_USAGE: 34661,
    BYTE: 5120,
    CCW: 2305,
    CLAMP_TO_EDGE: 33071,
    COLOR_ATTACHMENT0: 36064,
    COLOR_BUFFER_BIT: 16384,
    COLOR_CLEAR_VALUE: 3106,
    COLOR_WRITEMASK: 3107,
    COMPILE_STATUS: 35713,
    COMPRESSED_TEXTURE_FORMATS: 34467,
    CONSTANT_ALPHA: 32771,
    CONSTANT_COLOR: 32769,
    CONTEXT_LOST_WEBGL: 37442,
    CULL_FACE: 2884,
    CULL_FACE_MODE: 2885,
    CURRENT_PROGRAM: 35725,
    CURRENT_VERTEX_ATTRIB: 34342,
    CW: 2304,
    DECR: 7683,
    DECR_WRAP: 34056,
    DELETE_STATUS: 35712,
    DEPTH_ATTACHMENT: 36096,
    DEPTH_BITS: 3414,
    DEPTH_BUFFER_BIT: 256,
    DEPTH_CLEAR_VALUE: 2931,
    DEPTH_COMPONENT: 6402,
    DEPTH_COMPONENT16: 33189,
    DEPTH_FUNC: 2932,
    DEPTH_RANGE: 2928,
    DEPTH_STENCIL: 34041,
    DEPTH_STENCIL_ATTACHMENT: 33306,
    DEPTH_TEST: 2929,
    DEPTH_WRITEMASK: 2930,
    DITHER: 3024,
    DONT_CARE: 4352,
    DST_ALPHA: 772,
    DST_COLOR: 774,
    DYNAMIC_DRAW: 35048,
    ELEMENT_ARRAY_BUFFER: 34963,
    ELEMENT_ARRAY_BUFFER_BINDING: 34965,
    EQUAL: 514,
    FASTEST: 4353,
    FLOAT: 5126,
    FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    FRAGMENT_SHADER: 35632,
    FRAMEBUFFER: 36160,
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
    FRAMEBUFFER_BINDING: 36006,
    FRAMEBUFFER_COMPLETE: 36053,
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
    FRAMEBUFFER_UNSUPPORTED: 36061,
    FRONT: 1028,
    FRONT_AND_BACK: 1032,
    FRONT_FACE: 2886,
    FUNC_ADD: 32774,
    FUNC_REVERSE_SUBTRACT: 32779,
    FUNC_SUBTRACT: 32778,
    GENERATE_MIPMAP_HINT: 33170,
    GEQUAL: 518,
    GREATER: 516,
    GREEN_BITS: 3411,
    HIGH_FLOAT: 36338,
    HIGH_INT: 36341,
    INCR: 7682,
    INCR_WRAP: 34055,
    INT: 5124,
    INT_VEC2: 35667,
    INT_VEC3: 35668,
    INT_VEC4: 35669,
    INVALID_ENUM: 1280,
    INVALID_FRAMEBUFFER_OPERATION: 1286,
    INVALID_OPERATION: 1282,
    INVALID_VALUE: 1281,
    INVERT: 5386,
    KEEP: 7680,
    LEQUAL: 515,
    LESS: 513,
    LINEAR: 9729,
    LINEAR_MIPMAP_LINEAR: 9987,
    LINEAR_MIPMAP_NEAREST: 9985,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    LINE_WIDTH: 2849,
    LINK_STATUS: 35714,
    LOW_FLOAT: 36336,
    LOW_INT: 36339,
    LUMINANCE: 6409,
    LUMINANCE_ALPHA: 6410,
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
    MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
    MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
    MAX_RENDERBUFFER_SIZE: 34024,
    MAX_TEXTURE_IMAGE_UNITS: 34930,
    MAX_TEXTURE_SIZE: 3379,
    MAX_VARYING_VECTORS: 36348,
    MAX_VERTEX_ATTRIBS: 34921,
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
    MAX_VERTEX_UNIFORM_VECTORS: 36347,
    MAX_VIEWPORT_DIMS: 3386,
    MEDIUM_FLOAT: 36337,
    MEDIUM_INT: 36340,
    MIRRORED_REPEAT: 33648,
    NEAREST: 9728,
    NEAREST_MIPMAP_LINEAR: 9986,
    NEAREST_MIPMAP_NEAREST: 9984,
    NEVER: 512,
    NICEST: 4354,
    NONE: 0,
    NOTEQUAL: 517,
    NO_ERROR: 0,
    ONE: 1,
    ONE_MINUS_CONSTANT_ALPHA: 32772,
    ONE_MINUS_CONSTANT_COLOR: 32770,
    ONE_MINUS_DST_ALPHA: 773,
    ONE_MINUS_DST_COLOR: 775,
    ONE_MINUS_SRC_ALPHA: 771,
    ONE_MINUS_SRC_COLOR: 769,
    OUT_OF_MEMORY: 1285,
    PACK_ALIGNMENT: 3333,
    POINTS: 0,
    POLYGON_OFFSET_FACTOR: 32824,
    POLYGON_OFFSET_FILL: 32823,
    POLYGON_OFFSET_UNITS: 10752,
    RED_BITS: 3410,
    RENDERBUFFER: 36161,
    RENDERBUFFER_ALPHA_SIZE: 36179,
    RENDERBUFFER_BINDING: 36007,
    RENDERBUFFER_BLUE_SIZE: 36178,
    RENDERBUFFER_DEPTH_SIZE: 36180,
    RENDERBUFFER_GREEN_SIZE: 36177,
    RENDERBUFFER_HEIGHT: 36163,
    RENDERBUFFER_INTERNAL_FORMAT: 36164,
    RENDERBUFFER_RED_SIZE: 36176,
    RENDERBUFFER_STENCIL_SIZE: 36181,
    RENDERBUFFER_WIDTH: 36162,
    RENDERER: 7937,
    REPEAT: 10497,
    REPLACE: 7681,
    RGB: 6407,
    RGB5_A1: 32855,
    RGB565: 36194,
    RGBA: 6408,
    RGBA4: 32854,
    SAMPLER_2D: 35678,
    SAMPLER_CUBE: 35680,
    SAMPLES: 32937,
    SAMPLE_ALPHA_TO_COVERAGE: 32926,
    SAMPLE_BUFFERS: 32936,
    SAMPLE_COVERAGE: 32928,
    SAMPLE_COVERAGE_INVERT: 32939,
    SAMPLE_COVERAGE_VALUE: 32938,
    SCISSOR_BOX: 3088,
    SCISSOR_TEST: 3089,
    SHADER_TYPE: 35663,
    SHADING_LANGUAGE_VERSION: 35724,
    SHORT: 5122,
    SRC_ALPHA: 770,
    SRC_ALPHA_SATURATE: 776,
    SRC_COLOR: 768,
    STATIC_DRAW: 35044,
    STENCIL_ATTACHMENT: 36128,
    STENCIL_BACK_FAIL: 34817,
    STENCIL_BACK_FUNC: 34816,
    STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
    STENCIL_BACK_PASS_DEPTH_PASS: 34819,
    STENCIL_BACK_REF: 36003,
    STENCIL_BACK_VALUE_MASK: 36004,
    STENCIL_BACK_WRITEMASK: 36005,
    STENCIL_BITS: 3415,
    STENCIL_BUFFER_BIT: 1024,
    STENCIL_CLEAR_VALUE: 2961,
    STENCIL_FAIL: 2964,
    STENCIL_FUNC: 2962,
    STENCIL_INDEX: 6401,
    STENCIL_INDEX8: 36168,
    STENCIL_PASS_DEPTH_FAIL: 2965,
    STENCIL_PASS_DEPTH_PASS: 2966,
    STENCIL_REF: 2967,
    STENCIL_TEST: 2960,
    STENCIL_VALUE_MASK: 2963,
    STENCIL_WRITEMASK: 2968,
    STREAM_DRAW: 35040,
    SUBPIXEL_BITS: 3408,
    TEXTURE: 5890,
    TEXTURE0: 33984,
    TEXTURE1: 33985,
    TEXTURE2: 33986,
    TEXTURE3: 33987,
    TEXTURE4: 33988,
    TEXTURE5: 33989,
    TEXTURE6: 33990,
    TEXTURE7: 33991,
    TEXTURE8: 33992,
    TEXTURE9: 33993,
    TEXTURE10: 33994,
    TEXTURE11: 33995,
    TEXTURE12: 33996,
    TEXTURE13: 33997,
    TEXTURE14: 33998,
    TEXTURE15: 33999,
    TEXTURE16: 34000,
    TEXTURE17: 34001,
    TEXTURE18: 34002,
    TEXTURE19: 34003,
    TEXTURE20: 34004,
    TEXTURE21: 34005,
    TEXTURE22: 34006,
    TEXTURE23: 34007,
    TEXTURE24: 34008,
    TEXTURE25: 34009,
    TEXTURE26: 34010,
    TEXTURE27: 34011,
    TEXTURE28: 34012,
    TEXTURE29: 34013,
    TEXTURE30: 34014,
    TEXTURE31: 34015,
    TEXTURE_2D: 3553,
    TEXTURE_BINDING_2D: 32873,
    TEXTURE_BINDING_CUBE_MAP: 34068,
    TEXTURE_CUBE_MAP: 34067,
    TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
    TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
    TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
    TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
    TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
    TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
    TEXTURE_MAG_FILTER: 10240,
    TEXTURE_MIN_FILTER: 10241,
    TEXTURE_WRAP_S: 10242,
    TEXTURE_WRAP_T: 10243,
    TRIANGLES: 4,
    TRIANGLE_FAN: 6,
    TRIANGLE_STRIP: 5,
    UNPACK_ALIGNMENT: 3317,
    UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
    UNPACK_FLIP_Y_WEBGL: 37440,
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_INT: 5125,
    UNSIGNED_SHORT: 5123,
    UNSIGNED_SHORT_4_4_4_4: 32819,
    UNSIGNED_SHORT_5_5_5_1: 32820,
    UNSIGNED_SHORT_5_6_5: 33635,
    VALIDATE_STATUS: 35715,
    VENDOR: 7936,
    VERSION: 7938,
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
    VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
    VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
    VERTEX_ATTRIB_ARRAY_POINTER: 34373,
    VERTEX_ATTRIB_ARRAY_SIZE: 34339,
    VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
    VERTEX_ATTRIB_ARRAY_TYPE: 34341,
    VERTEX_SHADER: 35633,
    VIEWPORT: 2978,
    ZERO: 0
};

/*
 Per-Fragment Operations [5.13.3]
 */

/**
 * @param {Number} red - float
 * @param {Number} green - float
 * @param {Number} blue - float
 * @param {Number} alpha - float
 */
WebGLRenderingContext.prototype.blendColor = function (red, green, blue, alpha) {
};

/**
 * @param {Number} mode - FUNC_ADD, FUNC_SUBTRACT, FUNC_REVERSE_SUBTRACT
 */
WebGLRenderingContext.prototype.blendEquation = function (mode) {
};

/**
 * @param {Number} modeRGB - FUNC_ADD, FUNC_SUBTRACT, FUNC_REVERSE_SUBTRACT
 * @param {Number} modeAlpha - FUNC_ADD, FUNC_SUBTRACT, FUNC_REVERSE_SUBTRACT
 */
WebGLRenderingContext.prototype.blendEquationSeparate = function (modeRGB, modeAlpha) {
};

/**
 * Note: Src and dst factors may not both reference constant color
 * @param {Number} sfactor - Same as for dfactor, plus SRC_ALPHA_SATURATE
 * @param {Number} dfactor - ZERO, ONE, [ONE_MINUS_]SRC_COLOR, [ONE_MINUS_]DST_COLOR, [ONE_MINUS_]SRC_ALPHA,
 * [ONE_MINUS_]DST_ALPHA, [ONE_MINUS_]CONSTANT_COLOR, [ONE_MINUS_]CONSTANT_ALPHA
 */
WebGLRenderingContext.prototype.blendFunc = function (sfactor, dfactor) {
};

/**
 * Note: Src and dst factors may not both reference constant color
 * @param {Number} srcRGB - See sfactor for blendFunc
 * @param {Number} dstRGB - See sfactor for blendFunc
 * @param {Number} srcAlpha - See dfactor for blendFunc
 * @param {Number} dstAlpha - See dfactor for blendFunc
 */
WebGLRenderingContext.prototype.blendFuncSeparate = function (srcRGB, dstRGB, srcAlpha, dstAlpha) {
};

/**
 * @param {Number} func - NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, NOTEQUAL
 */
WebGLRenderingContext.prototype.depthFunc = function (func) {
};

/**
 * @param {Number} value - float
 * @param {Boolean} invert
 */
WebGLRenderingContext.prototype.sampleCoverage = function (value, invert) {
};

/**
 * @param {Number} func - NEVER, ALWAYS, LESS, LEQUAL, [NOT]EQUAL, GREATER, GEQUAL
 * @param {Number} ref - int
 * @param {Number} mask - uint
 */
WebGLRenderingContext.prototype.stencilFunc = function (func, ref, mask) {
};

/**
 * @param {Number} face - FRONT, BACK, FRONT_AND_BACK
 * @param {Number} func - NEVER, ALWAYS, LESS, LEQUAL, [NOT]EQUAL, GREATER, GEQUAL
 * @param {Number} ref - int
 * @param {Number} mask - uint
 */
WebGLRenderingContext.prototype.stencilFuncSeparate = function (face, func, ref, mask) {
};

/**
 * @param {Number} fail - KEEP, ZERO, REPLACE, INCR, DECR, INVERT, INCR_WRAP, DECR_WRAP
 * @param {Number} zfail - KEEP, ZERO, REPLACE, INCR, DECR, INVERT, INCR_WRAP, DECR_WRAP
 * @param {Number} zpass - KEEP, ZERO, REPLACE, INCR, DECR, INVERT, INCR_WRAP, DECR_WRAP
 */
WebGLRenderingContext.prototype.stencilOp = function (fail, zfail, zpass) {
};

/**
 * @param {Number} face - FRONT, BACK, FRONT_AND_BACK
 * @param {Number} fail - KEEP, ZERO, REPLACE, INCR, DECR, INVERT, INCR_WRAP, DECR_WRAP
 * @param {Number} zfail - KEEP, ZERO, REPLACE, INCR, DECR, INVERT, INCR_WRAP, DECR_WRAP
 * @param {Number} zpass - KEEP, ZERO, REPLACE, INCR, DECR, INVERT, INCR_WRAP, DECR_WRAP
 */
WebGLRenderingContext.prototype.stencilOpSeparate = function (face, fail, zfail, zpass) {
};

/*
 Detect and Enable Extensions [5.13.14]
 */

/**
 * @returns {Array<String>}
 */
WebGLRenderingContext.prototype.getSupportedExtensions = function () {
};

/**
 * @param {String} name
 * @returns {Object}
 */
WebGLRenderingContext.prototype.getExtension = function (name) {
};

/*
 Whole Framebuffer Operations [5.13.3]
 */

/**
 * [5.13.11]
 * @param {Number} mask - Bitwise OR of {COLOR, DEPTH, STENCIL}_BUFFER_BIT
 */
WebGLRenderingContext.prototype.clear = function (mask) {
};

/**
 * @param {Number} red - float
 * @param {Number} green - float
 * @param {Number} blue - float
 * @param {Number} alpha - float
 */
WebGLRenderingContext.prototype.clearColor = function (red, green, blue, alpha) {
};

/**
 * @param {Number} depth - Clamped to the range 0 to 1.
 */
WebGLRenderingContext.prototype.clearDepth = function (depth) {
};

/**
 * @param {Number} s - int
 */
WebGLRenderingContext.prototype.clearStencil = function (s) {
};

/**
 * @param {Boolean} red
 * @param {Boolean} green
 * @param {Boolean} blue
 * @param {Boolean} alpha
 */
WebGLRenderingContext.prototype.colorMask = function (red, green, blue, alpha) {
};

/**
 * @param {Boolean} flag
 */
WebGLRenderingContext.prototype.depthMask = function (flag) {
};

/**
 * @param {Number} mask - uint
 */
WebGLRenderingContext.prototype.stencilMask = function (mask) {
};

/**
 * @param {Number} face - FRONT, BACK, FRONT_AND_BACK
 * @param {Number} mask - uint
 */
WebGLRenderingContext.prototype.stencilMaskSeparate = function (face, mask) {
};

/*
 Buffer Objects [5.13.5]
 Once bound, buffers may not be rebound with a different Target.
 */

/**
 * @param {Number} target - ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER
 * @param {Object} buffer
 */
WebGLRenderingContext.prototype.bindBuffer = function (target, buffer) {
};

/**
 * @param {Number} target - ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER
 * @param {Number} size - long
 * @param {Number} usage - STATIC_DRAW, STREAM_DRAW, DYNAMIC_DRAW
 */
WebGLRenderingContext.prototype.bufferData = function (target, size, usage) {
};

/**
 * @param {Number} target - ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER
 * @param {Object} data
 * @param {Number} usage - STATIC_DRAW, STREAM_DRAW, DYNAMIC_DRAW
 */
WebGLRenderingContext.prototype.bufferData = function (target, data, usage) {
};

/**
 * @param {Number} target - ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER
 * @param {Number} offset - long
 * @param {Object} data
 */
WebGLRenderingContext.prototype.bufferSubData = function (target, offset, data) {
};

/**
 * Note: Corresponding OpenGL ES function is GenBuffers
 * @returns {Object}
 */
WebGLRenderingContext.prototype.createBuffer = function () {
};

/**
 * @param {Object} buffer
 */
WebGLRenderingContext.prototype.deleteBuffer = function (buffer) {
};

/**
 * @param {Number} target - ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER
 * @param {Number} pname - BUFFER_SIZE, BUFFER_USAGE
 */
WebGLRenderingContext.prototype.getBufferParameter = function (target, pname) {
};

/**
 * @param {Object} buffer
 * @returns {Boolean}
 */
WebGLRenderingContext.prototype.isBuffer = function (buffer) {
};

/*
 View and Clip [5.13.3 - 5.13.4]
 The viewport specifies the affine transformation of x
 and y from normalized device coordinates to window
 coordinates. Drawing buffer size is determined by the
 HTMLCanvasElement.
 */

/**
 * @param {Number} zNear - Clamped to the range 0 to 1.
 * @param {Number} zFar - float
 */
WebGLRenderingContext.prototype.depthRange = function (zNear, zFar) {
};

/**
 * @param {Number} x - int
 * @param {Number} y - int
 * @param {Number} width - long
 * @param {Number} height - long
 */
WebGLRenderingContext.prototype.scissor = function (x, y, width, height) {
};

/**
 * @param {Number} x - int
 * @param {Number} y - int
 * @param {Number} width - long
 * @param {Number} height - long
 */
WebGLRenderingContext.prototype.viewport = function (x, y, width, height) {
};

/*
 Rasterization [5.13.3]
 */

/**
 * @param {Number} mode - BACK, FRONT_AND_BACK, FRONT
 */
WebGLRenderingContext.prototype.cullFace = function (mode) {
};

/**
 * @param {Number} mode - CCW, CW
 */
WebGLRenderingContext.prototype.frontFace = function (mode) {
};

/**
 * @param {Number} width - float
 */
WebGLRenderingContext.prototype.lineWidth = function (width) {
};

/**
 * @param {Number} factor - float
 * @param {Number} units - float
 */
WebGLRenderingContext.prototype.polygonOffset = function (factor, units) {
};

/*
 Detect context lost events [5.13.13]
 */

/**
 * @returns {Boolean}
 */
WebGLRenderingContext.prototype.isContextLost = function () {
};

/*
 Programs and Shaders [5.13.9]
 Rendering with OpenGL ES 2.0 requires the use of shaders.
 Shaders must be loaded with a source string (shaderSource),
 compiled (compileShader), and attached to a program
 (attachShader) which must be linked (linkProgram) and then
 used (useProgram).
 */
/**
 * @param {Object} program
 * @param {Object} shader
 */
WebGLRenderingContext.prototype.attachShader = function (program, shader) {
};

/**
 * @param {Object} program
 * @param {Number} index - uint
 * @param {String} name
 */
WebGLRenderingContext.prototype.bindAttribLocation = function (program, index, name) {
};

/**
 * @returns {Object}
 */
WebGLRenderingContext.prototype.createProgram = function () {
};

/**
 * @param {Number} type - VERTEX_SHADER, FRAGMENT_SHADER
 * @returns {Object}
 */
WebGLRenderingContext.prototype.createShader = function (type) {
};

/**
 * @param {Object} shader
 */
WebGLRenderingContext.prototype.compileShader = function (shader) {
};

/**
 * @param {Object} program
 */
WebGLRenderingContext.prototype.deleteProgram = function (program) {
};

/**
 * @param {Object} shader
 */
WebGLRenderingContext.prototype.deleteShader = function (shader) {
};

/**
 * @param {Object} program
 * @param {Object} shader
 */
WebGLRenderingContext.prototype.detachShader = function (program, shader) {
};

/**
 * @param {Object} program
 * @returns {Array<Object>}
 */
WebGLRenderingContext.prototype.getAttachedShaders = function (program) {
};

/**
 * Note: Corresponding OpenGL ES function is GetProgramiv
 * @param {Object} program
 * @param {Number} pname - DELETE_STATUS, LINK_STATUS, VALIDATE_STATUS, ATTACHED_SHADERS, ACTIVE_{ATTRIBUTES, UNIFORMS}
 * @returns {*}
 */
WebGLRenderingContext.prototype.getProgramParameter = function (program, pname) {
};

/**
 * @param {Object} program
 * @returns {String}
 */
WebGLRenderingContext.prototype.getProgramInfoLog = function (program) {
};

/**
 * Note: Corresponding OpenGL ES function is GetShaderiv
 * @param {Object} shader
 * @param {Number} pname - SHADER_TYPE, DELETE_STATUS, COMPILE_STATUS
 * @returns {*}
 */
WebGLRenderingContext.prototype.getShaderParameter = function (shader, pname) {
};

/**
 * @param {Object} shader
 * @returns {String}
 */
WebGLRenderingContext.prototype.getShaderInfoLog = function (shader) {
};

/**
 * @param {Object} shader
 * @returns {String}
 */
WebGLRenderingContext.prototype.getShaderSource = function (shader) {
};

/**
 * @param {Object} program
 * @returns {Boolean}
 */
WebGLRenderingContext.prototype.isProgram = function (program) {
};

/**
 * @param {Object} shader
 * @returns {Boolean}
 */
WebGLRenderingContext.prototype.isShader = function (shader) {
};

/**
 * @param {Object} program
 */
WebGLRenderingContext.prototype.linkProgram = function (program) {
};

/**
 * @param {Object} shader
 * @param {String} source
 */
WebGLRenderingContext.prototype.shaderSource = function (shader, source) {
};

/**
 * @param {Object} program
 */
WebGLRenderingContext.prototype.useProgram = function (program) {
};

/**
 * @param {Object} program
 */
WebGLRenderingContext.prototype.validateProgram = function (program) {
};

/*
 Uniforms and Attributes [5.13.10]
 Values used by the shaders are passed in as uniform of vertex
 attributes.
 */

/**
 * @param {Number} index - [0, MAX_VERTEX_ATTRIBS - 1]
 */
WebGLRenderingContext.prototype.disableVertexAttribArray = function (index) {
};

/**
 * @param {Number} index - [0, MAX_VERTEX_ATTRIBS - 1]
 */
WebGLRenderingContext.prototype.enableVertexAttribArray = function (index) {
};

/**
 * @param {Object} program
 * @param {Number} index - [0, MAX_VERTEX_ATTRIBS - 1]
 * @returns {Object}
 */
WebGLRenderingContext.prototype.getActiveAttrib = function (program, index) {
};

/**
 * @param {Object} program
 * @param {Number} index - [0, MAX_VERTEX_ATTRIBS - 1]
 * @returns {Object}
 */
WebGLRenderingContext.prototype.getActiveUniform = function (program, index) {
};

/**
 * @param {Object} program
 * @param {String} name
 * @returns {Number} - ulong
 */
WebGLRenderingContext.prototype.getAttribLocation = function (program, name) {
};

/**
 * @param {Object} program
 * @param {Number} location - uint
 * @returns {*}
 */
WebGLRenderingContext.prototype.getUniform = function (program, location) {
};

/**
 * @param {Object} program
 * @param {String} name
 * @returns {Number} - uint
 */
WebGLRenderingContext.prototype.getUniformLocation = function (program, name) {
};

/**
 * @param {Number} index - [0, MAX_VERTEX_ATTRIBS - 1]
 * @param {Number} pname - CURRENT_VERTEX_ATTRIB , VERTEX_ATTRIB_ARRAY_{BUFFER_BINDING, ENABLED, SIZE, STRIDE, TYPE,
 * NORMALIZED}
 * @returns {*}
 */
WebGLRenderingContext.prototype.getVertexAttrib = function (index, pname) {
};

/**
 * Note: Corres. OpenGL ES function is GetVertexAttribPointerv
 * @param {Number} index - [0, MAX_VERTEX_ATTRIBS - 1]
 * @param {Number} pname - VERTEX_ATTRIB_ARRAY_POINTER
 * @returns {Number} - long
 */
WebGLRenderingContext.prototype.getVertexAttribOffset = function (index, pname) {
};

/**
 * @param {Number} location - uint
 * @param {Number} v1 - float
 */
WebGLRenderingContext.prototype.uniform1f = function (location, v1) {
};

/**
 * @param {Number} location - uint
 * @param {Number} v1 - float
 * @param {Number} v2 - float
 */
WebGLRenderingContext.prototype.uniform2f = function (location, v1, v2) {
};

/**
 * @param {Number} location - uint
 * @param {Number} v1 - float
 * @param {Number} v2 - float
 * @param {Number} v3 - float
 */
WebGLRenderingContext.prototype.uniform3f = function (location, v1, v2, v3) {
};

/**
 * @param {Number} location - uint
 * @param {Number} v1 - float
 * @param {Number} v2 - float
 * @param {Number} v3 - float
 * @param {Number} v4 - float
 */
WebGLRenderingContext.prototype.uniform4f = function (location, v1, v2, v3, v4) {
};

/**
 * @param {Number} location - uint
 * @param {Number} v1 - int
 */
WebGLRenderingContext.prototype.uniform1i = function (location, v1) {
};

/**
 * @param {Number} location - uint
 * @param {Number} v1 - int
 * @param {Number} v2 - int
 */
WebGLRenderingContext.prototype.uniform2i = function (location, v1, v2) {
};

/**
 * @param {Number} location - uint
 * @param {Number} v1 - int
 * @param {Number} v2 - int
 * @param {Number} v3 - int
 */
WebGLRenderingContext.prototype.uniform3i = function (location, v1, v2, v3) {
};

/**
 * @param {Number} location - uint
 * @param {Number} v1 - int
 * @param {Number} v2 - int
 * @param {Number} v3 - int
 * @param {Number} v4 - int
 */
WebGLRenderingContext.prototype.uniform4i = function (location, v1, v2, v3, v4) {
};

/**
 * @param {Number} location - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniform1fv = function (location, value) {
};

/**
 * @param {Number} location - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniform2fv = function (location, value) {
};

/**
 * @param {Number} location - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniform3fv = function (location, value) {
};

/**
 * @param {Number} location - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniform4fv = function (location, value) {
};

/**
 * @param {Number} location - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniform1iv = function (location, value) {
};

/**
 * @param {Number} location - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniform2iv = function (location, value) {
};

/**
 * @param {Number} location - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniform3iv = function (location, value) {
};

/**
 * @param {Number} location - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniform4iv = function (location, value) {
};

/**
 * @param {Number} location - uint
 * @param {Boolean} transpose - FALSE
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniformMatrix2fv = function (location, transpose, value) {
};

/**
 * @param {Number} location - uint
 * @param {Boolean} transpose - FALSE
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniformMatrix3fv = function (location, transpose, value) {
};

/**
 * @param {Number} location - uint
 * @param {Boolean} transpose - FALSE
 * @param {Array} value
 */
WebGLRenderingContext.prototype.uniformMatrix4fv = function (location, transpose, value) {
};

/**
 * @param {Number} index - uint
 * @param {Number} v1 - float
 */
WebGLRenderingContext.prototype.vertexAttrib1f = function (index, v1) {
};

/**
 * @param {Number} index - uint
 * @param {Number} v1 - float
 * @param {Number} v2 - float
 */
WebGLRenderingContext.prototype.vertexAttrib2f = function (index, v1, v2) {
};

/**
 * @param {Number} index - uint
 * @param {Number} v1 - float
 * @param {Number} v2 - float
 * @param {Number} v3 - float
 */
WebGLRenderingContext.prototype.vertexAttrib3f = function (index, v1, v2, v3) {
};

/**
 * @param {Number} index - uint
 * @param {Number} v1 - float
 * @param {Number} v2 - float
 * @param {Number} v3 - float
 * @param {Number} v4 - float
 */
WebGLRenderingContext.prototype.vertexAttrib4f = function (index, v1, v2, v3, v4) {
};

/**
 * @param {Number} index - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.vertexAttrib1fv = function (index, value) {
};

/**
 * @param {Number} index - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.vertexAttrib2fv = function (index, value) {
};

/**
 * @param {Number} index - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.vertexAttrib3fv = function (index, value) {
};

/**
 * @param {Number} index - uint
 * @param {Array} value
 */
WebGLRenderingContext.prototype.vertexAttrib4fv = function (index, value) {
};

/**
 * @param {Number} index - [0, MAX_VERTEX_ATTRIBS - 1]
 * @param {Number} size
 * @param {Number} type - BYTE, SHORT, UNSIGNED_{BYTE, SHORT}, FIXED, FLOAT
 * @param {Boolean} normalized
 * @param {Number} stride - must be a multiple of the type size in WebGL, [0, 255]
 * @param {Number} offset - must be a multiple of the type size in WebGL
 */
WebGLRenderingContext.prototype.vertexAttribPointer = function (index, size, type, normalized, stride, offset) {
};

/*
 Texture Objects [5.13.8]
 Texture objects provide storage and state for texturing
 operations. WebGL adds an error for operations relating to the
 currently bound texture if no texture is bound.
 */

/**
 * @param {Number} texture - [TEXTURE0..TEXTUREi] where i = MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1
 */
WebGLRenderingContext.prototype.activeTexture = function (texture) {
};

/**
 * @param {Number} target - TEXTURE_2D, TEXTURE_CUBE_MAP
 * @param {Object} texture
 */
WebGLRenderingContext.prototype.bindTexture = function (target, texture) {
};

/**
 * @param {Number} target - TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_{X,Y,Z}, TEXTURE_CUBE_MAP_NEGATIVE_{X,Y,Z}
 * @param {Number} level - int
 * @param {Number} internalformat - ALPHA, LUMINANCE, LUMINANCE_ALPHA, RGB[A]
 * @param {Number} x - int
 * @param {Number} y - int
 * @param {Number} width - long
 * @param {Number} height - long
 * @param {Number} border - int
 */
WebGLRenderingContext.prototype.copyTexImage2D = function (target, level, internalformat, x, y, width, height, border) {
};

/**
 * @param {Number} target - TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_{X,Y,Z}, TEXTURE_CUBE_MAP_NEGATIVE_{X,Y,Z}
 * @param {Number} level - int
 * @param {Number} xoffset - int
 * @param {Number} yoffset - int
 * @param {Number} x - int
 * @param {Number} y - int
 * @param {Number} width - long
 * @param {Number} height - long
 */
WebGLRenderingContext.prototype.copyTexSubImage2D = function (target, level, xoffset, yoffset, x, y, width, height) {
};

/**
 * Note: Corresponding OpenGL ES function is GenTextures
 * @returns {Object}
 */
WebGLRenderingContext.prototype.createTexture = function () {
};

/**
 * @param {Object} texture
 */
WebGLRenderingContext.prototype.deleteTexture = function (texture) {
};

/**
 * @param {Number} target - TEXTURE_2D, TEXTURE_CUBE_MAP
 */
WebGLRenderingContext.prototype.generateMipmap = function (target) {
};

/**
 * @param {Number} target - TEXTURE_2D, TEXTURE_CUBE_MAP
 * @param {Number} pname - TEXTURE_WRAP_{S, T}, TEXTURE_{MIN, MAG}_FILTER
 * @returns {*}
 */
WebGLRenderingContext.prototype.getTexParameter = function (target, pname) {
};

/**
 * @param {Object} texture
 * @returns {Boolean}
 */
WebGLRenderingContext.prototype.isTexture = function (texture) {
};

/**
 * @param {Number} target - TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_{X,Y,Z}, TEXTURE_CUBE_MAP_NEGATIVE_{X,Y,Z}
 * @param {Number} level - int
 * @param {Number} internalformat - ALPHA, LUMINANCE, LUMINANCE_ALPHA, RGB[A]
 * @param {Number} width - long
 * @param {Number} height - long
 * @param {Number} border - int
 * @param {Number} format - ALPHA, RGB, RGBA, LUMINANCE, LUMINANCE_ALPHA
 * @param {Number} type - UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1
 * @param {Object} pixels
 */
WebGLRenderingContext.prototype.texImage2D = function (target, level, internalformat, width, height, border, format,
                                                       type, pixels) {
};

/**
 * @param {Number} target - TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_{X,Y,Z}, TEXTURE_CUBE_MAP_NEGATIVE_{X,Y,Z}
 * @param {Number} level - int
 * @param {Number} internalformat - ALPHA, LUMINANCE, LUMINANCE_ALPHA, RGB[A]
 * @param {Number} format - ALPHA, RGB, RGBA, LUMINANCE, LUMINANCE_ALPHA
 * @param {Number} type - UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1
 * @param {Object} object - pixels of type ImageData, image of type HTMLImageElement, canvas of type HTMLCanvasElement,
 * video of type HTMLVideoElement
 */
WebGLRenderingContext.prototype.texImage2D = function (target, level, internalformat, format, type, object) {
};

/**
 * @param {Number} target - TEXTURE_2D, TEXTURE_CUBE_MAP
 * @param {Number} pname - TEXTURE_WRAP_{S, T}, TEXTURE_{MIN, MAG}_FILTER
 * @param {Number} param - float
 */
WebGLRenderingContext.prototype.texParameterf = function (target, pname, param) {
};

/**
 * @param {Number} target - TEXTURE_2D, TEXTURE_CUBE_MAP
 * @param {Number} pname - TEXTURE_WRAP_{S, T}, TEXTURE_{MIN, MAG}_FILTER
 * @param {Number} param - int
 */
WebGLRenderingContext.prototype.texParameteri = function (target, pname, param) {
};

/**
 * @param {Number} target - TEXTURE_CUBE_MAP_POSITIVE_{X, Y, Z}, TEXTURE_CUBE_MAP_NEGATIVE_{X, Y, Z}
 * @param {Number} level - int
 * @param {Number} xoffset - int
 * @param {Number} yoffset - int
 * @param {Number} width - long
 * @param {Number} height - long
 * @param {Number} format - ALPHA, RGB, RGBA, LUMINANCE, LUMINANCE_ALPHA
 * @param {Number} type - UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1
 * @param {Object} pixels
 */
WebGLRenderingContext.prototype.texSubImage2D = function (target, level, xoffset, yoffset, width, height, format,
                                                          type, pixels) {
};

/**
 * @param {Number} target - TEXTURE_CUBE_MAP_POSITIVE_{X, Y, Z}, TEXTURE_CUBE_MAP_NEGATIVE_{X, Y, Z}
 * @param {Number} level - int
 * @param {Number} xoffset - int
 * @param {Number} yoffset - int
 * @param {Number} format - ALPHA, RGB, RGBA, LUMINANCE, LUMINANCE_ALPHA
 * @param {Number} type - UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1
 * @param {Object} object - pixels of type ImageData, image of type HTMLImageElement, canvas of type HTMLCanvasElement,
 * video of type HTMLVideoElement
 */
WebGLRenderingContext.prototype.texSubImage2D = function (target, level, xoffset, yoffset, format, type, object) {
};

/*
 Writing to the Draw Buffer [5.13.11]
 When rendering is directed to drawing buffer, OpenGL ES 2.0
 rendering calls cause the drawing buffer to be presented to the
 HTML page compositor at start of next compositing operation.
 */

/**
 * @param {Number} mode - POINTS, LINE_STRIP, LINE_LOOP, LINES, TRIANGLE_STRIP, TRIANGLE_FAN, TRIANGLES
 * @param {Number} first - int, May not be a negative value
 * @param {Number} count - long
 */
WebGLRenderingContext.prototype.drawArrays = function (mode, first, count) {
};

/**
 * @param {Number} mode - POINTS, LINE_STRIP, LINE_LOOP, LINES, TRIANGLE_STRIP, TRIANGLE_FAN, TRIANGLES
 * @param {Number} count - long
 * @param {Number} type - UNSIGNED_BYTE, UNSIGNED_SHORT
 * @param {Number} offset - long
 */
WebGLRenderingContext.prototype.drawElements = function (mode, count, type, offset) {
};

/*
 Special Functions [5.13.3]
 contextStruct getContextAttributes() [5.13.2]
 */

/**
 * @param {Number} cap - BLEND, CULL_FACE, DEPTH_TEST, DITHER, POLYGON_OFFSET_FILL, SAMPLE_ALPHA_TO_COVERAGE,
 * SAMPLE_COVERAGE, SCISSOR_TEST, STENCIL_TEST
 */
WebGLRenderingContext.prototype.disable = function (cap) {
};

/**
 * @param {Number} cap - BLEND, CULL_FACE, DEPTH_TEST, DITHER, POLYGON_OFFSET_FILL, SAMPLE_ALPHA_TO_COVERAGE,
 * SAMPLE_COVERAGE, SCISSOR_TEST, STENCIL_TEST
 */
WebGLRenderingContext.prototype.enable = function (cap) {
};

/**
 * [5.13.11]
 */
WebGLRenderingContext.prototype.finish = function () {
};

/**
 * [5.13.11]
 */
WebGLRenderingContext.prototype.flush = function () {
};

/**
 * @returns {Number} - OUT_OF_MEMORY, INVALID_{ENUM, OPERATION, FRAMEBUFFER_OPERATION, VALUE}, NO_ERROR,
 * CONTEXT_LOST_WEBGL
 */
WebGLRenderingContext.prototype.getError = function () {
};

/**
 * @param {Number} pname - {ALPHA, RED, GREEN, BLUE, SUBPIXEL}_BITS, ACTIVE_TEXTURE, ALIASED_{LINE_WIDTH,
 * POINT_SIZE}_RANGE, ARRAY_BUFFER_BINDING, BLEND_DST_{ALPHA, RGB}, BLEND_EQUATION_{ALPHA, RGB}, BLEND_SRC_{ALPHA, RGB},
 * BLEND[_COLOR], COLOR_{CLEAR_VALUE, WRITEMASK}, [NUM_]COMPRESSED_TEXTURE_FORMATS, CULL_FACE[_MODE], CURRENT_PROGRAM,
 * DEPTH_{BITS, CLEAR_VALUE, FUNC, RANGE, TEST, WRITEMASK}, ELEMENT_ARRAY_BUFFER_BINDING, DITHER, FRAMEBUFFER_BINDING,
 * FRONT_FACE, GENERATE_MIPMAP_HINT, LINE_WIDTH, MAX_[COMBINED_]TEXTURE_IMAGE_UNITS, MAX_{CUBE_MAP_TEXTURE,
 * RENDERBUFFER, TEXTURE}_SIZE, MAX_VARYING_VECTORS, MAX_VERTEX_{ATTRIBS, TEXTURE_IMAGE_UNITS, UNIFORM_VECTORS},
 * MAX_VIEWPORT_DIMS, PACK_ALIGNMENT, POLYGON_OFFSET_{FACTOR, FILL, UNITS}, RENDERBUFFER_BINDING, RENDERER,
 * SAMPLE_BUFFERS, SAMPLE_COVERAGE_{INVERT, VALUE}, SAMPLES, SCISSOR_{BOX, TEST}, SHADING_LANGUAGE_VERSION,
 * STENCIL_{BITS, CLEAR_VALUE, TEST}, STENCIL_[BACK_]{FAIL, FUNC, REF,VALUE_MASK, WRITEMASK},
 * STENCIL_[BACK_]PASS_DEPTH_{FAIL, PASS}, TEXTURE_BINDING_{2D, CUBE_MAP}, UNPACK_ALIGNMENT,
 * UNPACK_{COLORSPACE_CONVERSION_WEBGL, FLIP_Y_WEBGL, PREMULTIPLY_ALPHA_WEBGL}, VENDOR, VERSION, VIEWPORT
 * @returns {*}
 */
WebGLRenderingContext.prototype.getParameter = function (pname) {
};

/**
 * @param {Number} target - GENERATE_MIPMAP_HINT
 * @param {Number} hint - FASTEST, NICEST, DONT_CARE
 */
WebGLRenderingContext.prototype.hint = function (target, hint) {
};

/**
 * @param {Number} cap - BLEND, CULL_FACE, DEPTH_TEST, DITHER, POLYGON_OFFSET_FILL, SAMPLE_ALPHA_TO_COVERAGE,
 * SAMPLE_COVERAGE, SCISSOR_TEST, STENCIL_TEST
 * @returns {Boolean}
 */
WebGLRenderingContext.prototype.isEnabled = function (cap) {
};

/**
 * @param {Number} pname - UNPACK_ALIGNMENT, PACK_ALIGNMENT, UNPACK_{FLIP_Y_WEBGL, PREMULTIPLY_ALPHA_WEBGL},
 * UNPACK_COLORSPACE_CONVERSION_WEBGL
 * @param {Number} param - int
 */
WebGLRenderingContext.prototype.pixelStorei = function (pname, param) {
};

/*
 Renderbuffer Objects [5.13.7]
 Renderbuffer objects are used to provide storage for the
 individual buffers used in a framebuffer object.
 */

/**
 * @param {Number} target - RENDERBUFFER
 * @param {Object} renderbuffer
 */
WebGLRenderingContext.prototype.bindRenderbuffer = function (target, renderbuffer) {
};

/**
 * Note: Corresponding OpenGL ES function is GenRenderbuffers
 * @returns {Object}
 */
WebGLRenderingContext.prototype.createRenderbuffer = function () {
};

/**
 * @param {Object} renderbuffer
 */
WebGLRenderingContext.prototype.deleteRenderbuffer = function (renderbuffer) {
};

/**
 * @param {Number} target - RENDERBUFFER
 * @param {Number} pname - RENDERBUFFER_{WIDTH,HEIGHT,INTERNAL_FORMAT},
 * RENDEDRBUFFER_{RED,GREEN,BLUE,ALPHA,DEPTH,STENCIL}_SIZE
 * @returns {*}
 */
WebGLRenderingContext.prototype.getRenderbufferParameter = function (target, pname) {
};

/**
 * @param {Object} renderbuffer
 * @returns {Boolean}
 */
WebGLRenderingContext.prototype.isRenderbuffer = function (renderbuffer) {
};

/**
 * @param {Number} target - RENDERBUFFER
 * @param {Number} internalformat - DEPTH_COMPONENT16, RGBA4, RGB5_A1, RGB565, STENCIL_INDEX8
 * @param {Number} width - long
 * @param {Number} height - long
 */
WebGLRenderingContext.prototype.renderbufferStorage = function (target, internalformat, width, height) {
};

/*
 Read Back Pixels [5.13.12]
 Pixels in the current framebuffer can be read back into an
 ArrayBufferView object.
 */

/**
 * @param {Number} x - int
 * @param {Number} y - int
 * @param {Number} width - long
 * @param {Number} height - long
 * @param {Number} format - ALPHA, RGB, RGBA, LUMINANCE, LUMINANCE_ALPHA
 * @param {Number} type - UNSIGNED_BYTE
 * @param {Object} pixels
 */
WebGLRenderingContext.prototype.readPixels = function (x, y, width, height, format, type, pixels) {
};

/*
 Framebuffer Objects [5.13.6]
 Framebuffer objects provide an alternative rendering target to
 the drawing buffer.
 */

/**
 * @param {Number} target - FRAMEBUFFER
 * @param {Object} framebuffer
 */
WebGLRenderingContext.prototype.bindFramebuffer = function (target, framebuffer) {
};

/**
 * @param {Number} target - FRAMEBUFFER
 * @returns {Number} - FRAMEBUFFER_{COMPLETE, UNSUPPORTED}, FRAMEBUFFER_INCOMPLETE_{ATTACHMENT, DIMENSIONS,
 * MISSING_ATTACHMENT}
 */
WebGLRenderingContext.prototype.checkFramebufferStatus = function (target) {
};

/**
 * Note: Corresponding OpenGL ES function is GenFramebuffers
 * @returns {Object}
 */
WebGLRenderingContext.prototype.createFramebuffer = function () {
};

/**
 * @param {Object} buffer
 */
WebGLRenderingContext.prototype.deleteFramebuffer = function (buffer) {
};

/**
 * @param {Number} target - FRAMEBUFFER
 * @param {Number} attachment - COLOR_ATTACHMENT0, {DEPTH, STENCIL}_ATTACHMENT
 * @param {Number} renderbuffertarget - RENDERBUFFER
 * @param {Object} renderbuffer
 */
WebGLRenderingContext.prototype.framebufferRenderbuffer = function (target, attachment, renderbuffertarget,
                                                                    renderbuffer) {
};

/**
 * @param {Object} framebuffer
 * @returns {Boolean}
 */
WebGLRenderingContext.prototype.isFramebuffer = function (framebuffer) {
};

/**
 * @param {Number} target - FRAMEBUFFER
 * @param {Number} attachment - COLOR_ATTACHMENT0, {DEPTH, STENCIL}_ATTACHMENT
 * @param {Number} textarget - TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE{X, Y, Z}, TEXTURE_CUBE_MAP_NEGATIVE{X, Y, Z},
 * @param {Object} texture
 * @param {Number} level - int
 */
WebGLRenderingContext.prototype.framebufferTexture2D = function (target, attachment, textarget, texture, level) {
};

/**
 * @param {Number} target - FRAMEBUFFER
 * @param {Number} attachment - COLOR_ATTACHMENT0, {DEPTH, STENCIL}_ATTACHMENT
 * @param {Number} pname - FRAMEBUFFER_ATTACHMENT_OBJECT_{TYPE, NAME}, FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL,
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE
 * @returns {*}
 */
WebGLRenderingContext.prototype.getFramebufferAttachmentParameter = function (target, attachment, pname) {
};
