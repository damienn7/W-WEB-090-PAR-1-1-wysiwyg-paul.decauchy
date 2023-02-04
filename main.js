window.onload = function() {
    let p = document.getElementsByClassName("contain")[0];
    let bold = document.getElementsByClassName("bold")[0];
    p.addEventListener('mouseup', (e) => {
        const selection = window.getSelection().toString();
      
        if (selection !== '') {
            bold.addEventListener("click",()=>{
                console.log(selection);
                if (selection.innerHTML != "<strong>"+selection+"</strong>") {
                    p.innerHTML = p.innerHTML.replace(selection, "<strong>"+selection+"</strong>");
                }else{
                    let text = selection.innerHTML.replace("<strong>","");
                    text = text.replace("</strong>","");
                    p.innerHTML = p.innerHTML.replace(selection.innerHTML, text);
                }
            })
        }
      });
}