let input = document.querySelector(".input")
let inputArea = document.querySelector(".inputArea")
let body= document.querySelector("body")
let edit = document.querySelector(".edit")
let close = document.querySelector(".close")
let search = document.querySelector("#search")
let sort1 = document.getElementById("az")
let sort2 = document.getElementById("za")
let add = document.querySelector(".add")
let list = document.querySelector(".list")
let sort = document.querySelector(".sort")
let searchArea = document.querySelector(".searchArea")

add.addEventListener("click", () => {
    if (input.value.length >= 0) {
        let listElement = document.createElement("p")
        // let listImg= document.createElement("img")
        // let listClose=document.createElement("div")
        // listClose.innerHTML="x"
        listElement.innerHTML = input.value
        // listImg.src="img/pen.png"
        // listImg.className="edit icons"
        // listClose.className="close"
        listElement.className = "p"
        list.appendChild(listElement)
        // list.appendChild(listImg)
        // list.appendChild(listClose)
        listElement.style.textAlign = "start"
        listElement.style.fontSize = "16px"
        listElement.style.padding = "5px 0px 5px 10px"
        listElement.style.fontWeight = "400"
        // listImg.style.borderRadius="0px"
    }
})



search.addEventListener("click", () => {
    searchArea.style.display = "block"
})

search.addEventListener("dblclick",()=>{
    searchArea.style.display="none"
})

close.addEventListener("click",()=>{
    inputArea.style.display="none"
})

sort1.addEventListener('click', () => {
    sort1.style.display = "none"
    sort2.style.display = "block"
    sort2.src = "img/za1.png"
})
sort2.addEventListener('click', () => {
    sort2.style.display = "none"
    sort1.style.display = "block"
    sort1.src = "img/az1.png"
})
sort1.addEventListener("mouseover", () => {
    sort1.src = "img/az1.png"
})
sort1.addEventListener("mouseout", () => {
    sort1.src = "img/az.png"
})
sort2.addEventListener("mouseover", () => {
    sort2.src = "img/za1.png"
})
sort2.addEventListener("mouseout", () => {
    sort2.src = "img/za.png"
})