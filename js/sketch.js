//=CLASSES================================================

class Flock {
    constructor() {
        // すべてのボイド用の配列
        this.boids = []; // 配列を初期化
    }

    run() {
        for (let i = 0; i < this.boids.length; i++) {
            // 個々のボイドにに、ボイドのリストを丸ごと渡す
            this.boids[i].run(this.boids);
        }
    }

    addBoid(b) {
        this.boids.push(b);
    }
}

class Boid {
    constructor(x, y) {
        // 加速度
        this.acceleration = createVector(0, 0);
        // 速度
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        // 位置
        this.position = createVector(x, y);
        // ボイドのサイズ
        this.r = 3.0;
        // 最大速度
        this.maxspeed = 3;
        // 最大操舵力
        this.maxforce = 0.05;
    }

    run(boids) {
        this.flock(boids);
        this.update();
        this.borders();
        this.render();
    }

    applyForce(force) {
        // ニュートンの第二法則 力の大きさ = 質量 * 加速度 => 加速度 = 力の大きさ / 質量
        // A = F / M が欲しい場合は、ここに質量が追加できる
        this.acceleration.add(force);
    }

    // 毎回、３つのルールにもとづいて、新しい加速度を蓄積する
    flock(boids) {
        let sep = this.separate(boids); // 分離
        let ali = this.align(boids); // 整列
        let coh = this.cohesion(boids); // 結合
        // これらの力に対し、任意の重み付けをする
        sep.mult(1.5);
        ali.mult(1.0);
        coh.mult(1.0);
        // 加速度に力のベクトルを追加する
        this.applyForce(sep);
        this.applyForce(ali);
        this.applyForce(coh);
    }

    // 位置を更新する
    update() {
        // 加速度は速度を変更する
        this.velocity.add(this.acceleration);
        // 速度を制限
        this.velocity.limit(this.maxspeed);
        // 速度は位置を変更する
        this.position.add(this.velocity);
        // 毎回、加速度を0にリセットする
        this.acceleration.mult(0);
    }

    // ターゲットに向かう操舵力を計算し適用する
    seek(target) {
        // 現在位置からターゲットを指すベクトルdesired
        let desired = p5.Vector.sub(target, this.position);
        // desiredを正規化し、最大速度にスケーリングする
        desired.normalize();
        desired.mult(this.maxspeed);
        // Steering = Desired - Velocity
        let steer = p5.Vector.sub(desired, this.velocity);
        // 最大操舵力に制限する
        steer.limit(this.maxforce);
        return steer;
    }

    // 描画
    render() {
        // 速度の方向に回転させた三角形を描画する
        let theta = this.velocity.heading() + radians(90);
        fill(127);
        stroke(200);
        push();
        translate(this.position.x, this.position.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
        pop();
    }

    // ラッピング処理(端を超えたら逆の端から出てくる)
    borders() {
        if (this.position.x < -this.r) this.position.x = width + this.r;
        if (this.position.y < -this.r) this.position.y = height + this.r;
        if (this.position.x > width + this.r) this.position.x = -this.r;
        if (this.position.y > height + this.r) this.position.y = -this.r;
    }

    // 分離
    // 近くにいるボイドを調べ、近すぎる場合には離れる方向に向かうベクトルを返す
    separate(boids) {
        let desiredseparation = 25.0;
        let steer = createVector(0, 0);
        let count = 0;
        // システム内の全ボイドについて、近すぎないかどうか調べる
        for (let i = 0; i < boids.length; i++) {
            let d = p5.Vector.dist(this.position, boids[i].position);
            // もし距離(d)が0より大きくかつ任意の量よりも大きいなら(0は自分のとき)
            if ((d > 0) && (d < desiredseparation)) {
                // その近いボイドから離れるベクトルを計算する
                let diff = p5.Vector.sub(this.position, boids[i].position);
                diff.normalize();
                diff.div(d); // 距離による重み付け
                steer.add(diff);
                count++; // 数をメモしておく
            }
        }
        // 平均する -- countで割る
        if (count > 0) {
            steer.div(count);
        }

        // ベクトルが0より大きい限り
        if (steer.mag() > 0) {
            // レイノルズの Steering = Desired - Velocity　を実装
            steer.normalize();
            steer.mult(this.maxspeed);
            steer.sub(this.velocity);
            steer.limit(this.maxforce);
        }
        return steer;
    }

    // 整列
    // システム内の近くにいる全ボイドについて平均速度を計算し、その方向に向かうベクトルを返す
    align(boids) {
        let neighbordist = 50;
        let sum = createVector(0, 0);
        let count = 0;
        for (let i = 0; i < boids.length; i++) {
            let d = p5.Vector.dist(this.position, boids[i].position);
            if ((d > 0) && (d < neighbordist)) {
                sum.add(boids[i].velocity);
                count++;
            }
        }
        if (count > 0) {
            sum.div(count);
            sum.normalize();
            sum.mult(this.maxspeed);
            let steer = p5.Vector.sub(sum, this.velocity);
            steer.limit(this.maxforce);
            return steer;
        }
        else {
            return createVector(0, 0);
        }
    }

    // 結合
    // 近くにいる全ボイドの平均位置(たとえばセンター)を計算し、その位置に向かうベクトルを返す
    cohesion(boids) {
        let neighbordist = 50;
        let sum = createVector(0, 0); // 空のベクトルで開始し、これに全位置を累積する
        let count = 0;
        for (let i = 0; i < boids.length; i++) {
            let d = p5.Vector.dist(this.position, boids[i].position);
            if ((d > 0) && (d < neighbordist)) {
                sum.add(boids[i].position); // 位置を追加
                count++;
            }
        }
        if (count > 0) {
            sum.div(count);
            return this.seek(sum); // その位置に向かう
        }
        else {
            return createVector(0, 0);
        }
    }
}

//========================================================
//==GLOBAL================================================

let flock;
var canvas;

//========================================================
//==SETUP=================================================

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index','-1');//canvasを後ろに移動する。
    
    canvasSetup();
}

//========================================================
//==DRAW==================================================

function draw(){
    background('#d9d9d9');
    flock.run();
}

//========================================================
//==FUNCTIONS=============================================

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    canvasSetup();
}

function canvasSetup(){
    colorMode(RGB);

    flock = new Flock();
    for (let i = 0; i < 100; i++) {
        let b = new Boid(width / 2, height / 2);
        flock.addBoid(b);
    }
}

//========================================================