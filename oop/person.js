const person = function () {

}

const Person1 = function (data) {
    this.data = data
}

const me = person();
const me1 = new Person1('aaaaa');
console.log(me)
console.log(me1.data)