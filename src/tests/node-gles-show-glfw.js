// Import Libs
const glfw = require("glfw-n-api");
const gles = require('../index.js');
const gl = gles.createWebGLRenderingContext({});

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
  glfw.glfwSetFramebufferSizeCallback(window, (window, fbW, fbH) => {
    gl.glViewport(0, 0, fbW, fbH);
  });
  // Set Current GL Context
  glfw.glfwMakeContextCurrent(window);
  // Pre Loop
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