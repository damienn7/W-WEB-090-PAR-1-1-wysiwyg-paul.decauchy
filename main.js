import { bold, italic,underline, strike, orange, purple, green, red, alignLeft, alignRight, alignCenter, justify, update } from './my_wysiwyg.js';
// import { bold } from './my_wysiwyg.js';

// let p = document.getElementsByClassName("contain")[0];
// let bold_button = document.getElementsByClassName("bold")[0];
// let sheet = document.getElementsByClassName("sheet")[0];

// sheet.addEventListener('mouseup', (e) => {
//     let selection = window.getSelection().toString();

//     if (selection !== '') {
//         bold_button.addEventListener("click", () => {

//             if (window.getSelection().anchorOffset != "0") {

//                 let range = window.getSelection().getRangeAt(0);
//                 const oldContent = document.createTextNode(range.toString());
//                 const newElement = document.createElement("strong");
//                 newElement.append(oldContent);
//                 range.deleteContents();
//                 range.insertNode(newElement);

//             } else {

//                 console.log(window.getSelection())
//                 p.innerHTML = p.innerHTML.replace("<strong>" + selection + "</strong>", selection);
//                 selection = "";
//             }
        
//         })
//     }


//________________INTEGRATION-DU-CODE-DE-L-EQUIPE__________________
    


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

    // TEST___________________

    //     let open = "<strong>";

    //     let close = "</strong>";

    //     let text = p.innerHTML;
    //     var selectStart = p.innerHTML.selectionStart;
    //     var selectEnd = p.innerHTML.selectionEnd;
    //     var finalResult = "";
    //     //console.log(text);
    //     // let offsetStart = text.indexOf(select.baseNode.parentElement.innerHTML);
    //     // let selectStart = offsetStart + select.anchorOffset;
    //     // let selectEnd = offsetStart + select.focusOffset
    //     let entryStart = text.substring(0, selectStart);
    //     let entryEnd = text.substring(selectEnd, text.length);
    //     let checkStart = text.substring(selectStart-open.length,selectStart);
    //     let checkEnd = text.substring(selectEnd , selectEnd + close.length);
    //     let check = checkStart + selection + checkEnd;
    //     let regex = new RegExp(`^${open}.*${close}$`);
    //     if(regex.test(check) === true){
    //         let entryStartT = text.substring(0, selectStart-open.length);
    //         let entryEndT = text.substring(selectEnd + close.length, text.length );
    //         finalResult = entryStartT + selection + entryEndT
    //     } else {    
    //         finalResult = entryStart + open + selection + close + entryEnd;
    //         // return finalResult;
    //     }
    //     text = finalResult;

    //     console.log(text);

    //     p.innerHTML = p.innerHTML.replace(selection,"<strong>" + selection + "</strong>");
    //     console.log(window.getSelection().anchorOffset);
    //     console.log(selection);
    //     selection = "";
//});


//}