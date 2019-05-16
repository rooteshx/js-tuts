const myAge = 7;
let message = myAge >= 18 ? 'you can vote' : 'you cannot vote!'
 
// if (myAge >= 18){
//     message = 'you can vote'
// }else{
//     message = 'you cannot vote'
// }

//conditional operator
//message = myAge >= 18 ? 'you can vote' : 'you cannot vote!'

console.log(message);


//--------console log
const Age = 27
const showPage = () => {
    console.log ('Showing the page')
}

const showErrorPage = () =>{
    console.log ('Showing the error page')
}

Age >= 21? showPage() : showErrorPage();


//--------return 

const mAge = 7
const showPage1 = () => {
    return 'Showing the page'
}

const showErrorPage1 = () =>{
    return 'Showing the error page'
}

const msg = mAge >= 21? showPage1() : showErrorPage1()
console.log(msg)

//---------Excercise
const team = ['Tyler' , 'Porter', 'Alice' , 'Averia', 'James']

//1. Print "Team size: 3" if less than or equal to 4
//2. Print "Too many people on your team" otherwise

const msgTeam = team.length < 5 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(msgTeam)
