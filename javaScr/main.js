function generarNumero(numero) {
  return Math.floor(Math.random() * (numero + 1));
}

function colorRGB() {
  let coolor =
    "(" +
    generarNumero(255) +
    ", " +
    generarNumero(255) +
    ", " +
    generarNumero(255) +
    ")";
  return "rgb" + coolor;
}

const secondHeader = document.createElement("header");
const h2 = document.createElement("h2");
const main = document.querySelector("main");
const bigheader = document.querySelector("header");
main.appendChild(secondHeader);
bigheader.appendChild(h2);
h2.textContent =
  "¿Quieres jugar? Me ganas la partida si adivinas 3 colores y pierdes si fallas 3 veces..";
const secondMain = document.createElement("main");
main.append(secondMain);

secondMain.classList.add("cards");
main.classList.add("principal");
secondHeader.classList.add("colorfixed");
bigheader.classList.add("header1");

function reiniciarJuego() {
  secondHeader.textContent = colorRGB();
  fallos.textContent = "Fallos: 0";
  aciertos.textContent = `Aciertos: 0`;
  loser = 0;
  intentosRest = 3;
  crearLis();
}
let aciertoRest = 3;
let intentosRest = 3;
let loser = 0;
let win = 0;

const ul = document.createElement("ul");

function crearLis() {
  const colorParaAdivinar2 = colorRGB();
  secondHeader.textContent = colorParaAdivinar2;
  const posicionGanadora = generarNumero(5);
  ul.innerHTML = "";
  console.log(posicionGanadora);

  for (let i = 0; i <= 5; i++) {
    const a = document.createElement("li");
    if (i === posicionGanadora) {
      a.textContent = colorParaAdivinar2;
      a.style.background = colorParaAdivinar2;
    } else {
      const colorAleatorio = colorRGB();
      a.style.background = colorAleatorio;
      a.textContent = colorAleatorio;
    }
    a.classList.add("especial");
    a.addEventListener("click", () => {
      console.log(a.style.background, colorParaAdivinar2);
      if (a.style.background === colorParaAdivinar2) {
        win++;
        aciertoRest++;
        aciertos.textContent = `Aciertos ${win}`;
        if (win === 3) {
          secondHeader.textContent = ` Ganaste por ${win} aciertos`;
          const pantallaGanadora = document.createElement("div");
          pantallaGanadora.classList.add("winScreen");
          secondHeader.appendChild(pantallaGanadora);
        } else {
          crearLis();
        }
      } else {
        loser++;
        intentosRest--;
        fallos.textContent = `Fallos ${loser}`;
        secondHeader.textContent = `Fumado compra unas gafas y tienes otros ${intentosRest} intentos`;
        if (loser === 3) {
          secondHeader.textContent = ` Perdiste por ${loser} fallos`;
          setTimeout(() => {
            reiniciarJuego();
          }, 5000);
        } else {
          crearLis();
        }
      }
    });
    console.log(colorParaAdivinar2);

    ul.append(a);
  }
}

crearLis();
secondMain.append(ul);

const footer = document.createElement("footer");
const fallos = document.createElement("div");
fallos.id = "fallos";
fallos.textContent = "Fallos: 0";
const aciertos = document.createElement("div");
aciertos.textContent = "Aciertos: 0";
aciertos.id = "aciertos";
footer.appendChild(fallos);
footer.appendChild(aciertos);

document.body.appendChild(footer);
