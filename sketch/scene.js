function drawSpace() {

}

function drawParticles() {
  // yewon
  stroke(255, 255, 0);
  // attractor = createVector(a, b);
  attractor = createVector(mouseX - width / 2, mouseY - height / 2);
  strokeWeight(10);
  point(attractor.x, attractor.y);
  for (let i = 0; i < particles.length; i++) {
    particles[i].attracted(attractor);
    particles[i].show();
    particles[i].update();
  }
  for (let i = 0; i < fairies.length; i++) {
    fairies[i].attracted(attractor);
    //console.log(i, curFairy.pos);
    fairies[i].render();
    fairies[i].update();
  }
}

let cam_x, cam_y, cam_z;

let cam_cx, cam_cy, cam_cz;

let cam_dx, cam_dy, cam_dz;

let pan, tilt;

let seed;

let cx, cy;

let secondsRadius;

let minutesRadius;

let hoursRadius;

let clockDiameter;

const WORLD_SIZE = 1000;

let Bldgs = [];

class Building {

  constructor(x, y, w, d, h) {

    this.x = x;

    this.y = y;

    this.w = w;

    this.d = d;

    this.h = h;
  }


  render() {


    push();

    translate(this.x, this.y, this.h / 2);

    stroke(0);

    strokeWeight(1);

    fill(255);

    box(this.w, this.d, this.h);

    pop();
  }

}
