var test = "tu veux faire un test";
var res = test.toUpperCase();//test.toLowerCase();  Methode de l'objet String pour transformer en miniscule , majuscule
console.log(res);
alert(res);
//

function swapcase(s){
    var res;
    for(var i = 0 ; i < s.length; i++){
        let min = s[i].toLowerCase();
        let max = s[i].toUpperCase();
        if(s[i] === min)
           res = res + max;
        if(s[i] === max)
           res = res + min;
    }
    return res;
}
swapcase("motsebo zossie patrick");
