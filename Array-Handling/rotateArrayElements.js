// using reverse method
let arr1=[1,2,3,4,5];

function Arrayreverse(arr,start,end){
    while(start<end){
const temp=arr[start];
arr[start]= arr[end];
arr[end]=temp;
start++
end--
    }

}
function rotateArrayReverse(){

}
Arrayreverse(arr1,0,4);
console.log(arr1);