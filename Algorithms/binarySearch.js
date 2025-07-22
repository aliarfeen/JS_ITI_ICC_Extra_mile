// i tend to da ittrative way
function implementBinarySearch(arr,x){
    let start=0, end=arr.length-1;

    arr.sort();

    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]==x){
            console.log(`${x} is found`);
        return;}
        else if(arr[mid]<x)
        {start=mid+1;}
    else
    end=mid-1;

    }
    
    console.log(`${x} isn't found`);
    

}

implementBinarySearch([1,7,5,6,8],7);