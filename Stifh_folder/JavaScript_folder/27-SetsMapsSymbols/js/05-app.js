const sym = Symbol();
const sym2 = Symbol();
if (sym === sym2) {
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}

const nam = Symbol();
const lastName = Symbol();

const person = {};
person[nam] = 'Juan';
person[lastName] = 'De la torre';
person.typeClient = 'Premium';

console.log(person);