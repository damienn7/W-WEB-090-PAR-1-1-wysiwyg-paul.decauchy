import { MyWysiwyg } from './modules/my_wysiwyg.js';
let mw = new MyWysiwyg (document.getElementById("textarea"), ["bold", "content"]) ;

mw.considerOptions();