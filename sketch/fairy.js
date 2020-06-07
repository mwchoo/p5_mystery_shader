let fairy;

class Fairy {
  constructor() {
    this.scale = 1;
    this.fly = false;
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
    //
  }

  drawWings() {
    push();

    /* LEFT WING */
    push();
    translate(0, 0, 0);
    if (this.fly) {
      //rotateX(sin(rot) * 0.5);
    }
    translate(0, -0, 0);
    // left wing high here

    translate(0, 0, 0);
    if (this.fly) {
      //rotateX(-sin(rot) * 0.4 + 0.2);
    }
    translate(0, -0, 0);
    // left wing low here
    pop();

    /* RIGHT WING */
    push();
    translate(0, 0, 0);
    if (this.fly) {
      //rotateX(-sin(rot) * 0.5);
    }
    translate(0, -0, 0);
    // right wing high here

    translate(0, 0, 0);
    if (this.fly) {
      //rotateX(sin(rot) * 0.4 + 0.2);
    }
    translate(0, -0, 0);
    // right wing low here
    pop();

    pop();
  }

  render() {
    push();
    noStroke();
    rotateY(mouseX / 100);
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
}