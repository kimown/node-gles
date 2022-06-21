ANGLE_DEFAULT_PLATFORM=vulkan LD_LIBRARY_PATH=/home/h/com/mdk/angle/out/Debug ldd build/Release/nodejs_gl_binding.node
ls /home/h/com/mdk/angle/out/Debug/*.so
node-gyp rebuild
echo $DISPLAY
ANGLE_DEFAULT_PLATFORM=vulkan LD_LIBRARY_PATH=/home/h/com/mdk/angle/out/Debug yarn ts-node src/tests/float_texture_upload_test.ts

```
WARN: RendererVk.cpp:359 (DebugUtilsMessenger): [ Loader Message ] Device Extension: VK_GOOGLE_user_type (/opt/amdgpu-pro/lib/x86_64-linux-gnu/amdvlk64.so) version 0.0.1
                            Object: 0x4cada90 (type = Instance(1))

03-----
1 5
VERSION: OpenGL ES 3.1.0 (ANGLE 2.1.14508 git hash: 5c1c7acee5c2)
RENDERER: ANGLE (Vulkan 1.2.159(Radeon RX 570 Series (0x000067DF)))
VENDOR: Google Inc.
INFO: GL performance: HIGH: GPU stall due to ReadPixels
buffer:  Float32Array(4) [ 0.5, 1.5, 2.5, 3.5 ]
WARN: RendererVk.cpp:359 (DebugUtilsMessenger): [ UNASSIGNED-BestPractices-NonSuccess-Result ] Validation Information: [ UNASSIGNED-BestPractices-NonSuccess-Result ] Object 0: handle = 0x4cada90, type = VK_OBJECT_TYPE_INSTANCE; | MessageID = 0x8928392f | vkGetFenceStatus(): Returned non-success return code VK_NOT_READY.
                            Object: 0x4cada90 (type = Instance(1))

WARN: RendererVk.cpp:359 (DebugUtilsMessenger): [ UNASSIGNED-BestPractices-NonSuccess-Result ] Validation Information: [ UNASSIGNED-BestPractices-NonSuccess-Result ] Object 0: handle = 0x4cada90, type = VK_OBJECT_TYPE_INSTANCE; | MessageID = 0x8928392f | vkGetFenceStatus(): Returned non-success return code VK_NOT_READY.
                            Object: 0x4cada90 (type = Instance(1))

Done in 0.46s.

```



// https://zhuanlan.zhihu.com/p/511044115