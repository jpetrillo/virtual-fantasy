function setup() {
    createCanvas(windowWidth, windowHeight);
}



function draw() {
    // if (mouseIsPressed) {
    //     fill(255, 255, 255, 0);
    //     // stroke(255, 255, 255);
    // } else {
    //     fill(255, 255, 255, 0);;
    // }

    // rectMode(CENTER);
    // rect(mouseX, mouseY, 90, 60);

    textAlign(CENTER,CENTER);
    text('looking?', mouseX, mouseY, 30, 20);
    fill(random(255),random(255),random(255));
    textSize(14);
    textFont('Arial Narrow');
    // stroke(29, 72, 255);
}