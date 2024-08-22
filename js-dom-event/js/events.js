const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
// //////////////////////////////////////////////////////////


function makeRed() {
    document.body.style.backgroundColor = 'red';
}


const buttonPink = document.getElementById('make-pink');
buttonPink.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink'
}


const buttonGreen = document.getElementById('make-green');
buttonGreen.addEventListener('click', function makeButtonGreen() {
    document.body.style.backgroundColor = 'green'
})

document.getElementById('make-goldenrod').addEventListener('click', function() {
    document.body.style.backgroundColor = 'goldenrod';
})