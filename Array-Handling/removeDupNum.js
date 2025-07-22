function removeDupNum(arr){
    var unique = [ ...new Set(arr)]
    console.log(unique); 
}

removeDupNum([1,5,7,5,6]);