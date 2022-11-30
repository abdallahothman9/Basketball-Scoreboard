"use strict";
let homeZ = document.getElementById("owner");
let guest = document.getElementById("visitor");
// let home = document.getElementById("plusOne");
let zCount = 0;
let aCount = 0;

// guestZ.textContent = aCount;

function plus1() {
  zCount++;
  homeZ.textContent = zCount;
}
function plus2() {
  zCount += 2;
  homeZ.textContent = zCount;
}
function plus3() {
  zCount += 3;
  homeZ.textContent = zCount;
}
function minus1() {
  aCount++;
  guest.textContent = aCount;
}
function minus2() {
  aCount += 2;
  guest.textContent = aCount;
}
function minus3() {
  aCount += 3;
  guest.textContent = aCount;
}
let reset = () => {
  aCount = 0;
  zCount = 0;
  guest.textContent = aCount;
  homeZ.textContent = zCount;
};
