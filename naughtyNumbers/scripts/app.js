const inp = document.querySelector("#input-data")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const convertBtn = document.querySelector("#convert")
const result = document.querySelector("#result")

// console.log(inp, option1, option2, convertBtn);

convertBtn.addEventListener("click", function () {
    // console.log(inp.value);
    // console.log(typeof +option1.value);
    // console.log(option2.value);
    // const decimalNum = parseInt("a",) //10
    // const number = decimalNum.toString(16);

    // console.log(number);
    // result.value = "latish"

    const number = inp.value;
    const fromBase = +option1.value;
    const toBase = +option2.value

    const decimalNum = parseInt(number, fromBase)
    result.value = decimalNum.toString(toBase);

});

// console.log(obj.value);