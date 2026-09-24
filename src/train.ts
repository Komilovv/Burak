// ================== N-Task ====================
function polindromCheck(str: string) {
    let arr: string[] = str.split("");
    console.log(arr);
    let x = 0;
    let y = arr.length-1;
    const arr_len = Math.ceil(arr.length/2)
    while (x<arr_len) {
        if (arr[x]===arr[y]) {
            console.log("it is true")
            x++;
            y--;

        }
        else {
            console.log("it is false")
            return false;
            
        }
    }
    return x===arr_len;
}

console.log(polindromCheck("daaddaaad"))



// // ================ M-Task =====================
// // function getSquares (arr: number[]) {
// //     let new_arr = [];
// //     for (let x of arr){
// //         const obj = {"number": x, "square": x**2};
// //         new_arr.push(obj);
// //     }
// //     return new_arr;
// // }

// // console.log(getSquares([2,56,7,1,9]));

 