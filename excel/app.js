const input = document.querySelector("input")

input.addEventListener("change", handleFileChange)

function handleFileChange(e) {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            console.log(e.target.result);
            parseCSV(e.target.result)
        }

        reader.readAsText(file)
    }
}


function parseCSV(csv) {
    const dataOfCSV = csv.split("\n")
    const headers = dataOfCSV[0].split(",")

    const thRow = document.createElement("tr")
    headers.forEach((data) => {
        const td = document.createElement("td")
        td.innerText = data
        thRow.appendChild(td)
    });

    document.querySelector("thead").appendChild(thRow)

    dataOfCSV.forEach((data, index) => {
        if (index !== 0) {
            const tbodyDataArr = data.split(",")
            const trForBody = document.createElement("tr")
            let salary = ""
            tbodyDataArr.forEach((userData, index) => {
                if (index == 9 || index == 10) {
                    if (index === 10) {
                        salary = salary + "," + userData;
                    } else {
                        salary = salary + userData
                    }
                }

                if (index != 9) {
                    const td = document.createElement("td")
                    if (index === 10) {
                        td.innerText = salary;
                    } else {
                        td.innerText = userData
                    }
                    trForBody.appendChild(td)
                }
            })

            document.querySelector("tbody").appendChild(trForBody)
        }
    })
}

// E02387,Emily Davis,Sr. Manger,IT,Research & Development,Female,Black,55,4/8/2016,"$141,604 ",15% ,United States,Seattle,10/16/2021
