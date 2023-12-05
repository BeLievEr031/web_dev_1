function parent(){
    let p = 10;
    function child(){
        console.log(p);
    }
    return child;
}


let x = parent();
x();
console.log(x);