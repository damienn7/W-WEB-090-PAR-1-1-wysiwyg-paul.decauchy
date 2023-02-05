
import { bold } from './my_wysiwyg.js';

document.getElementsByTagName("ul")[0].style.display = "none";

document.getElementsByClassName("font-color")[0].addEventListener("mouseover",()=>{
    document.getElementsByTagName("ul")[0].style.display = "";

    document.getElementsByClassName("font-color")[0].addEventListener("mouseleave",()=>{

        let event = document.getElementsByTagName("ul")[0].addEventListener("mouseover",()=>{
            document.getElementsByTagName("ul")[0].style.display = "";
        })

        if (!event) {
            document.getElementsByTagName("ul")[0].style.display = "none";
        }

    })

    document.getElementsByTagName("ul")[0].addEventListener("mouseleave",()=>{
        document.getElementsByTagName("ul")[0].style.display = "none";
    })

})

let p = document.getElementsByClassName("contain")[0];
let bold_button = document.getElementsByClassName("bold")[0];
let sheet = document.getElementsByClassName("sheet")[0];

sheet.addEventListener('mouseup', (e) => {
    let selection = window.getSelection().toString();

    if (selection !== '') {
        bold_button.addEventListener("click", () => {

            if (window.getSelection().anchorOffset != "0") {

                let range = window.getSelection().getRangeAt(0);
                const oldContent = document.createTextNode(range.toString());
                const newElement = document.createElement("strong");
                newElement.append(oldContent);
                range.deleteContents();
                range.insertNode(newElement);

            } else {

                console.log(window.getSelection())
                p.innerHTML = p.innerHTML.replace("<strong>" + selection + "</strong>", selection);
                selection = "";
            }
        
        })
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
});


//}