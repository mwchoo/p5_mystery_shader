// jeongwon yoon

function setupCity() {
// init camera
  cam_x = 0;
  cam_y = 500;
  cam_z = 30;
  cam_dx = 0;
  cam_dy = -1;
  cam_dz = 0;
  pan = 0;
  tilt = 0;
  updateCamCenter();

// make buildings
  seed = second(); // current second 0~59 randomSeed(seed);

  for (let i = 0; i < 20; i++) {
    let w = random(30, 90);
    let d = random(5, 10);
    let h = random(5, 10);
    let x = random(-WORLD_SIZE / 2, WORLD_SIZE / 2);
    let y = random(-WORLD_SIZE / 2, WORLD_SIZE / 2);
    let b = new Building(x, y, w, d, h);
    Bldgs.push(b);
  }

  let radius = min(width, height) / 3;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;
  cx = 0;
  cy = 0;
}

function drawWorld() {
  push();
  translate(0, 80, -500);
  rotateX(HALF_PI);
// camera set-up

  //camera(cam_x, cam_y, cam_z, cam_cx, cam_cy, cam_cz, 0, 0, -1);
  //perspective(radians(60), width / height, 1, 10000);

// draw city scene
////////////////////////////////////////////////////////

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);
  specularMaterial(250);


////////////out wall////

  push();
  translate(1000, 0, 150);
  box(5, 2000, 300);
  pop();

  push();
  translate(-1000, 0, 150);
  box(5, 2000, 300);
  pop();


  push();
  translate(0, -1000, 150);
  box(2000, 5, 300);
  pop();


  push();
  translate(0, 1000, 150);
  box(2000, 5, 300);
  pop();


  //////////////out wall////

  ////// in wall///////
  push();
  translate(0, 150, 100);
  box(500, 5, 200);
  pop();

  push();
  translate(0, -150, 100);
  box(500, 5, 200);
  pop();

  push();
  translate(0, 0, 280);
  box(500, 250, 5);
  pop();

  ////// in wall///////

  ///////////gi doong////////
  push();
  translate(-60, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(-40, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(-20, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(0, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(20, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(40, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(60, 200, 150);
  box(8, 8, 300);
  pop();

  ///////////gi doong////////
  push();
  translate(-300, 200, 150);
  box(12, 12, 300);
  pop();

  push();
  translate(300, 200, 150);
  box(12, 12, 300);
  pop();

  push();
  translate(-300, -200, 150);
  box(12, 12, 300);
  pop();

  push();
  translate(300, -200, 150);
  box(12, 12, 300);
  pop();

  push();
  translate(300, 0, 290);
  box(12, 400, 12);
  pop();
  push();
  translate(-300, 0, 290);
  box(12, 400, 12);
  pop();

  push();
  translate(200, 0, 290);
  box(12, 400, 12);
  pop();
  push();
  translate(-200, 0, 290);
  box(12, 400, 12);
  pop();

  /////////// small gi doong/////////////
  push();
  translate(-60, -200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(-40, -200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(-20, -200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(0, -200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(20, -200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(40, -200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(60, -200, 150);
  box(8, 8, 300);
  pop();
  /////////////// ga ro gi doong///////

  push();
  translate(0, 200, 100);
  box(600, 10, 10);
  pop();

  push();
  translate(0, -200, 100);
  box(600, 10, 10);
  pop();


  push();
  translate(0, 200, 290);
  box(620, 30, 30);
  pop();

  push();
  translate(0, -200, 290);
  box(620, 30, 30);
  pop();

  push();
  translate(-40, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(-20, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(0, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(20, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(40, 200, 150);
  box(8, 8, 300);
  pop();

  push();
  translate(60, 200, 150);
  box(8, 8, 300);
  pop();
  drawCity();

// handle user input
  if (keyIsPressed) handleUserInput();
  push();
  translate(0, 0, 550);
  rotateX(180.6);
  strokeWeight(10);

  push();
  strokeWeight(10);
  noStroke();
  fill(67, 128, 251);
  sphere(30);
  pop();

  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  push();
  rotateY(frameCount * 0.002);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  stroke(255);
  translate(cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  noStroke();
  strokeWeight(10);
  fill(102, 80, 242);
  sphere(50);
  pop();

  push();
  rotateY(frameCount * 0.01);
  stroke(0);
  strokeWeight(10);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  translate(cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  stroke(155, 185, 191);
  noStroke();
  strokeWeight(10);
  sphere(70);
  pop();

  push();
  strokeWeight(10);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  translate(cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  strokeWeight(10);
  noStroke();
  fill(242, 135, 5);
  sphere(50);
  pop();

  strokeWeight(10);
  endShape();
  pop();

  pop();
}

function handleUserInput() {
  let s = 3; // moving speed

  switch (keyCode) {
    case UP_ARROW:
      // move forward
      cam_x += s * cam_dx;
      cam_y += s *
        cam_dy;
      break;

    case DOWN_ARROW: // move backward
      cam_x -= s * cam_dx;
      cam_y -= s * cam_dy;
      break;

    case LEFT_ARROW: // pan to the left
      pan -= 0.02;
      break;

    case RIGHT_ARROW: // pan to the right
      pan += 0.02;
      break;
  }

  switch (key) {
    case 'a':
      tilt += 0.02;
      if (tilt > HALF_PI) tilt = HALF_PI;
      break;

    case 'z':
      tilt -= 0.02;
      if (tilt < -HALF_PI) tilt = -HALF_PI;
      break;
  }
  updateCamCenter();
}

function updateCamCenter() {
  cam_dx = cos(pan) * cos(tilt);
  cam_dy = sin(pan) * cos(tilt);
  cam_dz = sin(tilt);

// compute scene center position
  cam_cx = cam_x + cam_dx;
  cam_cy = cam_y + cam_dy;
  cam_cz = cam_z + cam_dz;
}

function drawCity() {
  push();
  // draw ground
  noStroke();
  fill(150);
  plane(2 * WORLD_SIZE, 2 * WORLD_SIZE);
  // draw buildings
  for (let b of Bldgs) {
    b.render();
  }
  pop();
}