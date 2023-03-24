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

console.log(colorRGB());
//creamos header dentro de main
const secondHeader = document.createElement("header");
const main = document.querySelector("main");
const bigheader = document.querySelector("header");
main.appendChild(secondHeader);

secondHeader.textContent = colorRGB();

//creamos main dentro de main

const secondMain = document.createElement("main");
main.append(secondMain);
//clases
secondMain.classList.add("cards");
main.classList.add("principal");
secondHeader.classList.add("RGBfixed");
bigheader.classList.add("header1");

//ul

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
const li6 = document.createElement("li");

const ul = document.createElement("ul");
ul.append(li1, li2, li3, li4, li5, li6);
secondMain.append(ul);
