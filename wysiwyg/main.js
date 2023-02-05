import { MyWysiwyg } from './modules/my_wysiwyg.js';
let mw = new MyWysiwyg (document.getElementsByTagName("textarea")[0], {
option1 : "valeur1" ,
option2 : "valeur2"
}) ;

mw.considerOptions();