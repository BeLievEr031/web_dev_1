function createCounter(n){
    let temp = n - 1;

    function counter(){
        temp = temp + 1;
        return temp;
    }

    return counter;
}

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());