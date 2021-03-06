let fairy;

class Fairy {  // Implemented by Minwoo Choo
  constructor() {
    this.scale = 1;
    this.fly = true;
    this.direction = 'backward';
    this.pos = {
      x: 0,
      y: 0,
      z: 0
    }
    this.colors = {
      hair: color(200, 200, 0),
      eye: color(50, 50, 50),
      skin: color(255, 206, 186),
      body: color(80, 188, 223),
      wing: color(0, 0, 250)
    }

    // yewon
    this.pos = p5.Vector.random3D();
    this.vel = createVector(2, 2);
    this.acc = createVector();
  }

  drawHead() {
    push();
    if (this.fly) {
      rotateY(-sin(rot) * 0.1);
    }
    // head
    push();
    specularMaterial(this.colors.skin);
    shininess(60);
    sphere(5);
    pop();
    // eyes
    push();
    translate(-2, 0.3, 4);
    specularMaterial(this.colors.eye);
    shininess(20);
    sphere(1);
    translate(4, 0, 0);
    sphere(1);
    pop();
    // hair
    push();
    translate(0, 1.5, -1.5);
    specularMaterial(this.colors.hair);
    shininess(60);
    sphere(5.5);
    translate(0, 4, -3);
    sphere(3.5);
    pop();
    pop();
  }

  drawBody() {
    push();
    if (this.fly) {
      rotateY(-sin(rot) * 0.1);
    }

    // neck
    push();
    translate(0, -5, 0);
    specularMaterial(this.colors.skin);
    shininess(60);
    cylinder(2, 3);
    pop();

    // body
    push();
    translate(0, -7, 0);
    specularMaterial(this.colors.skin);
    shininess(60);
    rotateZ(HALF_PI);
    cylinder(2, 10);
    //box(15, 5, 7);
    pop();

    // body-cloth
    push();
    translate(0, -15, 0);
    specularMaterial(this.colors.body);
    shininess(80);
    box(10, 16, 4.5);

    push();
    translate(0, -12, 4);
    rotateX(-HALF_PI / 4);
    rotateY(HALF_PI / 4);
    ellipse(0, 0, 7, 15);
    pop();

    push();
    translate(5, -12, 2.9);
    rotateX(-HALF_PI / 4);
    rotateY(HALF_PI / 4);
    rotateZ(HALF_PI / 5);
    ellipse(0, 0, 7, 15);
    pop();

    push();
    translate(-5, -12, 4);
    rotateX(-HALF_PI / 4);
    rotateY(-HALF_PI / 4);
    rotateZ(-HALF_PI / 5);
    ellipse(0, 0, 7, 15);
    pop();

    push();
    translate(0, -12, -3.5);
    rotateX(HALF_PI / 8);
    //rotateY(HALF_PI / 4);
    ellipse(0, 0, 7, 15);
    pop();

    push();
    translate(5, -12, -3);
    rotateX(HALF_PI / 10);
    rotateY(-HALF_PI / 4);
    rotateZ(HALF_PI / 5);
    ellipse(0, 0, 7, 15);
    pop();

    push();
    translate(-5, -12, -2.5);
    rotateX(HALF_PI / 10);
    rotateY(HALF_PI / 4);
    rotateZ(-HALF_PI / 5);
    ellipse(0, 0, 7, 15);
    pop();

    pop();

    pop();
  }

  drawArms() {
    push();
    specularMaterial(this.colors.skin);
    shininess(60);

    // left arm
    push();
    translate(-5.5, -11, 0);
    rotateZ(-HALF_PI / 4);
    cylinder(2, 10);
    pop();

    push();
    translate(-7.8, -18.5, 1.2);
    rotateZ(-HALF_PI / 10);
    rotateX(-HALF_PI / 5);
    cylinder(2, 8);
    pop();

    push();
    translate(-8.5, -23, 3);
    sphere(2);
    pop();

    // right arm
    push();
    translate(5.5, -11, 0);
    rotateZ(HALF_PI / 4);
    specularMaterial(this.colors.skin);
    shininess(60);
    cylinder(2, 10);
    pop();

    push();
    translate(7.8, -18.5, 1.2);
    rotateZ(HALF_PI / 10);
    rotateX(-HALF_PI / 5);
    specularMaterial(this.colors.skin);
    shininess(60);
    cylinder(2, 8);
    pop();

    push();
    translate(8.5, -23, 3);
    sphere(2);
    pop();

    pop();
  }

