function generarNumero(numero) {
  return (Math.random() * numero).toFixed(0);
}

function colorRGB() {
  var coolor =
    "(" +
    generarNumero(255) +
    "," +
    generarNumero(255) +
    "," +
    generarNumero(255) +
    ")";
  return "RGB" + coolor;
}

const secondHeader = document.createElement("header");
const main = document.querySelector("main");
const bigheader = document.querySelector("header");
main.appendChild(secondHeader);

const colorParaAdivinar = (secondHeader.textContent = colorRGB());

//creamos main dentro de main

const secondMain = document.createElement("main");
main.append(secondMain);

secondMain.classList.add("cards");
main.classList.add("principal");
secondHeader.classList.add("colorfixed");
bigheader.classList.add("header1");

function reiniciarJuego() {
  secondHeader.textContent = colorRGB();
  intentos.textContent = "Intentos: 0";
  aciertos.textContent = `Aciertos ${win}`;
  loser = 0;
  intentosRest = 3;
  crearLis();
}

let intentosRest = 3;
let loser = 0;
let win = 0;
let colorParaAdivinar2 = colorRGB();
secondHeader.textContent = colorParaAdivinar2;

const ul = document.createElement("ul");

function crearLis() {
  ul.innerHTML = "";
  for (let i = 1; i <= 6; i++) {
    const a = document.createElement("li");
    a.style.background = colorRGB();
    a.classList.add("especial");
    a.addEventListener("click", () => {
      if (a.style.background === colorParaAdivinar2) {
        win++;
        aciertos.textContent = `aciertos ${win}`;
        secondHeader.textContent = "Puto crack";
        reiniciarJuego();
      } else {
        loser++;
        intentosRest--;
        intentos.textContent = `Intentos ${loser}`;
        secondHeader.textContent = `Fumado compra unas gafas y tienes otros ${intentosRest} intentos`;
        if (loser === 3) {
          secondHeader.textContent = ` Perdiste por ${loser} fallos`;
          setTimeout(() => {
            reiniciarJuego();
          }, 5000);
        }
      }
    });
    console.log(colorParaAdivinar2);

    a.textContent = colorRGB();
    ul.append(a);
  }
}

crearLis();
secondMain.append(ul);

const footer = document.createElement("footer");
const intentos = document.createElement("div");
intentos.id = "fallos";
intentos.textContent = "Intentos: 0";
const aciertos = document.createElement("div");
aciertos.textContent = "Aciertos: 0";
aciertos.id = "aciertos";
footer.appendChild(intentos);
footer.appendChild(aciertos);

document.body.appendChild(footer);
