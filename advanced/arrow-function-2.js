//Arguments can only be used in the regular function and not arrow function
//Local arguments are accessible only with regular functions
const add = function () {
    return arguments[0] + arguments[1];
}


console.log(add(11,22,33,44))

const car = {
    color: 'Red',

    // normal function
    // getSummary: function(){
    //     return `the car is red ${this.color}`
    // }

    // this will not work as .this is not accessible using the arrow function
    // getSummary: () => {return `the car is red ${this.color}` }

    //better way of writing the regular function
    getSummary(){
        return `the car is red ${this.color}`
    }
}

console.log(car.getSummary());