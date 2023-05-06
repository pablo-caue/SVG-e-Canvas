var canvas = document.getElementById("android-canvas");
var ctx = canvas.getContext("2d");

var centerX = 150
var centerY = 120
var radius = 80;
var startAngle = Math.PI;
var endAngle = 2 * Math.PI;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, startAngle, endAngle);
ctx.lineTo(centerX, centerY);
ctx.fillStyle = "#a4c639";
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.arc(120, 70, 8, 0, Math.PI * 2);
ctx.arc(180, 70, 8, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "#a4c639";
ctx.lineWidth = 6;
ctx.lineCap = "round";
ctx.moveTo(90, 30);
ctx.lineTo(110, 50);

ctx.moveTo(210, 30);
ctx.lineTo(190, 50);
ctx.stroke();