/*
2020-1 Computer Grapics :: PROJECT 10 - Interactive 3D graphics for wall projection

< MANUAL >
ARROW_UP Key: go forward
ARROW_DOWN Key: go backward
ARROW_LEFT Key: turn your head to the left
ARROW_RIGHT Key: turn your head to the right

P Key: screen shot
*/

let scene = 0;
let sounds = {
  bgm: undefined,
  walk: undefined
}
let humanModel = {
  body: undefined,
  leg_l_h: undefined,
  leg_l_l: undefined,
  leg_r_h: undefined,
  leg_r_l: undefined
};
let bgColor;
let shaders = {
  fairy: undefined
}
let human;
//let scene_timer;
let rot = 0;

let X = 160;  // 0;
let Y = -200;  // 0;
let Z = 500;  //1700;
let centerX = 0;
let centerY = -100;
let centerZ = -2000;
let h = 20;

let spotPos, spotDir, modelPos;
let mrot, srot;

document.onselectstart = function () {
  // prevent mouse drag or text/element selection
  window.getSelection().removeAllRanges();
};

function preload() {
  sounds.bgm = loadSound('assets/bgm.mp3');
  sounds.walk = loadSound('assets/walk.mp3');
  humanModel.body = loadModel('assets/body.obj');
  humanModel.leg_l_h = loadModel('assets/leg_l_h.obj');
  humanModel.leg_l_l = loadModel('assets/leg_l_l.obj');
  humanModel.leg_r_h = loadModel('assets/leg_r_h.obj');
  humanModel.leg_r_l = loadModel('assets/leg_r_l.obj');
  shaders.fairy = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 255, 255, 255, 1);
  /*
  gl = this._renderer.GL;
  gl.disable(gl.DEPTH_TEST);*/

  //scene_timer = new Timer(3000, handleScene);
  bgColor = color(0, 0, 0);
  spotPos = new p5.Vector(-1000, 2000, 200);
  modelPos = new p5.Vector(-200, 1000, 0);
  mrot = 0;
  srot = 0;

  human = new Human();
  fairy = new Fairy();
  //sounds.bgm.play();
}

function draw() {
  background(bgColor);

  // scene control
  if (scene === 0) {
    // walks to the door
  } else if (scene === 1) {
    // ending
    drawEnding();
    return;
  } else if (scene === 2) {
    return;
  }

  // light setting
  //lights();
  ambientLight(70);
  pointLight(100, 100, 100, sin(srot) * 4000, -1300, cos(srot) * 100 - 100);
  directionalLight(250, 250, 250, 0, 0, 2000);

  srot += 0.01;
  spotPos.x = 200 * cos(srot);
  spotPos.y = 200 * sin(srot);
  spotDir = p5.Vector.sub(modelPos, spotPos);
  spotLight(0, 100, 100, spotPos, spotDir, radians(90), 1);

  // camera setting
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);

  //human.render();
  fairy.render();

  /*if (!sounds.bgm.isPlaying()) {
    getAudioContext().resume();
    sounds.bgm.play();
  }*/

  handleKeyDown();
}

function handleKeyDown() {
  // handle rot speed of propeller to control altitude
  if (scene === 1) return;

  if (keyIsDown(UP_ARROW)) {
    // go forward
    human.walk = true;
    human.direction = 'forward';
    human.pos.z -= 2;

    Z -= 2;
    Y = cos(Z / 10) * 10 - 200;  // walk effect
  } else if (keyIsDown(DOWN_ARROW)) {
    // go backward
    human.walk = true;
    human.direction = 'backward';
    human.pos.z += 2;

    Z += 2;
    Y = cos(Z / 10) * 10 - 200;  // walk effect
  }
  if (keyIsDown(LEFT_ARROW)) {
    // turn your head to the left
    human.walk = true;
    human.direction = 'left'

    X -= 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    // turn your head to the right
    human.walk = true;
    human.direction = 'right';

    X += 5;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    if (scene === 1) return;
    human.walk = true;
    if (!sounds.walk.isPlaying()) {
      sounds.walk.play();
    }
  }
  if (keyCode === 80) {
    saveImage();
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    human.rot = 0;
    human.walk = false;
    if (sounds.walk.isPlaying()) {
      sounds.walk.stop();
    }
  }
}

function saveImage() {
  saveCanvas("image", "jpg");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}