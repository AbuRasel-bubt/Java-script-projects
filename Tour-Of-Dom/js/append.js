// where to be add
const placesList = document.getElementById('places-list');
// what to be added
const li = document.createElement('li');

// add the child
li.innerText = 'pahartoliban';
// where to be add
placesList.appendChild(li);


// main section///////////////
const mainContainer = document.getElementById('main-section');

// const section = document.createElement('section');
// const h1 = document.createElement('h1');
// h1.innerText = 'My FoodList';
// section.appendChild(h1)

// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// li.innerText = 'biryani'
// ul.appendChild(li1);

// const li2 = document.createElement('li');
// li.innerText = 'burhani'
// ul.appendChild(li2);

// mainContainer.appendChild('section');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my Food List';
section.appendChild(h1);


const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani'
ul.appendChild(li1);
section.appendChild(ul);

const li2 = document.createElement('li');
li2.innerText = 'burhani'
ul.appendChild(li2);
section.appendChild(ul);

const li3 = document.createElement('li');
li3.innerText = 'salad'
ul.appendChild(li3);
section.appendChild(ul);
const li4 = document.createElement('li');
li4.innerText = 'salad'
ul.appendChild(li4);
section.appendChild(ul);



mainContainer.appendChild(section);

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress Section</h2>
<ul> 
        <li> T-Shirt</li>
        <li> Lungi</li>
        <li>Sandu genji</li>


    </ul>

`
mainContainer.appendChild(sectionDress);