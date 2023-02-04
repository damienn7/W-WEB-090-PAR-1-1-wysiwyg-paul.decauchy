import { bold } from './module.js';
let text = document.getElementById("textZone");
let textarea = document.getElementById("textarea");
let bBold = document.getElementById("bold");

bBold.onclick = bold(textarea);