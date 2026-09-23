// ================ M-Task =====================
function getSquares (arr: number[]) {
    let new_arr = [];
    for (let x of arr){
        const obj = {"number": x, "square": x**2};
        new_arr.push(obj);
    }
    return new_arr;
}

console.log(getSquares([2,56,7,1,9]));
