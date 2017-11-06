var nameVar = 'Manav';
var nameVar = 'Abinav';
console.log('nameVar:', nameVar);

let nameLet = 'Jyothi';
nameLet = 'Sridhar';
console.log('nameLet:', nameLet);

const nameConst = 'Poopman';
console.log('nameConst:', nameConst);

// Block scoping

const fullName = 'Manav Bokinala';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);