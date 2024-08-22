// target: display every elements of an array
var numbers = [45, 50, 55, 60, 70, 57, 90, 76];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);

}