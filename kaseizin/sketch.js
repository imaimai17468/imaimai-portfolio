//=CLASSES================================================

class Player {
    constructor(x, y){
        this.x = constrain(x, 0, width-width/10);
        this.y = constrain(y, height-height/4, height-height/10);
        this.xmode = 0;
        this.ymode = 0;
    }

    move(){

        if(this.xmode === 0 && this.x < width-width/10){
            this.x += 3;
        }else if(this.xmode === 1 && this.x > 0){
            this.x -= 3;
        }

        if(this.ymode === 0 && this.y < height-height/10){
            this.y += 3;
        }else if(this.ymode === 1 && this.y > height-height/4){
            this.y -= 3;
        }
    }

    direction(){
        this.xmode = int(random(0, 2));
        this.ymode = int(random(0, 2));
    }
}

class Cloud {
    constructor(){
        this.x = random(0, width-width/10);
        this.y = random(0, height/5);
        this.wi = random(width/50, width/5);
        this.he = random(width/50, width/50 * 3);
        this.vel = random(width/500, width/500*2);
    }

    move() {
        this.x -= this.vel;
        if(this.x < 0) {
            this.x = random(width, width+300);
        }
    }

    display() {
        fill(255, 100);
        noStroke();
        rect(this.x, this.y, this.wi, this.he);
    }
}

//========================================================
//==GLOBAL================================================

let player;
const clouds = [];
const numFrames = 5;
const images = [];
let currentFrame = 0;

//========================================================
//==SETUP=================================================

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB);
    frameRate(60);

    // プレイヤーを生成
    player = new Player(width/5, height-height/5);

    // 雲を生成
    for(let i = 0; i < 30; i++){
        clouds[i] = new Cloud();
    }
}

//========================================================
//==DRAW==================================================

function draw(){
    background(50, 50, 150);
    
    for(let i = 0; i < clouds.length; i++){
        clouds[i].move();
        clouds[i].display();
    }

    noStroke();
    fill(150, 150, 10);
    rect(0, height-height/5, width, height);

    // プレイヤーを描画
    player.move();
    if (currentFrame % 120 === 0){
        player.direction();
    }
    image(images[currentFrame], player.x, player.y, height/10, height/10);
    currentFrame++;
    if (currentFrame === images.length) {
        currentFrame = 0;
    }

    //textSize(50);
    //text(player.xmode, 100, 100);
}

//========================================================
//==FUNCTIONS=============================================

function touchMoved(event){
    player.x = constrain(event.clientX, 0, width-width/10);
    player.y = constrain(event.clientY, height-height/4, height-height/10);
}

function preload(){
    let cnt = 0;
    for(let i = 0; i < numFrames; i++){
        const imageName = 'data/monu' + (i+1) + '.png';
        images[cnt] = loadImage(imageName);
        images[cnt+1] = loadImage(imageName);
        images[cnt+2] = loadImage(imageName);
        cnt += 3;
    }
    print(images);
}

//========================================================