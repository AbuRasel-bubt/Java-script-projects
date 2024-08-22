// function gemsToDiamond(number1, number2, number3){
//     let firstFriend = number1 * 21;
//     let secondFriend = number2 * 32;
//     let thirdFriend = number3 * 43;

//     let totalGems = firstFriend + secondFriend + thirdFriend;
//     if(totalGems > 2000){
//         let diamond = totalGems - 2000;
//         return diamond;
//     }
//     else{
//         return totalGems;
//     }
// }

// const result = gemsToDiamond(1, 1, 1);
// console.log(result);

function gemsToDiamond(number1, number2, number3) {
    let friend1 = number1 * 21;
    let friend2 = number2 * 32;
    let friend3 = number3 * 43;

    let totalGems = friend1 + friend2 + friend3;
    if (totalGems > 2000) {
        let canGems = totalGems - 2000;
        return canGems;
    } else {
        return totalGems;
    }
}
const result = gemsToDiamond(20, 200, 50);
console.log(result);