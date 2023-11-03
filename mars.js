alert('Starting your spooky Mars Adventure!');
alert('Buckle up space cowboys');
alert('Roger, we have a lift off');
alert('Happy Halloween!');

let username = prompt('Identification, please?');
alert('ahoy hoy!');
alert('In the year 3017, human kind faced a global catastrophe that forced the global population to seek salvation on planet mars...');
alert('The pilot has been mysteriously missing for days and you are now the captain of the Mars lunar spaceship.');
alert('Do your best to steer the ship and prevent astroid collisions');

let excited = prompt ('Are you terrified to captain the mars lunar? Type Y or N');
excited = excited.toUpperCase();
if (excited==='Y'){
alert('Courage is not for the weak!');
} else if (excited==='N'); {
alert ('Our hero, our savior!');
}

alert ("It's time to reload the missiles");
let numMissiles = prompt ('How many missles do you plan to load?');
numMissiles = Number(numMissiles);

if(numMissiles<2) {
alert(`You might want to think twice captain`);
} else {
alert(`Let's rock n roll!`);
}

alert("You're allowed to bring one companion animal with you.");

const companionType = prompt('What kind of animal would you like to bring?');
let companionName = prompt(`What is your companion' name?`);
let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

alert(`Cool, you're bringing the ${companionType} ${companionName}.`);

alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decorChoice = prompt('Which decor would you like?');
decorChoice = decorChoice.toUpperCase();

let decor;
if (decorChoice ==='A'){
    decor = 'modern minimalist';
}else if (decorChoice === 'B'){
    decor = 'groovy nostalgia'
}else if (decorChoice === 'C'){
    decor = 'victorian dream';
}

alert(`${username} and ${companionName}, surfing the celestal abyss, in a ${decor} spaceship.`);

let timer = 5;
while (timer > 0) {
alert (`${timer}...`);
timer -=1;
};
alert ('*** LIFTOFF ***');
