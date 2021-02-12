let clock;

function preload(){
    clock = loadImage('assets/clock.PNG');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB);
    frameRate(60);
    smooth();
}

function draw(){
    clear();
    background(255);
    let today = new Date();
    let youbi = today.getDay();
    let hours = today.getHours();
    let dishour = 24-hours;
    let disday = max(0, 5-youbi);
    if(youbi > 5) dishour = 0;

    imageMode(CENTER);
    image(clock, width/2, height/3, min(width/2, height/2), min(width/2, height/2))

    textAlign(CENTER);
    textSize(height/15);
    text("世界週末時計", width/2, height/12);
    textSize(height/100);
    text("(JST)", width/2, height/10);
    if(dishour == 0 && disday == 0){
        textSize(height/15);
        text("休日だ！！", width/2, height/2 + height/4)
    }else{
        textSize(height/15);
        text("週末まであと", width/2, height/2 + height/5);
        text(disday + "日と" + dishour + "時間", width/2, height/2 + height/3);
    }

    cx = width/2 + min(width/2, height/2)/2 - min(width/2, height/2)/13;
    cy = height/3 + min(width/2, height/2)/2 - min(width/2, height/2)/13;
    dr = min(width/2, height/2)/2;
    hr = min(width/2, height/2)/2.4;

    let h = map(dishour, 0, 24, PI+HALF_PI, PI);
    let d = map(disday, 0, 5, PI+HALF_PI, PI);

    strokeWeight(min(width/2, height/2)/10);
    strokeCap(SQUARE);
    line(cx, cy, cx + cos(h) * dr, cy + sin(h) * dr);
    line(cx, cy, cx, cy-hr);
}