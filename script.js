const canvas = document.getElementById("sandbox");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

function Circle(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;

    this.dx;
    this.dy;

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); //Start drawing at zero
        ctx.fill();
    };
}

const balls = [];
const NUM_OF_BALLS = 20;
const SMALLEST_RADIUS = 15;
const BIGGEST_RADIUS = 30;

// Create balls
for (let i = 0; i < NUM_OF_BALLS; i++) {
    let r = Math.floor(Math.random() * BIGGEST_RADIUS) + 15;
    let x = Math.random() * (canvas.width - r * 2) + r;
    let y = Math.random() * (canvas.height - r * 2) + r;
    let c = "red";
    balls.push(new Circle(x, y, r, c));
}

// Draw the balls
function Update() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
    }
}
Update();
