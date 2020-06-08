function Particle(x, y, z) {
  this.pos = p5.Vector.random3D();
  // this.prev=createVector(x,y,z);
  this.vel = p5.Vector.random3D();
  //this.vel.setMag(random(2,5));
  this.acc = createVector();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function () {
    stroke(255, 10);
    strokeWeight(4);
    point(this.pos.x, this.pos.y, this.pos.z);
    this.x = this.pos.x;
    this.y = this.pos.y;
    this.z = this.pos.z;
  }

  this.attracted = function (target) {
    //let dir = target -this.pos
    let force = p5.Vector.sub(target, this.pos);
    //=distance
    let dsquared = force.magSq();
    dsquared = constrain(dsquared, 5, 200);
    const G = 20;
    let strength = G / dsquared;//force
    force.setMag(strength);

    this.acc = force;

    //크기조정. 즉 방향(거리)의 크기를 force로 조절 한다는뜻/ 거리가 길수록 힘은 작아짐..
  }
}

function flying(x, y) {
  this.pos = p5.Vector.random3D();
  // this.prev=createVector(x,y,z);
  this.vel = p5.Vector.random3D();
  //this.vel.setMag(random(2,5));
  this.acc = createVector();

  this.update = function () {

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);

  }
  this.show = function () {
    stroke(255, 10);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    this.x = this.pos.x;
    this.y = this.pos.y;

  }
  this.attracted = function (target) {
    //var dir = target -this.pos
    var force = p5.Vector.sub(target, this.pos);
    //=distance
    var dsquared = force.magSq();
    dsquared = constrain(dsquared, 5, 200);
    var G = 10;
    var strength = G / dsquared;//force
    force.setMag(strength);

    this.acc = force;

    //크기조정. 즉 방향(거리)의 크기를 force로 조절 한다는뜻/ 거리가 길수록 힘은 작아짐..
  }
}