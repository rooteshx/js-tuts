//arrow function is explicitly used for returning values directly. 

const squareArrow = (num) => num * num;

const squareFunction = function () {

}

console.log(squareArrow(5));
console.log(squareFunction);

const people = [{
    name: 'Andrew', 
    age: 27
}, {
    name: 'Vikram', 
    age: 31
}, {
    name: 'Alices', 
    age: 22
}]

//filter the above array to filter people < 30 years old
const below30 = people.filter((people) => people.age <30)

console.log(below30);

//Using the array above, create a function to find the name of the person whose age is 22 y/o
const person = people.find((people) => people.age === 22)
console.log(person.name);

