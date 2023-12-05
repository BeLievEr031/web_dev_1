// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld(){
    function f1(){
        return "Hello World"
    }

    return f1;
}

const x = createHelloWorld();
const word = x();

console.log(word);