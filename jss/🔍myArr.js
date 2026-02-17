var text = prompt("so'z kiriting iltimos🫡").trim().toLowerCase();
         
 if (text) {
             
     
     text = text.trim(); 
     
     
     var car = prompt("Qaysi harf nechtaligni bilmoqchsz ").trim();
     
     
     if (car) {
         car = car.toLowerCase();
         
         
         var count = 0;
         
         for (var
            
            i = 0; i < text.length; i++) {
                if (text.charAt(i).toLowerCase() === car) {
                    count++;
                }
                
        }
        
        alert(`  ${car} harfi ${count} ta va`); 
    }
     
    else {
        alert("siz qaysi harf nechtaligini🤔 kiritmadingiz");
    }
}         

console.log(` ${text} suzida  ${car} harfi ${count} marta qatnashdi`);



if (text) {

    text = text.trim().toLowerCase();
    
    var git = {};

    for (var i = 0; i < text.length; i++) {

        var char = text.charAt(i);

        if (char !== " ") {
            
            if
               (git[char]) {
                git[char]++; 
            } 
            else {
               git[char] = 1; 
            }
        }
    }

    
    var school = "";


    for (var key in git) {
        school += (`${key} ${git[key]},`);
    }
    alert(school);
}








 
 