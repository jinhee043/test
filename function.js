// Function
// - fundamental building block in the program 
// - subprogram can be used multiple times 

// 1. Function declaration 
// function name(param1, param2) {body...return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createdCard, createCardAndPoint
// function is object in JS

function log(message){
    console.log(message);
}

log('hello');
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference  
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i <args.length; i++) {
        console.log(args[i]);
    }
   for (const arg of args) {
    console.log(arg);
   }
}
printAll('dream', 'coding', 'ellie');



// 5. local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);

    function printAnother() {//children variable
        console.log(message);
        let childMessage = 'hello1';
        console.log(childMessage); //Why doesn't show?
    }
}
printMessage();
console.log(globalMessage);


// 6. Return a value
function sum(a,b) {
    return a+b;
}
const result = sum(1,2);
console.log(`sum:${sum(1,2)}`);

//7. Early return, early exit.

//1) bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic..
    }
}

//2) good
function upgradeUser(user) {
    if(user.point<=10){
        return;
    }
    //long upgrade logic..
}

// 1. Function expression 
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it. 

const print = function () { //anonymous function
    console.log('print'); 
};
print();

const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
} 

// anonymous function
const printYes = function () {
    console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions: call another function in a function
const printNo = function print() {
    console.log('No!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


//Arrow function
//Always anonymous

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;

const simpleMultiply = (a,b) => {
 //do something more
    return a +b;
};


// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();



