const inp = document.querySelector("#input-data")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const convertBtn = document.querySelector("#convert")
const result = document.querySelector("#result")

// console.log(inp, option1, option2, convertBtn);





convertBtn.addEventListener("click", function () {
    // const visuliseArr = [
    //     {
    //         division: "18/2",
    //         quotient: "9",
    //         remainder: "0",
    //         pos: "0"
    //     },
    //     {
    //         division: "18/2",
    //         quotient: "9",
    //         remainder: "0",
    //         pos: "0"
    //     }
    // ]
    const visuliseArr = [
    ]

    // console.log(inp.value);
    // console.log(typeof +option1.value);
    // console.log(option2.value);
    // const decimalNum = parseInt("a",) //10
    // const number = decimalNum.toString(16);

    // console.log(number);
    // result.value = "latish"

    let number = inp.value;
    const fromBase = +option1.value;
    const toBase = +option2.value

    for (let i = 0; i < number.length; i++) {
        // A ka ASCCI CODE NIKALO = 49
        // SELECTED OPTION KE VALUE MEI SE - 11 fromBase-11 to hamko difference milega
        // A ASCII CODE MEI hum upper ka diffrence ko add karenge e.g 49 + 5 = 54 
        // HOW TO CONVERT ASCII VALUE INTO STRING

        inp.style.backgroundColor = "white";

        if (fromBase >= 10) {

            const asciiOfA = "A".charCodeAt(0) // ASCII CODE FOR A
            const difference = fromBase - 11;
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
    result.value = decimalNum.toString(toBase).toUpperCase();


    visualizeTheNumber(number, toBase, visuliseArr)

    console.log(visuliseArr);
});



function visualizeTheNumber(number, toBase, visuliseArr) {
    //  / % 
    let q = Math.floor(+number / toBase)
    while (q !== 0) {
        console.log(45);
        const vobj = {
            division: "",
            quotient: "",
            remainder: "",
            pos: "",
        }

        q = Math.floor(+number / toBase);
        const r = +number % toBase;
        const d = visuliseArr.length

        vobj.division = `${number}/${toBase}`
        vobj.quotient = q
        vobj.remainder = r
        vobj.pos = d

        visuliseArr.push(vobj)
        number = q

        console.log(number);
    }
}

// console.log(obj.value);