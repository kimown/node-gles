cmake_minimum_required(VERSION 2.8.8 FATAL_ERROR)
cmake_policy(VERSION 2.8.8)
project(nodejs_gl_binding)
set(configuration "Debug")
enable_language(ASM)
set(builddir "${CMAKE_CURRENT_BINARY_DIR}")
set(obj "${builddir}/obj")

set(CMAKE_C_OUTPUT_EXTENSION_REPLACE 1)
set(CMAKE_CXX_OUTPUT_EXTENSION_REPLACE 1)

set(CMAKE_NINJA_FORCE_RESPONSE_FILE 1)


#binding.gyp:nodejs_gl_binding#target
set(TARGET "nodejs_gl_binding")
set(TOOLSET "target")
list(APPEND nodejs_gl_binding__cxx_srcs
  "/media/google/Data/com/github/node-gles/binding/binding.cc"
  "/media/google/Data/com/github/node-gles/binding/egl_context_wrapper.cc"
  "/media/google/Data/com/github/node-gles/binding/webgl_extensions.cc"
  "/media/google/Data/com/github/node-gles/binding/webgl_rendering_context.cc"
  "/media/google/Data/com/github/node-gles/binding/webgl_sync.cc")
link_directories()
add_library(nodejs_gl_binding MODULE ${nodejs_gl_binding__cxx_srcs})
set_target_properties(nodejs_gl_binding PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(nodejs_gl_binding PROPERTIES LIBRARY_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(nodejs_gl_binding PROPERTIES PREFIX "")
set_target_properties(nodejs_gl_binding PROPERTIES LIBRARY_OUTPUT_NAME "nodejs_gl_binding")
set_target_properties(nodejs_gl_binding PROPERTIES SUFFIX ".node")
set_source_files_properties(${builddir}/nodejs_gl_binding.node PROPERTIES GENERATED "TRUE")
list(APPEND nodejs_gl_binding__include_dirs
  "/home/google/.cache/node-gyp/16.19.0/include/node"
  "/home/google/.cache/node-gyp/16.19.0/src"
  "/home/google/.cache/node-gyp/16.19.0/deps/openssl/config"
  "/home/google/.cache/node-gyp/16.19.0/deps/openssl/openssl/include"
  "/home/google/.cache/node-gyp/16.19.0/deps/uv/include"
  "/home/google/.cache/node-gyp/16.19.0/deps/zlib"
  "/home/google/.cache/node-gyp/16.19.0/deps/v8/include"
#  "${CMAKE_CURRENT_LIST_DIR}/../../.."
  "/media/google/Data/com/github/node-gles/deps"
  "/media/google/Data/com/github/node-gles/deps/angle/include")
set_property(TARGET nodejs_gl_binding APPEND PROPERTY INCLUDE_DIRECTORIES ${nodejs_gl_binding__include_dirs})
set_target_properties(nodejs_gl_binding PROPERTIES COMPILE_DEFINITIONS "NODE_GYP_MODULE_NAME=nodejs_gl_binding;USING_UV_SHARED=1;USING_V8_SHARED=1;V8_DEPRECATION_WARNINGS=1;V8_DEPRECATION_WARNINGS;V8_IMMINENT_DEPRECATION_WARNINGS;_GLIBCXX_USE_CXX11_ABI=1;_LARGEFILE_SOURCE;_FILE_OFFSET_BITS=64;__STDC_FORMAT_MACROS;OPENSSL_NO_PINSHARED;OPENSSL_THREADS;BUILDING_NODE_EXTENSION;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(nodejs_gl_binding PROPERTIES COMPILE_FLAGS "-fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -g -O0 -fno-rtti -fno-exceptions -std=gnu++14 ")
set_target_properties(nodejs_gl_binding PROPERTIES LINK_FLAGS "-pthread -rdynamic -m64 ")
set_target_properties(nodejs_gl_binding PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-undefined dynamic_lookup ")
set_target_properties(nodejs_gl_binding PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
target_link_libraries(nodejs_gl_binding
  "-Wl,-rpath"
  "-lGLESv2"
  "-lEGL"
)
unset(TOOLSET)
unset(TARGET)
