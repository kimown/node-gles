// Import Libs
const glfw = require("glfw-n-api");
const gles = require('../index.js');

// egl 的display not right, egl_context_wrapper.cc eglMakeCurrent error
// Setup Code
async function main() {

  // Init GLFW
  if (!glfw.glfwInit()) {
    glfw.glfwTerminate();
    process.exit(1);
  }

  // Define Constants
  const WINDOW_WIDTH = 600;
  const WINDOW_HEIGHT = 600;
  // Create Window
  const window = glfw.glfwCreateWindow(
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    "OpenGLNode",
    null,
    null
  );
  if (!window) {
    glfw.glfwTerminate();
    process.exit(1);
  }

  // Get Buffer Size
  // glfw.glfwSetFramebufferSizeCallback(window, (window, fbW, fbH) => {
  //   gl.glViewport(0, 0, fbW, fbH);
  // });
  // Set Current GL Context
  glfw.glfwMakeContextCurrent(window);
  // Pre Loop
  const gl = gles.createWebGLRenderingContext({});
  gl.getExtension('OES_texture_float');
  gl.getExtension('EXT_color_buffer_float');

  console.log('VERSION: ' + gl.getParameter(gl.VERSION));
  console.log('RENDERER: ' + gl.getParameter(gl.RENDERER));
  gl.clearColor(0.0, 1.0, 0.0, 0.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  // Main
  while (!glfw.glfwWindowShouldClose(window)) {
    // Check Window Events
    glfw.glfwPollEvents();
    // Clear the screen
    gl.clearColor(0.0, 1.0, 0.0, 0.0);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    // Draw - End
    glfw.glfwSwapBuffers(window);
    gl.flush()
  }
  // Deallocate GLFW Context
  glfw.glfwTerminate();
  // Exit Program
  process.exit(0);
}
// Start
main();