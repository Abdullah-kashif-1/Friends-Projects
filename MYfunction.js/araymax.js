// function findMax(arr) {
//     if (arr.length === 0) {
//       return null; // or throw an error
//     }
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
// let numbers = [4, 2, 9, 6, 5, 1, 8, 3, 7];
// let max = findMax(numbers);
// console.log(max);  


function findmax(arr) {
    if (arr.length === 0){
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < array.length; i++) {
        if (arr[i] > max){
            max = arr[i];
        }
        
    }
    return max;
}


