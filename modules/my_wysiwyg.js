class MyWysiwyg {

    constructor(doc, array = ["all"]) {
        this.doc = doc;
        this.options = array;
        this.text = document.getElementById("textZone");
    }

    considerOptions() {
        this.update();
        this.onkeyup();
        let div = document.createElement("div");
        div.setAttribute("class", "lol");
        document.body.insertBefore(div, this.doc);
        if (this.options == ["all"]) {
        this.buttonBold();
        this.buttonItalic();
        this.buttonUnderline();
        this.buttonStrike();
        this.buttonLink();
        this.buttonColorRed();
        this.buttonColorGreen();
        this.buttonColorBlue();
        this.buttonAlignLeft();
        this.buttonAlignRight();
        this.buttonCenter();
        this.buttonJustify();
        this.buttonBiggerFont();
        this.buttonSmallerFont();
        } else {
            for (const element of this.options) {
                if (element == "bold") {
                    this.buttonBold();
                }
                if (element == "italic") {
                    this.buttonItalic();
                }
                if (element == "underline") {
                    this.buttonUnderline();
                }
                if (element == "strike") {
                    this.buttonStrike();
                }
                if (element == "link") {
                    this.buttonLink();
                }
                if (element == "color") {
                    this.buttonColorRed();
                    this.buttonColorGreen();
                    this.buttonColorBlue();
                }
                if (element == "content") {
                    this.buttonAlignLeft();
                    this.buttonAlignRight();
                    this.buttonCenter();
                    this.buttonJustify();
                }
                if (element == "font") {
                    this.buttonBiggerFont();
                    this.buttonSmallerFont();
                }
            }; 
        }
    }

    buttonBold() {
        let btn = document.createElement("button");
        btn.innerHTML = "<b>B</b>";
        btn.name = "bold";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<b>", "</b>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }

    buttonItalic() {
        let btn = document.createElement("button");
        btn.innerHTML = "<i>I</i>";
        btn.name = "italic";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<i>", "</i>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonUnderline() {
        let btn = document.createElement("button");
        btn.innerHTML = "<u>U</u>";
        btn.name = "underline";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<u>", "</u>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonStrike() {
        let btn = document.createElement("button");
        btn.innerHTML = "<s>S</s>";
        btn.name = "strike";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<s>", "</s>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonLink() {
        let btn = document.createElement("button");
        btn.innerHTML = "<a href='#'>L</a>";
        btn.name = "link";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<a href='#'>", "</a>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonColorRed() {
        let btn = document.createElement("button");
        btn.innerHTML = "<span style='color:red'>C</span>";
        btn.name = "red";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<span style='color:red'>", "</span>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonColorGreen() {
        let btn = document.createElement("button");
        btn.innerHTML = "<span style='color:green'>C</span>";
        btn.name = "green";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<span style='color:green'>", "</span>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonColorBlue() {
        let btn = document.createElement("button");
        btn.innerHTML = "<span style='color:blue'>C</span>";
        btn.name = "blue";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<span style='color:blue'>", "</span>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonAlignLeft() {
        let btn = document.createElement("button");
        btn.innerHTML = "<span style='text-align:left'>AL</span>";
        btn.name = "alignleft";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<span style='text-align:left'>", "</span>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    } 
    buttonAlignRight() {
        let btn = document.createElement("button");
        btn.innerHTML = "<span style='text-align:right'>AR</span>";
        btn.name = "alignright";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<span style='text-align:right'>", "</span>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonCenter() {
        let btn = document.createElement("button");
        btn.innerHTML = "<spanp style='text-align:center'>C</span>";
        btn.name = "center";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<span style='text-align:center'>", "</span>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonJustify() {
        let btn = document.createElement("button");
        btn.innerHTML = "<span style='text-align:justify'>J</span>";
        btn.name = "justify";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<span style='text-align:justify'>", "</span>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonBiggerFont() {
        let btn = document.createElement("button");
        btn.innerHTML = "<span style='font-size:larger'>G</span>";
        btn.name = "biggerfont";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<span style='font-size:larger'>", "</span>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    buttonSmallerFont() {
        let btn = document.createElement("button");
        btn.innerHTML = "<span style='font-size:smaller'>G</span>";
        btn.name = "smallerfont";
        var doc = this.doc;
        var object = new MyWysiwyg(doc);
        btn.onclick = function () {
            object.wrapText(doc, "<span style='font-size:smaller'>", "</span>");
        };
        document.body.getElementsByClassName("lol")[0].appendChild(btn);
    }
    onkeyup() {
        var object = new MyWysiwyg(this.doc);
        document.body.addEventListener("keyup", function () {
            object.update();
        });
    }
    wrapText(textElement, open, close){
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
        this.update();
    }
    update(){ 
        this.text.innerHTML = this.doc.value;
    }
}

export { MyWysiwyg };