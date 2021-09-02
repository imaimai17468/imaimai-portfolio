let serial;
let latestData = "waiting for data";

let temps = [];
let humids = [];

function serverConnected() {
    print("Connected to Server");
}

function gotList(thelist) {
    print("List of Serial Ports:");

    for (let i = 0; i < thelist.length; i++) {
        print(i + " " + thelist[i]);
    }
}

function gotOpen() {
    print("Serial Port is Open");
}

function gotClose(){
    print("Serial Port is Closed");
    latestData = "Serial Port is Closed";
}

function gotError(theerror) {
    print(theerror);
}

function gotData() {
    let currentString = serial.readLine();
    trim(currentString);
    if (!currentString) return;
    console.log(currentString);
    latestData = currentString;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont('Roboto');

    serial = new p5.SerialPort();

    serial.list();
    serial.open('COM6');

    serial.on('connected', serverConnected);

    serial.on('list', gotList);

    serial.on('data', gotData);

    serial.on('error', gotError);

    serial.on('open', gotOpen);

    serial.on('close', gotClose);
}

function draw() {
    background(255);
    let textsize = width / 10;
    textSize(textsize);
    noStroke();

    if(latestData == "Serial Port is Closed" || latestData == "waiting for data"){
        fill("#F9B957");
        rect(0, 0, width, height / 2);

        fill("#93CEE6");
        rect(0, height / 2, width, height / 2);
        
        fill("#F8FFFF");
        textAlign(CENTER, CENTER);
        text(latestData, width/2, height/2);
    }else{
        let temp_humid = latestData.split(",");
        let temp = parseFloat(temp_humid[0]);
        let humid = parseFloat(temp_humid[1]);

        temps.push(temp);
        humids.push(humid);
                
        fill("#F9B957");
        rect(0, 0, width, height / 2);

        fill("#93CEE6");
        rect(0, height / 2, width, height / 2);

        fill("#F8FFFF");
        textAlign(RIGHT, CENTER);
        text(temp + "℃", width / 16 * 15, height / 4);
        textAlign(LEFT, CENTER);
        text("🌡Temp", width / 16, height / 4);
        
        textAlign(RIGHT, CENTER);
        text(humid + "%", width / 16 * 15, height / 4 * 3);
        textAlign(LEFT, CENTER);
        text("🌧Humid", width / 16, height / 4 * 3);
    }
}