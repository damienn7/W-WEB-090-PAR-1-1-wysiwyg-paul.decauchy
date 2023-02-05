export function bold(textElement, select){
    return function (){
   

        // if(match){
        //     unWrapText()
        // } else {
            let result = wrapText(textElement, select, "<b>", "</b>");

            console.log(result);
        // }
    };
}

function wrapText(textElement,select , open, close){
    //let select = document.getSelection();

    console.log(select);

    let text = textElement;
    var selectStart = textElement.selectionStart;
    var selectEnd = textElement.selectionEnd;
    var finalResult = "";

    // let offsetStart = text.indexOf(select.baseNode.parentElement.innerHTML);
    // let selectStart = offsetStart + select.anchorOffset;
    // let selectEnd = offsetStart + select.focusOffset
    let entryStart = text.substring(0, selectStart);
    let entryEnd = text.substring(selectEnd, text.length);
    let checkStart = text.substring(selectStart-open.length,selectStart);
    let checkEnd = text.substring(selectEnd , selectEnd + close.length);
    let check = checkStart + select + checkEnd;
    let regex = new RegExp(`^${open}.*${close}$`);
    if(regex.test(check) === true){
        let entryStartT = text.substring(0, selectStart-open.length);
        let entryEndT = text.substring(selectEnd + close.length, text.length );
        finalResult = entryStartT + select + entryEndT
    } else {    
        finalResult = entryStart + open + select + close + entryEnd;
        // return finalResult;
    }
    text = finalResult;

    // document.getElementsByClassName("contain")[0].innerHTML = "";
    // document.getElementsByClassName("contain")[0].innerHTML = text;
    

    return finalResult;
}