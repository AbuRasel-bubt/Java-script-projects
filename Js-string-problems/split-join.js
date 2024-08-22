const lyrics = 'tumi bondu kala pakhi . ami jeno ki bosonto kala tumi bolte pari ni sada sada kala kala Rong jobese kala kala';
const farts = lyrics.split(' ');
const sentenceDot = lyrics.split(' . ')
console.log(sentenceDot);
const partial = lyrics.slice(6, 10);
console.log(partial);


const lines = ['tumi bondu kala pakhi',
    'ami jeno ki bosonto kala tumi bolte pari ni',
    'sada sada kala kala Rong jobese kala kala'
]
const newSong = lines.join(':')
console.log(newSong);