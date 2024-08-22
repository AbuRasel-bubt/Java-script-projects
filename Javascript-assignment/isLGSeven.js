// function isLGSeven(number) {
//     let result = number - 7;
//     if (result > 7) {
//         let multiply = number * 2;
//         return multiply;
//     } else {
//         return result;
//     }
// }

// const result = isLGSeven(15);
// console.log(result)




function isLGSeven(number) {
    let minus = number - 7;
    if (minus > 7) {
        let multiply = number * 2;
        return multiply;
    } else {
        return minus;
    }
}

const result = isLGSeven(-15);
console.log(result);