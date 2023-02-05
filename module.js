export function bold(textElement){
    return function (){
            wrapText(textElement, "<b>", "</b>");
    };
}

export function italic(textElement){
    return function (){
            wrapText(textElement, "<i>", "</i>");
    };
}

export function underline(textElement){
    return function (){
            wrapText(textElement, "<u>", "</u>");
    };
}

export function strike(textElement){
    return function (){
            wrapText(textElement, "<s>", "</s>");
    };
}

export function link(textElement){
    return function (){
            // en travail
            wrapText(textElement, `<a href="" >`, "</a>");
    };
}

export function alignRight(textElement){
    return function (){
            wrapText(textElement, `<div class="right">`, "</div>");
    };
}

export function alignLeft(textElement){
    return function (){
            wrapText(textElement, `<div class="left">`, "</div>");
    };
}

export function alignCenter(textElement){
    return function (){
            wrapText(textElement, `<div class="center">`, "</div>");
    };
}

export function justify(textElement){
    return function (){
            wrapText(textElement, `<div class="justify">`, "</div>");
    };
}

export function orange(textElement){
    return function (){
        wrapText(textElement, `<span class="orange">`, "</span>");
    };
}

export function purple(textElement){
    return function (){
        wrapText(textElement, `<span class="purple">`, "</span>");
    };
}

export function red(textElement){
    return function (){
        wrapText(textElement, `<span class="red">`, "</span>");
    };
}

export function green(textElement){
    return function (){
            wrapText(textElement, `<span class="green">`, "</span>");
    };
}


function wrapText(textElement, open, close){
    let select = document.getSelection();

    let text = textElement.value;
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
    textElement.value = finalResult;
}

