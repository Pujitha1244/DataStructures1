// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array is monotone increasing if all its elements from left to right are non-decreasing.
// An array is monotone decreasing if all  its elements from left to right are non-increasing.
// Given an integer array return true if the given array is monotonic, or false otherwise.

const checkMonotonic = function (array){
    if(array.length ===0){
        return true 
    } 	
    const first = array[0];
    const last = array[array.length-1];
// 1.......10
    if(first === last){
        for(let i=0;i<array.length-1;i++){
            if(array[i+1]!==array[i]) return false;
        }
    }
    else if (first<last){
        // non decreasing
        for(let i=0;i<array.length-1;i++){
            if(array[i+1]<array[i]) return false;
        }
    }
    else{
        // non increasing
        for(let i=0;i<array.length-1;i++){
            if(array[i+1]>array[i]) return false;
        } 
    }
    return true;
}

checkMonotonic([9]);
