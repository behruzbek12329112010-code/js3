
var matn = prompt("biror nima yozing") .trim();
var yangiMatn = "" .trim();

for (var i = 0; i < matn.length; i++) {
    var BEKJAN = matn[i];

    if (BEKJAN == BEKJAN.toUpperCase()) {
        yangiMatn += BEKJAN.toLowerCase();
    } else {
        yangiMatn += BEKJAN.toUpperCase();
    }
}


alert("O'zgargan matn! " + yangiMatn);







