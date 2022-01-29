// ITERATION 1

// Suspects Array

const suspectsArray = {
  suspectsArray: [{
      name: "mrGreen",
      firstName: "Jacob",
      lastName: "Green",
      color: "green",
      description: "He has a lot of connections",
      age: 45,
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      occupation: "Entrepreneur"
    },
    {
      name: "drOrchid",
      firstName: "Doctor",
      lastName: "Orchid",
      color: "white",
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age: 26,
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      occupation: "Scientist"
    },
    {
      name: "profPlum",
      firstName: "Victor",
      lastName: "Plum",
      color: "purple",
      description: "Billionare video game designer",
      age: 22,
      image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation: "Designer"
    },
    {
      name: "msScarlett",
      firstName: "Kasandra",
      lastName: "Scarlet",
      color: "red",
      description: "She is an A-list movie star with a dark past",
      age: 31,
      image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation: "Actor"
    },
    {
      name: "mrsPeacock",
      firstName: "Eleanor",
      lastName: "Peacock",
      color: "blue",
      description: "She is from a wealthy family and uses her status and money to earn popularity",
      age: 36,
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation: "Socialité"
    },
    {
      name: "mrMustard",
      firstName: "Jack",
      lastName: "Mustard",
      color: "yellow",
      description: "He is a former football player who tries to get by on his former glory",
      age: 62,
      image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation: "Retired Football player"
    }
  ]
}
 
// Rooms Array

const roomsArray = [
 { name:'Dining Room' },
{  name:'Conservatory'},
{  name:'Kitchen'},
 { name: 'Study'},
 { name:'Library'},
 { name: 'Billiard Room'},
 { name: 'Lounge'},
{  name: 'Ballroom'},
{  name:'Hall'},
 { name:'Spa'},
{  name: 'Living Room'},
{  name:'Observatory'},
{  name:'Theater'},
{  name:'Guest House'},
{  name: 'Patio'},
];

// Weapons Array

const weaponsArray = [
 { name:'rope' ,  weight: 10},
{ name: 'knife', weight: 8},
{name: 'candlestick' ,  weight: 2},
{name:' dumbbell', weight: 30},
{name:' poison', weight: 2},
{name:' axe', weight: 15},
{name:' bat', weight: 13},
{name: 'trophy', weight: 25},
{name:' pistol', weight: 20},
];


// ITERATION 2

function random_selector(array) {
  var randomNumber = parseInt(Math.random() * array.length);
  var card = array[randomNumber];
  return card;
}

function pick_mistery () {
  let mistery = [];
  mistery.push(random_selector(suspectsArray.suspectsArray));
  mistery.push(random_selector(weaponsArray.weaponsArray));
  mistery.push(random_selector(roomsArray));
  return mistery;
}

// ITERATION 3

function revealMystery() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
