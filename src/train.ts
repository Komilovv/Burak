// ==================== U-Task ==================
const sumOdds = (num: number) => num%2 ? num/2-0.5 : num/2
console.log(sumOdds(45923))
// ===================== T-Task =================
// function mergeSortArrs (arr1: number[], arr2: number[]) {
//   return arr1.concat(arr2).sort((a, b) => a-b );
// }
//  console.log(mergeSortArrs([5,9,1,25,34], [4,7,-3]))
// ====================== S-Task ================
// function getMissNum(arr: number[]) {
//   let arr_sort = arr.sort()
//   console.log(arr_sort);
//   let x = 0;
//   let ind = 1
//   let value1 = (arr_sort[0] + 1);
//   while(x<arr.length){
//     if ( value1 !== arr_sort[ind]) {
//       return value1;
//     } else {
//       console.log("========")
//       x++;
//       ind++;
//       value1++;
//     }
//   }
// }
// console.log(getMissNum([8,4,6,2,5,9,7,1])); 
// ====================R-Task ==================
// function calc(str: string) {
//   let num = 0;
//   for (const x of str) {
//     if(x!=="-" && x!=="+"){
//       console.log(x)
//       num += Number(x);
//     }
//   }
//   return num
// }
// console.log(calc("2+2-1"))

// =================== Q-Task ==================
// function hasProperty (obj: object, str: string) {
//   const keys = Object.keys(obj);
//   return keys.includes(str);
// }
// const obj = {
//   name: "Hoji",
//   age: 13,
//   job: "pupil",
// }
// const str = "job";
// console.log(hasProperty(obj, str));

// ================== P-Task ===================
// function objToArr (obj: object) {
//     return Object.entries(obj);
//     }

// console.log(objToArr({"x": 4, "y": 7, "z": 88, "The": true}))
// =================== O-Task ====================
// function getSumOfNum (arr: any[]) {
//     let sum = 0;
//     for(const x of arr) {
//         if (typeof(x) === "number") {
//             sum += x;
//         }
//     }
//     return sum;
// }

// console.log(getSumOfNum([23, 434, -433, "smth", 976, true, {}, null, 111]))

// ================== N-Task ====================
// function polindromCheck(str: string) {
//     let arr: string[] = str.split("");
//     console.log(arr);
//     let x = 0;
//     let y = arr.length-1;
//     const arr_len = Math.ceil(arr.length/2)
//     while (x<arr_len) {
//         if (arr[x]===arr[y]) {
//             console.log("it is true")
//             x++;
//             y--;

//         }
//         else {
//             console.log("it is false")
//             return false;
            
//         }
//     }
//     return x===arr_len;
// }

// console.log(polindromCheck("daaddaaad"))



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

 /* Project standards:
   -- Logging standards
   -- Naming standards:
      function, method, varaible => Camel case
      class => Pascal
      folder => Kebab
      CSS => Snake
   -- Error Handling
 */