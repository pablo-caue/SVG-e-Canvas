canvas = document.querySelector("#animationCanvas")

canvas.width = innerWidth;
canvas.height = innerHeight;

c = canvas.getContext('2d');

colors = ["#E63946", "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557"];
colors_rgba = ["purple", "#c8a2c8", "#993399", "#ee82ee", "#800080", "#ff00ff"];

class Circle {
    constructor() {
        this.radius = Math.random() * 30;
        this.x = Math.random() * (canvas.width - this.radius*2)+this.radius;
        this.y = Math.random() * (canvas.height - this.radius*2)+this.radius;
        this.velx = Math.random()*16 - 8;
        this.vely = Math.random()*16 - 8;
        this.color = colors_rgba[Math.floor(Math.random()*colors.length)];
    };

    update () {
        this.x += this.velx;
        this.y += this.vely;

        if (this.x + this.radius > canvas.width || this.x - this.radius <= 0) {
            this.velx = -this.velx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius <= 0) {
            this.vely = -this.vely;
        }
    }

    draw() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0, Math.PI *2);
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
    }
}

circles = []

for (let i=0; i<100; i++) {
    circles.push(new Circle());
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas. height);
    
    for (let i=0; i<700; i++) {
        circles[i].draw();
        circles[i].update();   
    }
}

animate();

