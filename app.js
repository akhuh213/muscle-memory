//5 variable of different types
var string = "I like this song"
console.log(string);

var number = 1
console.log(number);

var array = [1,2,3]
console.log(array);

var isThisBoolean = true;
console.log(isThisBoolean)

var object = {
    food:"sushi",
    number:3,
    color:["red","yellow"],
    clothes:" love this t-shrit",
    likeIt: true
};

console.log(object);




function displayArray(arrayy) {
    let result = [];

    for(let i =0; i<array.length; i++) {
        let arrayyy = arrayy[i];

        if (arrayy.length >1) {
            result.push(2);
        }
    }
    return result;
}

    console.log(displayArray(array));

//function removeFromArray(callback, array) {
//    let result = callback(array)[0];
//    console.log(result);
//}

//removeFromArray(displayCoolBikes, motocycles);
//
//function printSentece(string) {
//    console.log(sentece);
//}
//printSentece(sentece);


const sectionOne = document.getElementById('section-one')
console.log(sectionOne);
const sectionTwo = document.getElementById('section-two')
console.log(sectionTwo);
const sectionThree = document.querySelector('#section-three');
console.log(sectionThree);
const sectionFour = document.querySelector('#section-four');
console.log(sectionFour);
const sectionFive = document.querySelector('#section-five');
console.log(sectionFive);


sectionOne.textContent = 'Lakers';
sectionTwo.textContent = 'Celtics';
sectionThree.textContent = 'Warriors';
sectionFour.textContent = 'Nets';
sectionFive.textContent = 'basketball';

const paragraphOne = document.querySelector('.paragraph-one');
console.log(paragraphOne);
paragraphOne.textContent = 'Lebron James';

const paragraphTwo = document.querySelector('.paragraph-two');
paragraphTwo.textContent = 'Steph Curry';

const paragraphThree = document.querySelector('.paragraph-three');
paragraphThree.textContent = 'Kemba Walker';

const paragraphFour = document.querySelector('.paragraph-four');
paragraphFour.textContent = 'Kyrie Irving';

const paragraphFive = document.querySelector('.paragraph-five');
paragraphFive.textContent = 'Damien Lillard';

const containerSix = document.createElement('div');
containerSix.classList.add('container-six');
console.log(containerSix);

const sectionSix = document.createElement('h2');
sectionSix.setAttribute('id','section-six');
console.log(sectionSix);
sectionSix.textContent = 'Rockets';
console.log(sectionSix);

const paragraphSix = document.createElement('p');
paragraphSix.classList.add('paragraph-six');
paragraphSix.textContent = 'James'
console.log(paragraphSix);

const body = document.querySelector('body');

body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
containerSix.appendChild(paragraphSix);

const containerSeven = document.createElement('div');
containerSix.classList.add('container-seven');

const sectionSeven = document.createElement('h2');
sectionSeven.setAttribute('id','section-seven');
sectionSeven.textContent = 'hmm';

const paragraphSeven = document.createElement('p');
paragraphSeven.classList.add('paragraph-seven');
paragraphSeven.textContent = 'not a big Fan, sorry';


body.appendChild(containerSeven);
body.appendChild(sectionSeven);
body.appendChild(paragraphSeven);