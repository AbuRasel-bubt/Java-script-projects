// function findingBadData(numbers) {
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         let element = numbers[i];
//         if (element < 0) {
//             count = count + 1;
//         }
//     }
//     return count;
// }
// const array = [1, 2, -5];
// const result = findingBadData(array);
// console.log(result);

function findingBadData(number) {
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element < 0) {
            count = count + 1;
        }
    }
    return count;
}

const array = [-4, -9, -5, -33, -55];
const arrayResult = findingBadData(array);
console.log(arrayResult);