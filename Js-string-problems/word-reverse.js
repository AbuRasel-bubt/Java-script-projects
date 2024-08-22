function wordReverse(str) {
    const word = str.split(' ');
    const result = [];
    // console.log(word);
    for (i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        result.push(element)
    }
    // console.log(result);
    const reversed = result.join(' ');
    return reversed;
}

const myString = 'i am a good boy';
wordReverse(myString);