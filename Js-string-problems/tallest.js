// function maxInArray(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers(index);
//         console.log(index);
//     }


// }

// const height = [167, 190, 120, 165, 137];
// const tallest = maxInArray(height);
// console.log(tallest);





function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;


}
const height = [167, 190, 120, 145, 135];
const tallest = maxInArray(height);
console.log(tallest);