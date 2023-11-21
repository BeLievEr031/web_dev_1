const inp = document.querySelector("#input-data")
const convertBtn = document.querySelector("#convert")
// console.log(typeof inp);
console.log(inp.value);
console.log(convertBtn);



convertBtn.addEventListener("click", function () {
    console.log(this.innerHTML);
})

