/*
Recursion:
    calling the function within that function

useful:
    for replacing for-loops / while-loops
    breaking large problems down into smaller ones

    *: 



*/

// // Basic recursion!
// let counter = 0

// const foo = function () {
//     console.log("in the body of foo")
//     if (counter < 5) {
//         counter ++
//         foo()
//     }
// }

// foo()

// // Basic recursion + passing argument using arrow function

// var bar = (x) => {
//     console.log("in the body of bar")
//     if (x < 5) {
//         bar(x + 1)
//     }
// }

// bar(0)


let mat2d = [
    [1,2],
    [3,4] 
]
let mat3d = [mat2d, mat2d]
// console.log(mat3d)

// print out each number **individually** from the mat<N>d (mat3d, mat4d, mat100d)
// using recusion
// [ ] try to identify base case
    // - conceptually, when you see a number, you've hit base case
    // - item.length => if it's undefined, that means a number, if it's not undefined it's an array
    
    let highWaterMark = 0
    
    const printItem = (item, depth) => {
        
        // Distinguish Base vs Recursive case:
        if (item.length == undefined) {
            // we're in base case
            // console.log(item)
            highWaterMark = Math.max(highWaterMark, depth)
        } else {
            // recursive case, leading to action
            // this must be an array
            for (let i=0; i< item.length; i++) {
                printItem(item[i], depth + 1)
            }
        }
    }

mat4d = [mat3d, mat3d, [mat2d, mat3d] ]
    
printItem(mat4d, 0)
console.log(`maxdepth - ${highWaterMark}`)
// pretty = JSON.stringify(mat4d,null, 4)
// flat   = JSON.stringify(mat4d)
// console.log(pretty)
// console.log(flat)

// console.log(pretty)


// printItem(mat4d)


// create a N new nested for loop, with a new iteration variable
// N-FOR-LOOP(10)

// for (let i = 0; i < mat3d.length; i++) {
//     for (let j = 0; j < mat3d[0].length; j++) {
//         for (let k = 0; k < mat3d[0][0].length; k++) {
//             console.log(mat3d[i][j][k]);
//         }
//     }
// }