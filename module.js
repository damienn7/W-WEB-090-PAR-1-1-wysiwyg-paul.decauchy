export function bold(textElement){
    return function (){
        wrapText(textElement, "<b>", "</b>");
    };
}

function wrapText(textElement, open, close){
    let select = document.getSelection();

    let text = textElement.value;
    var selectStart = textElement.selectionStart;
    var selectEnd = textElement.selectionEnd;

    // let offsetStart = text.indexOf(select.baseNode.parentElement.innerHTML);
    // let selectStart = offsetStart + select.anchorOffset;
    // let selectEnd = offsetStart + select.focusOffset

    let entryStart = text.substring(0, selectStart);
    let entryEnd = text.substring(selectEnd, text.length);
    let finalResult = entryStart + open + select + close + entryEnd;
    textElement.innerHTML = finalResult;
    // return finalResult;
}


//     {select.baseNode.parentElement.outerHTML
//         var desc = $("#textarea").val();
//         var selStart = $("#textarea")[0].selectionStart;
//         var selEnd = $("#textarea")[0].selectionEnd;
//         var text = desc.substring(selStart, selEnd);
//         var before = desc.substring(desc, selStart);
//         var after = desc.substring(selEnd, desc.length);
//         $("#textarea").val(before + openTAG + text + closeTAG + after);
//         $("#editeur").html($("#textarea").val());
//     }