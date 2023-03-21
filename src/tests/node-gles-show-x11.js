var x11 = require('x11');

var Exposure = x11.eventMask.Exposure;
var PointerMotion = x11.eventMask.PointerMotion;
const gles = require('../index.js');
const WINDOW_WIDTH = 500
const WINDOW_HEIGHT = 500


x11.createClient(function(err, display) {
  if (!err) {
    var X = display.client;
    var root = display.screen[0].root;
    var wid = X.AllocID();
    X.CreateWindow(
        wid,
        root, // new window id, parent
        0,
        0,
        WINDOW_WIDTH,
        WINDOW_HEIGHT, // x, y, w, h
        0,
        0,
        0,
        0, // border, depth, class, visual
        { eventMask: Exposure | PointerMotion } // other parameters
    );
    process.env.stdout_alpha = wid.toString()

    const gl = gles.createWebGLRenderingContext(
        {
          width: WINDOW_WIDTH,
          height: WINDOW_HEIGHT
        }
    );

    console.log('VERSION: ' + gl.getParameter(gl.VERSION));
    console.log('RENDERER: ' + gl.getParameter(gl.RENDERER));

    X.MapWindow(wid);
    var gc = X.AllocID();
    X.CreateGC(gc, wid);
    var white = display.screen[0].white_pixel;
    var black = display.screen[0].black_pixel;
    cidBlack = X.AllocID();
    cidWhite = X.AllocID();
    X.CreateGC(cidBlack, wid, { foreground: black, background: white });
    X.CreateGC(cidWhite, wid, { foreground: white, background: black });
    X.on('event', function(ev) {
      // if (ev.type == 12) {
      //   X.PolyFillRectangle(wid, cidWhite, [0, 0, 500, 500]);
      //   X.PolyText8(wid, cidBlack, 50, 50, ['Hello, Node.JS!']);
      // }
    });
    X.on('error', function(e) {
      console.log(e);
    });

    let i = 1
    setInterval(()=>{
      if(i%2===0){
        gl.clearColor(1.0, 0.0, 0.0, 1.0);
      } else {
        gl.clearColor(0.0, 1.0, 0.0, 1.0);
      }
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      gl.RefreshGLExtensions2333(0.0, 1.0, 0.0, 1.0)
      i+=1
    },1000)
    // while (1) {
    //
    // }
  } else {
    console.log(err);
  }
});

// https://stackoverflow.com/questions/64449068/how-to-create-a-native-x11-window-for-use-with-egl
// https://gist.github.com/jfuerth/82b816510bb2cc063c9945baf1093fd9
// https://github.com/sidorares/node-x11/blob/master/examples/opengl/glxgears.js