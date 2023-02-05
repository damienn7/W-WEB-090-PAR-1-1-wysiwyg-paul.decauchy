export function bold(text, textElement){
    return function (){
            wrapText(text, textElement, "<b>", "</b>");
    };
}

export function italic(text, textElement){
    return function (){
            wrapText(text, textElement, "<i>", "</i>");
    };
}

export function underline(text, textElement){
    return function (){
            wrapText(text, textElement, "<u>", "</u>");
    };
}

export function strike(text, textElement){
    return function (){
            wrapText(text, textElement, "<s>", "</s>");
    };
}

export function link(text, textElement){
    return function (){
            // en travail
            wrapText(text, textElement, `<a href="" >`, "</a>");
    };
}

export function alignRight(text, textElement){
    return function (){
            wrapText(text, textElement, `<div class="right">`, "</div>");
    };
}

export function alignLeft(text, textElement){
    return function (){
            wrapText(text, textElement, `<div class="left">`, "</div>");
    };
}

export function alignCenter(text, textElement){
    return function (){
            wrapText(text, textElement, `<div class="center">`, "</div>");
    };
}

export function justify(text, textElement){
    return function (){
            wrapText(text, textElement, `<div class="justify">`, "</div>");
    };
}

export function orange(text, textElement){
    return function (){
        wrapText(text, textElement, `<span class="orange">`, "</span>");
    };
}

export function purple(text, textElement){
    return function (){
        wrapText(text, textElement, `<span class="purple">`, "</span>");
    };
}

export function red(text, textElement){
    return function (){
        wrapText(text, textElement, `<span class="red">`, "</span>");
    };
}

export function green(text, textElement){
    return function (){
            wrapText(text, textElement, `<span class="green">`, "</span>");
    };
}

export function update(text){ 
    text.innerHTML = textarea.value;
}


function wrapText(text, textElement, open, close){
    let select = document.getSelection();
    let texte = textElement.value;
    var selectStart = textElement.selectionStart;
    var selectEnd = textElement.selectionEnd;
    var finalResult = "";

    // let offsetStart = text.indexOf(select.baseNode.parentElement.innerHTML);
    // let selectStart = offsetStart + select.anchorOffset;
    // let selectEnd = offsetStart + select.focusOffset
    let entryStart = texte.substring(0, selectStart);
    let entryEnd = texte.substring(selectEnd, texte.length);
    let checkStart = texte.substring(selectStart-open.length,selectStart);
    let checkEnd = texte.substring(selectEnd , selectEnd + close.length);
    let check = checkStart + select + checkEnd;
    let regex = new RegExp(`^${open}.*${close}$`);
    if(regex.test(check) === true){
        let entryStartT = texte.substring(0, selectStart-open.length);
        let entryEndT = texte.substring(selectEnd + close.length, texte.length );
        finalResult = entryStartT + select + entryEndT
    } else {    
        finalResult = entryStart + open + select + close + entryEnd;
        // return finalResult;
    }
    textElement.value = finalResult;
    update(text);
}

