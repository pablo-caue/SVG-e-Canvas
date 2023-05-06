var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Desenha o retângulo arredondado
var cornerRadius = 20;
var x = 43;
var y = 46;
var width = 182;
var height = 100;
ctx.beginPath();
ctx.moveTo(x + cornerRadius, y);
ctx.lineTo(x + width - cornerRadius, y);
ctx.arcTo(x + width, y, x + width, y + cornerRadius, cornerRadius);
ctx.lineTo(x + width, y + height - cornerRadius);
ctx.arcTo(x + width, y + height, x + width - cornerRadius, y + height, cornerRadius);
ctx.lineTo(x + cornerRadius, y + height);
ctx.arcTo(x, y + height, x, y + height - cornerRadius, cornerRadius);
ctx.lineTo(x, y + cornerRadius);
ctx.arcTo(x, y, x + cornerRadius, y, cornerRadius);
ctx.closePath();

// Preenche o retângulo com a cor vermelha
ctx.fillStyle = "#FF0000";
ctx.fill();

// Desenha o triângulo branco
ctx.beginPath();
ctx.moveTo(119, 72);
ctx.lineTo(119, 118);
ctx.lineTo(160, 95);
ctx.closePath();

// Preenche o triângulo com a cor branca
ctx.fillStyle = "#FFFFFF";
ctx.fill();
