function generarNumero(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function colorRGB() {
  // let coolor =
  //   "(" +
  //   generarNumero(255) +
  //   ", " +
  //   generarNumero(255) +
  //   ", " +
  //   generarNumero(255) +
  //   ")";
  return [generarNumero(255), generarNumero(255), generarNumero(255)];
}
function arrayToRgbString(array) {
  return "rgb(" + array[0] + ", " + array[1] + ", " + array[2] + ")";
}
const audiocardwrong = new Audio("javaScr/audios/wrong.mp3");
const audioloser = new Audio("javaScr/audios/loser.mp3");
const audiowin = new Audio("javaScr/audios/win.mp3");
const audiocardcorrect = new Audio("javaScr/audios/pingcorrect.mp3");

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
  win = 0;
  intentosRest = 3;
  crearLis();
}
let intentosRest = 3;
let loser = 0;
let win = 0;

const ul = document.createElement("ul");

function crearLis() {
  const colorParaAdivinar2 = colorRGB();
  secondHeader.textContent = arrayToRgbString(colorParaAdivinar2);
  const posicionGanadora = generarNumero(5);
  ul.innerHTML = "";
  // console.log(posicionGanadora);

  for (let i = 0; i <= 5; i++) {
    const a = document.createElement("li");
    if (i === posicionGanadora) {
      a.style.background = arrayToRgbString(colorParaAdivinar2);
      const [r, g, b] = colorParaAdivinar2;
      a.style.boxShadow = `0px 0px 25px rgba(${r}, ${g}, ${b}, 50%)`;
    } else {
      const r = colorParaAdivinar2[0] + generarNumero(80, -80);
      const g = colorParaAdivinar2[1] + generarNumero(80, -80);
      const b = colorParaAdivinar2[2] + generarNumero(80, -80);
      const colorAleatorio = `rgb(${r}, ${g}, ${b})`;
      a.style.background = colorAleatorio;
      a.style.boxShadow = `0px 0px 25px rgba(${r}, ${g}, ${b}, 50%)`;
      console.log(r, g, b);
    }
    a.classList.add("especial");
    a.addEventListener("click", () => {
      console.log(a.style.background, colorParaAdivinar2);
      if (a.style.background === arrayToRgbString(colorParaAdivinar2)) {
        audiocardcorrect.play();
        win++;
        aciertos.textContent = `Aciertos ${win}`;
        if (win === 3) {
          secondHeader.textContent = ` Ganaste por ${win} aciertos`;
          audiowin.play();
          ul.innerHTML = "";
        } else {
          crearLis();
        }
      } else {
        audiocardwrong.play();
        loser++;
        fallos.textContent = `Fallos ${loser}`;

        if (loser === 3) {
          audioloser.play();
          secondHeader.textContent = ` Perdiste por ${loser} fallos`;
          ul.innerHTML = "";
        } else {
          crearLis();
        }
      }
    });
    // console.log(colorParaAdivinar2);

    ul.append(a);
  }
}

crearLis();
secondMain.append(ul);

const footer = document.createElement("footer");
const fallos = document.createElement("div");
fallos.classList = "fallos";
fallos.textContent = "Fallos: 0";
const aciertos = document.createElement("div");
aciertos.textContent = "Aciertos: 0";
aciertos.classList = "aciertos";
footer.appendChild(fallos);
footer.appendChild(aciertos);
const btn = document.createElement("button");
footer.appendChild(btn);

btn.addEventListener("click", () => {
  reiniciarJuego();
});

document.body.appendChild(footer);
