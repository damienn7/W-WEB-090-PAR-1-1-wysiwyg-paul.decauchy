class MyWysiwyg  {

    constructor(document, object = "all") {
        this.document = document;
        this.options = object;

    }

    considerOptions() {
        this.bold(this.document);
    }
    bold(textElement){
        this.wrapText(textElement, "<b>", "</b>");
    }
    wrapText(textElement, open, close){
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

}

export { MyWysiwyg };