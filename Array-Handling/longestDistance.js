let arr = [7,0,0,5,6,7,5,0,7,5,3]

function findLongestDistance(_arr){
    var distance=0
    var newDistance=0;
    var longestDistanceNumber;
    for (let i = 0; i < _arr.length; i++) {
       if(_arr.indexOf[i]>i) continue;
         newDistance = _arr.lastIndexOf(_arr[i]) - _arr.indexOf(_arr[i]);
         if(newDistance>distance){  
           distance = newDistance;
           longestDistanceNumber=_arr[i] ;
    }}
    console.log(`longest distance is ${distance} digits for number ${longestDistanceNumber}`)
}

findLongestDistance(arr);