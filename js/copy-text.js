function copyTextSvg() {
  // Seleciona o texto que será copiado
  var text = `
  <svg xmlms="https://www.w3.org/2000/svg" width="1500" height="1000">
  <circle cx="700" cy="400" r="300" stroke="#212529" stroke-width="4" fill="#ffb039" />
  </svg>`;
  var tempElement = document.createElement("textarea");
  tempElement.value = text;
  document.body.appendChild(tempElement);
  tempElement.select();

  // Executa o comando de cópia
  document.execCommand("copy");

  // Remove o elemento temporário
  document.body.removeChild(tempElement);

  // Exibe uma mensagem de confirmação
  alert("Codigo copiado!");
}

function copyTextCanvaHtml() {
  // Seleciona o texto que será copiado
  var text = '<canvas id="myCanvas" width "1500" height="1000"></canvas>';
  var tempElement = document.createElement("textarea");
  tempElement.value = text;
  document.body.appendChild(tempElement);
  tempElement.select();

  // Executa o comando de cópia
  document.execCommand("copy");

  // Remove o elemento temporário
  document.body.removeChild(tempElement);

  // Exibe uma mensagem de confirmação
  alert("Codigo Canvas copiado!");
}
function copyTextCanvaJs() {
  // Seleciona o texto que será copiado
  var text = `
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext('2d');
  context.beginPath();
  context.arc(700,350,200,0,2*Math.PI);
  context.fillStyle = '#ee5f25';
  context.fill();
`;
  var tempElement = document.createElement("textarea");
  tempElement.value = text;
  document.body.appendChild(tempElement);
  tempElement.select();

  // Executa o comando de cópia
  document.execCommand("copy");

  // Remove o elemento temporário
  document.body.removeChild(tempElement);

  // Exibe uma mensagem de confirmação
  alert("Codigo JavaScript copiado!");
}