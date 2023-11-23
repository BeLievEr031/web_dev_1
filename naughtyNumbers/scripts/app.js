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

    for (let i = 0; i < number.length; i++) {
        // A ka ASCCI CODE NIKALO = 49
        // SELECTED OPTION KE VALUE MEI SE - 11 fromBase-11
        // A ASCII CODE MEI +PLUS 49 + 5 = 54
        // HOW TO CONVERT ASCII VALUE INTO STRING

        if (fromBase === 10) {
            break;
        }

        if (fromBase >= 10) {

            const asciiOfA = "A".charCodeAt(0) // ASCII CODE FOR A
            const difference = fromBase - 11;
            // 16 - 11 === 5
            const newASCIICode = asciiOfA + difference;
            const newBaseStr = String.fromCharCode(newASCIICode)

            if (number.toUpperCase().charCodeAt(i) >= newBaseStr.charCodeAt(0)) {
                inp.style.backgroundColor = "red";
                return;
            }

        }

        if (fromBase < 10 && number.charCodeAt(i) >= option1.value.charCodeAt(0)) {
            inp.style.backgroundColor = "red";
            return;
        }




    }

    const decimalNum = parseInt(number, fromBase)
    result.value = decimalNum.toString(toBase);
});

// console.log(obj.value);