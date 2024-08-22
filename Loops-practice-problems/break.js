// for loop used in this break
// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     if (i > 5) {
//         break;
//     }
// }

// while loop used in this break
// var roastGiven = 0;
// while (roastGiven < 10) {
//     console.log('amake roast den gift unsi');
//     roastGiven++;
//     if (roastGiven > 5) {
//         break;
//     }


// }  

// var items = ['bottle', 'mouse', 'sunglass', 'pen']
// for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     if (item == 'pen') {
//         break;
//     }
//     console.log(item)

// target: display every elements of an array
var numbers = [45, 50, 55, 60, 70, 57, 90, 76, 101, 108];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);

}