  drawLegs() {
    push();
    specularMaterial(this.colors.skin);
    shininess(60);

    // left leg
    push();
    translate(-3, -30, 3);
    rotateZ(-HALF_PI / 20);
    rotateX(-HALF_PI / 4);
    cylinder(2.5, 17);
    pop();

    push();
    translate(-3.5, -37, 5.8);
    sphere(2.6);
    pop();

    push();
    translate(-2.5, -44.5, 5.5);
    rotateZ(HALF_PI / 10);
    rotateX(HALF_PI / 20);
    cylinder(2.5, 15);
    pop();

    push();
    translate(-1.3, -53, 5);
    sphere(2.6);
    pop();

    // right leg
    push();
    translate(3.5, -30, 1.5);
    rotateZ(HALF_PI / 10);
    rotateX(-HALF_PI / 6);
    cylinder(2.5, 17);
    pop();

    push();
    translate(4.5, -37, 3.3);
    sphere(2.6);
    pop();

    push();
    translate(3.5, -44.5, 2.5);
    rotateZ(-HALF_PI / 10);
    rotateX(HALF_PI / 10);
    cylinder(2.5, 15);
    pop();

    push();
    translate(2.3, -52, 1.3);
    sphere(2.6);
    pop();
  }

  drawWings() {
    push();
    //specularMaterial(this.colors.wing);
    normalMaterial();
    shininess(60);

    /* LEFT WING */
    push();
    translate(0, 0, 0);
    if (this.fly) {
      //rotateY(mouseY/100);
      rotateY(sin(rot) * 0.4 - 0.2);
    }
    translate(0, -0, -0);
    translate(-17, -3, -8);
    //rotateX(HALF_PI / 10);
    rotateY(-HALF_PI / 4);
    rotateZ(-HALF_PI / 3);
    ellipse(0, 0, 40, 12);

    translate(10, -17, 0);
    //rotateX(HALF_PI / 10);
    //rotateY(-HALF_PI / 4);
    rotateZ(HALF_PI / 2);
    ellipse(0, 0, 40, 14);
    pop();

    /* RIGHT WING */
    push();
    translate(0, 0, 0);
    if (this.fly) {
      rotateY(-sin(rot) * 0.4 + 0.2);
    }
    translate(0, -0, 0);
    translate(17, -3, -8);
    //rotateX(HALF_PI / 10);
    rotateY(HALF_PI / 4);
    rotateZ(HALF_PI / 3);
    ellipse(0, 0, 40, 12);

    translate(-10, -17, 0);
    //rotateX(HALF_PI / 10);
    //rotateY(-HALF_PI / 4);
    rotateZ(-HALF_PI / 2);
    ellipse(0, 0, 40, 14);
    pop();

    pop();
  }

  render() {
    push();
    noStroke();
    //rotateY(mouseX / 100);
    rotateZ(PI);
    scale(1);
    translate(this.pos.x, this.pos.y, this.pos.z);

    if (this.direction === 'forward') {
      rotateY(PI);
    } else if (this.direction === 'backward') {
    } else if (this.direction === 'left') {
      rotateY(HALF_PI);
    } else if (this.direction === 'right') {
      rotateY(-HALF_PI);
    }

    this.drawHead();
    this.drawBody();
    this.drawArms();
    this.drawLegs();
    this.drawWings();

    if (this.fly) {
      this.pos.y = sin(rot);
      rot += 0.1;
    }

    pop();
  }

  // yewon
  update() {
    const {x, y, z} = this.pos;
    let curPos = new p5.Vector(x, y, z);
    this.vel.add(this.acc);
    this.vel.limit(5);
    curPos.add(this.vel);
    this.pos.x = curPos.x;
    this.pos.y = curPos.y;
    this.pos.z = curPos.z;
    this.acc.mult(0);
  }

  attracted(target) {
    const {x, y, z} = this.pos;
    //let dir = target -this.pos
    let curPos = new p5.Vector(x, y, z);
    let force = p5.Vector.sub(target, curPos);
    //=distance
    let dsquared = force.magSq();
    dsquared = constrain(dsquared, 5, 100);
    const G = 20;
    let strength = G / dsquared; //force
    force.setMag(strength);

    this.acc = force;

    //크기조정. 즉 방향(거리)의 크기를 force로 조절 한다는뜻/ 거리가 길수록 힘은 작아짐..
  }
}