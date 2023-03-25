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

//lis con ul

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
const li6 = document.createElement("li");

//damos id a cada uno del id con su respectivo color
li1.classList.add("firstcard");
li2.classList.add("secondcard");
li3.classList.add("thirdcard");
li4.classList.add("fourthcard");
li5.classList.add("fifthcard");
li6.classList.add("sixthcard");

li1.style.backgroundColor = colorParaAdivinar;
li2.style.backgroundColor = colorRGB();
li3.style.backgroundColor = colorRGB();
li4.style.backgroundColor = colorRGB();
li5.style.backgroundColor = colorRGB();
li6.style.backgroundColor = colorRGB();

//introducimos dentro de ul todos los lis
const ul = document.createElement("ul");
ul.append(li1, li2, li3, li4, li5, li6);
secondMain.append(ul);

//creamos contadores en el footer!

document.body;
const section1 = document.createElement("section");
