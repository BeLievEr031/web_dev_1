// 🔥🔥🔥🔥 --> denote your assignment

const inp = document.querySelector("#input-data")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const convertBtn = document.querySelector("#convert")
const result = document.querySelector("#result")
const tableCont = document.querySelector(".table-cont")
const swapBtn = document.querySelector("#swap")
const resetBtn = document.querySelector("#reset")
const copyBtn = document.querySelector("#copy")
let tbody = document.querySelector("tbody")

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
    if (number.length === 0) {
        return;
    }
    const fromBase = +option1.value;
    const toBase = +option2.value

    for (let i = 0; i < number.length; i++) {
        // 🔥🔥🔥🔥 A ka ASCCI CODE NIKALO = 49
        // 🔥🔥🔥🔥 SELECTED OPTION KE VALUE MEI SE - 11 fromBase-11 to hamko difference milega
        // 🔥🔥🔥🔥 A ASCII CODE MEI hum upper ka diffrence ko add karenge e.g 49 + 5 = 54 
        // 🔥🔥🔥🔥 HOW TO CONVERT ASCII VALUE INTO STRING

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


    // 🔥🔥🔥🔥Appropriate condition per alag alag construct function ko run karana he
    // 🔥🔥🔥🔥 table ko hide and show karana he on the perfect condition


    if (fromBase > toBase) {
        visualizeTheNumber(number, toBase, visuliseArr)
        constructTable(visuliseArr)
        tableCont.classList.add("show")
    } else {
        tableCont.classList.remove("show")
        visualiseTheSmallToBig(number, toBase, fromBase)
    }

});

function visualizeTheNumber(number, toBase, visuliseArr) {
    //  / % 
    let q = -1;
    while (q !== 0) {

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

    }
}

function constructTable(visuliseArr) {

    if (tbody === null) {
        tbody = document.createElement("tbody")
    } else {
        tbody.remove()
        tbody = document.createElement("tbody")
    }

    for (let i = 0; i < visuliseArr.length; i++) {
        const tr = document.createElement("tr")

        for (const data in visuliseArr[i]) {
            const td = document.createElement("td")
            td.innerText = visuliseArr[i][data]
            tr.appendChild(td)
        }

        tbody.appendChild(tr)
    }

    document.querySelector("table").appendChild(tbody)
}

let div = null;

function visualiseTheSmallToBig(number, toBase, fromBase) {

    if (div === null) {
        div = document.createElement("div")
    } else {
        div.remove()
        div = document.createElement("div")
    }

    let htmlStr = `
                    ( ${number} )
                    <span>
                    <sub>${fromBase}</sub> = 
                    </span>
                    `


    number += "";

    const ansStr = []
    let pow = number.length
    let calc = ``
    for (let i = 0; i < number.length; i++) {
        calc += `
        ( ${number[i]} x  <span>
        ${fromBase}
        <sup>${--pow}</sup> 
        </span>
        )
        ${i === number.length - 1 ? "" : "+"}
        `
    }

    div.innerHTML = htmlStr + calc;
    document.querySelector(".visualise-box").appendChild(div)


}

swapBtn.addEventListener("click", function () {
    const tempValue = option1.value;
    option1.value = option2.value;
    option2.value = tempValue;
})
resetBtn.addEventListener("click", function () {
    inp.value = "";
    option1.value = "2"
    option2.value = "2"
})

copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(result.value).then(() => {
        this.innerText = "Copied"

        setTimeout(() => {
            this.innerText = "Copy"
        }, 800)

    }).catch((err) => {
        console.log(err);
    })
})


