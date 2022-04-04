// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;



canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  // Här skriver du funktionen som ritar bilden
  let width = canvas.width
  let height = canvas.height
c.lineWidth = "1.5";

function paintSquare1() {
  c.beginPath();

  c.rect(25, height - height / 4, width / 4, height / 4);
  c.stroke();
}
paintSquare1();

c.beginPath();
c.moveTo(25, height - height / 4);
c.lineTo(25+width / 8, midY-(midY/4));
c.stroke();

c.beginPath();
c.moveTo(25 + width / 4, height - height / 4);
c.lineTo(25+width / 8, midY-(midY/4));
c.stroke();

function paintSquare2() {
  c.beginPath();
  c.rect(width - (25 + width / 4), height - height / 4, width / 4, height / 4);
  c.stroke();
}
paintSquare2();

c.beginPath();
c.moveTo(width - (25 + width / 4), height - height / 4);
c.lineTo(width-(25+width / 8), midY-(midY/4));
c.stroke();

c.beginPath();
c.moveTo(width - 25, height - height / 4);
c.lineTo(width-(25+width / 8), midY-(midY/4));
c.stroke();

function paintTree() {
  c.fillStyle = 'brown';
  c.beginPath();
  c.rect(midX-width / 48, height - height / 8, width / 24, height / 8);
  c.stroke();
  c.fill();
  
}
paintTree();


c.fillStyle = 'green';
c.beginPath();
c.ellipse(midX, height - height / 2.84, width/20, midY/2, (Math.PI) *  2, 1.12, Math.PI-1.12 , true);
c.fill();
c.stroke()
}
drawPicture();

