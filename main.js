function preload(){

}

function setup(){
    canvasincode=createCanvas(600, 600);
    canvasincode.position(200, 200);

    Video=createCapture(VIDEO);
    Video.hide();
}

function draw(){
    image(Video, 100, 100, 400, 400);
    fill("black");
    stroke("beige");
    circle(75, 75, 40);
    circle(525, 525, 40);
    circle(525, 75, 40);
    circle(75, 525, 40);
    fill("yellow");
    stroke("purple");
    rect(75, 71, 450, 10);
    rect(75, 521, 456, 10);
    rect(75, 71, 10, 450);
    rect(521, 71, 10, 450);
}

function take_snapshot(){
    save("IMAGE_THAT_U_JUST_CLICKED_PART-.jpeg");
}