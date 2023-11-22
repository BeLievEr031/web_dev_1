const inp = document.querySelector("#input-data")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const convertBtn = document.querySelector("#convert")

// console.log(inp, option1, option2, convertBtn);

convertBtn.addEventListener("click", function () {
    // console.log(inp.value);
    console.log(typeof +option1.value);
    // console.log(option2.value);

    // const decimalNum = parseInt("a", "octal") //10
    // const number = decimalNum.toString(16);

    // console.log(number);

});

const obj = {
    name: "dilip",
    value: "45"
}

// console.log(obj.value);