function reverseString(text) {

    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        console.log(element, reversed);
        const reversed = reversed + element;
    }
    return reversed;
}

const stringName = 'He is a good boy';
const reversed = reverseString(stringName);
console.log(reversed)