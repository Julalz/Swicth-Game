"use strict";

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

//creamos header dentro de main
const secondHeader = document.createElement("header");
const main = document.querySelector("main");
const bigheader = document.querySelector("header");
main.appendChild(secondHeader);

const colorParaAdivinar = (secondHeader.textContent = colorRGB());

//creamos main dentro de main

const secondMain = document.createElement("main");
main.append(secondMain);
//clases
secondMain.classList.add("cards");
main.classList.add("principal");
secondHeader.classList.add("colorfixed");
bigheader.classList.add("header1");

/*creamos lis*/

const ul = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
  const a = document.createElement("li");
  a.style.background = colorRGB();
  a.classList.add("especial");
  a.addEventListener("click", () => {
    if (a.style.background === colorParaAdivinar) {
      secondHeader.textContent = "Puto crack";
      win++;
    } else {
      secondHeader.textContent =
        "Fumado comprate unas gafas, tienes otros dos intentos";
      loser++;
    }

    b.textContent = colorParaAdivinar;
  });
  console.log(colorParaAdivinar);

  a.textContent = colorRGB();
  ul.append(a);
}

for (let ab = 0; ab < 1; ab++) {
  const b = document.createElement("li");
  b.style.background = colorRGB();
  b.classList.add("especial");
  b.addEventListener("click", () => {
    if (b.style.background === colorParaAdivinar) {
      secondHeader.textContent = "Puto crack";
      bigheader.textContent = "ERES EL GANADOR";
    } else {
      null;
    }
  });

  ul.append(b);
  b.textContent = colorParaAdivinar;
}

secondMain.append(ul);

//creamos contadores en el footer!
const footer = document.createElement("footer");
const intentos = document.createElement("div");
const aciertos = document.createElement("div");

document.body.append(footer);
footer.append(intentos, aciertos);

intentos.textContent = "Intentos: 0";

aciertos.textContent = "Aciertos: 0";

//
const win = [];
const loser = [];

// //creamos lis
// const ul = document.createElement("ul");
// for (let i = 1; i <= 6; i++) {
//   const a = document.createElement("li");
//   // a.classList.add("li" + ${i});
//   const color = colorRGB();
//   a.style.background = `RGB${color}`;

//   a.addEventListener("click", () => {
//     if (a.style.backgroundColor === "RGB" + colorParaAdivinar) {
//       secondHeader.textContent = "¡Adivinaste correctamente!";
//     } else {
//       const remainingAttempts = 3 - parseInt(secondHeader.dataset.attempts);
//       secondHeader.dataset.attempts =
//         parseInt(secondHeader.dataset.attempts) + 1;
//       secondHeader.textContent =
//         remainingAttempts > 1
//           ? `Incorrecto! Te quedan ${remainingAttempts} intentos.`
//           : "Incorrecto! Este fue tu último intento.";
//       a.style.backgroundColor = "#000000";
//     }
//   });

//   ul.append(a);
// }
// secondMain.append(ul);
