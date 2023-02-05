import { bold, italic,underline, strike, orange, purple, green, red, alignLeft, alignRight, alignCenter, justify, update } from './module.js';
let text = document.getElementById("textZone");
let textarea = document.getElementById("textarea");
let bBold = document.getElementById("bold");
let bItalic = document.getElementById("italic");
let bSurlign = document.getElementById("underline");
let bStrike = document.getElementById("strike");
let bOrange = document.getElementById("orange");
let bPurple = document.getElementById("purple");
let bGreen = document.getElementById("green");
let bRed = document.getElementById("red");
let bLeft = document.getElementById("left");
let bRight = document.getElementById("right");
let bCenter = document.getElementById("center");
let bJustify = document.getElementById("justify");
// let bBold = document.getElementById("bold");
// let bBold = document.getElementById("bold");
// let bBold = document.getElementById("bold");

bBold.onclick = bold(text, textarea);
bItalic.onclick = italic(text, textarea);
bSurlign.onclick = underline(text, textarea);
bStrike.onclick = strike(text, textarea);
bOrange.onclick = orange(text, textarea);
bPurple.onclick = purple(text, textarea);
bGreen.onclick = green(text, textarea);
bRed.onclick = red(text, textarea);
bLeft.onclick = alignLeft(text, textarea);
bRight.onclick = alignRight(text, textarea);
bCenter.onclick = alignCenter(text, textarea);
bJustify.onclick = justify(text, textarea);

textarea.onkeyup = getUpdate;

function getUpdate() {
    text.innerHTML = textarea.value;
}