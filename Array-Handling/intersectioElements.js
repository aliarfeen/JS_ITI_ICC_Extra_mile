
var interSectionArr=[];

function findInterSection(arr1,arr2){
    for(var i=0; i<arr1.length;i++){
        arr2.forEach(e => {
            if(arr1[i]===e)
                interSectionArr.push(e);
        });
    }
    console.log(`the intersection elements are ${interSectionArr}`);
}


findInterSection([1,15,18,22],[7,6,15,4,9]);