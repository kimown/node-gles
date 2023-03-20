const gles = require('../index.js');

const {createTexture2D, ensureFramebufferAttachment, initEnvGL} =require('./test_utils')

const gl = gles.createWebGLRenderingContext({});
const gl2 = gl ;

gl.getExtension('OES_texture_float');
gl.getExtension('EXT_color_buffer_float');

console.log('VERSION: ' + gl.getParameter(gl.VERSION));
console.log('RENDERER: ' + gl.getParameter(gl.RENDERER));

initEnvGL(gl);  // Don't worry about buffers in this demo

const texture = createTexture2D(gl, gl2.RGBA32F, gl.RGBA, gl.FLOAT);
gl.bindTexture(gl.TEXTURE_2D, texture);

const values = new Float32Array([0.5, 1.5, 2.5, 3.5]);
gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 1, 1, gl.RGBA, gl.FLOAT, values);

const framebuffer = gl.createFramebuffer();

gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
gl.framebufferTexture2D(
    gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
ensureFramebufferAttachment(gl);

const buffer = new Float32Array(4);
gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.FLOAT, buffer);
console.log('buffer: ', buffer);
