var ism = prompt("iltimos ismingizni kiriting").trim();
console.log("salom" + " " + `${ism}` + " ");


if(ism==""){
    alert("ismingizni kiriting !!!")
    var ism = prompt("Ismingizni kiriting").trim();
    console.log("ismingizni kiritmagansiz !!!");
    
}else if (ism.length <= 3) {
    alert("ism juda kam!🥲")

    var ism = prompt("Ismingizni kiriting").trim();
}


var nimaga = prompt("nima uchun institutga kirishni xohlaysiz").trim();

if(nimaga.length <=15) {
    alert("sizning ma'lumotingiz 15 ta harfdan ko'p bo'lishi kerak")
    

    console.log("siz nima uchun institutga kirishni xohganingizni yozmadingiz uzur!");
    var nimaga = prompt("boshqatdan kiriting 15 ta harfdan kam bo'lmasin").trim();
}else{
    alert("raxmat!")
}

console.log(nimaga.replaceAll("universitet", "alicode"));