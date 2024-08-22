const lyrics = 'tumi bondu kala pakhi . ami jeno ki bosonto kala tumi bolte pari ni sada sada kala kala Rong jobese kala kala';




// const doesExist = lyrics.includes('pakhi', );
// const fiended = lyrics.includes('khali')
// console.log(fiended);

// console.log(doesExist);


const searchString = 'Pakhi';

const lyricsLowercase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowercase.includes(searchStringLower);
console.log(doesExist);