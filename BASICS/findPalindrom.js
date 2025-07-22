var isplaindrom=true;
function findPalindrom(str){
    str.toLowerCase();
var n= str.length;
var i=0;
while(i<n){
    if(str.charAt(i)!==str.charAt(n-1)){
        isplaindrom=false;
        break;
    }
    i++;
    n--;
}
isplaindrom? console.log(`${str} is a plaindrom`):console.log(`${str} isn't a plaindrom`);
}

findPalindrom("ali");
findPalindrom("azza");