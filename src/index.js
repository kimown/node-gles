
var bindings = require("bindings")
var binding = bindings('../cmake-build-debug/nodejs_gl_binding.node')



var createWebGLRenderingContext = function (args) {
    const width =  args.width || 1;
    const height = args.height || 1;
    const webGLCompability = args.webGLCompability || false;
    const majorVersion =  args.majorVersion || 3;
    const minorVersion =  args.minorVersion || 0;
    return binding.createWebGLRenderingContext(
        width,
        height,
        majorVersion,
        minorVersion,
        webGLCompability,
    );
}

module.exports ={
    createWebGLRenderingContext
}
