// const example = document.getElementById('parent');
// const b = document.querySelector("b")
// // const range = document.createRange();
// // range.setStart(example, 0);
// // range.setEnd(example, 3);
// // console.log(range);
// // console.log(range.toString());

// document.querySelector("button").addEventListener("click", () => {
//     // let selection = window.getSelection();
//     // // console.log(selection);
//     // let range = selection.getRangeAt(0);
//     // // console.log(range);
//     // let b = document.createElement("b")
//     // range.surroundContents(b)

//     // let sn = range.selectNode(b);
//     // console.log(sn);

//     // var selection = window.getSelection().getRangeAt(0);
//     // console.log(selection);
//     // var selectedText = selection.extractContents();
//     // // console.log(selectedText);

//     // var span = document.createElement("b");
//     // // span.style.backgroundColor = "yellow";
//     // span.appendChild(selectedText);
//     // // span.innerText = "Jai"
//     // selection.insertNode(span);
//     // b.innerText.insertNode(span);

//     var selection = window.getSelection();
//     if (selection.rangeCount > 0) {
//         var range = selection.getRangeAt(0);
//         var selectedNode = range.startContainer;
//         var selectedTag = selectedNode.parentNode.tagName;

//         console.log("Selected Node:", selectedNode);
//         console.log("Selected Tag:", selectedTag);
//     }
// })


// document.addEventListener("selectionchange", () => {
//     const selection = window.getSelection();
//     // console.log(selection.anchorNode);
//     // console.log(selection.rangeCount);
//     // console.log(selection.focusNode );
//     console.log(selection.type);
// })

// let btn = document.querySelector("button")

// btn.addEventListener("click", () => {
//     let selection = window.getSelection();
//     const range = selection.getRangeAt(0)
//     // range.insertNode()
//     // console.log(range.commonAncestorContainer);
//     // console.log(range.endContainer);
//     // console.log(range.startContainer);
//     // console.log(range.collapse());
//     // selection.deleteFromDocument()
// })


// document.addEventListener("selectionchange",()=>{
//     // console.log(45);
//     let selection = window.getSelection();

//     if(selection.rangeCount > 0){
//         let range = selection.getRangeAt(0);
//         let cont = range.commonAncestorContainer

//         console.log(cont);

//         console.log(window.getComputedStyle(cont.parentNode).fontSize);
//     }
// })


let b = document.querySelector("#bold")
let i = document.querySelector("#italic")
let u = document.querySelector("#underline")

b.addEventListener("click", () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0)

    console.log(range.commonAncestorContainer.parentNode);

    const span = document.createElement("span")

    span.style["fontWeight"] = "bold"
    // range.surroundContents(span)

    var selectedText = range.extractContents();
    span.appendChild(selectedText);
    range.insertNode(span);
})
i.addEventListener("click", () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0)
    const span = document.createElement("span")
    span.style["fontStyle"] = "italic"
    // range.surroundContents(span)

    var selectedText = range.extractContents();
    span.appendChild(selectedText);
    range.insertNode(span);


})
u.addEventListener("click", () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0)
    const span = document.createElement("span")
    span.style["color"] = "red"
    // range.surroundContents(span)

    var selectedText = range.extractContents();
    span.appendChild(selectedText);
    range.insertNode(span);

})