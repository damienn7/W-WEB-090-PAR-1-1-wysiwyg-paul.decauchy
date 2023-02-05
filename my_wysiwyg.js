import { bold, italic,underline, strike, orange, purple, green, red, alignLeft, alignRight, alignCenter, justify } from './module.js';
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

bBold.onclick = bold(textarea);
bItalic.onclick = italic(textarea);
bSurlign.onclick = underline(textarea);
bStrike.onclick = strike(textarea);
bOrange.onclick = orange(textarea);
bPurple.onclick = purple(textarea);
bGreen.onclick = green(textarea);
bRed.onclick = red(textarea);
bLeft.onclick = alignLeft(textarea);
bRight.onclick = alignRight(textarea);
bCenter.onclick = alignCenter(textarea);
bJustify.onclick = justify(textarea);

function update(){
    text.innerHTML = textarea.value;
}