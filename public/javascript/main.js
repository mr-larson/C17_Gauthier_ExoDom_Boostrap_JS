//button Color
// Variables
let btnGrey = document.querySelector(".btn-secondary")
let btnDanger = document.querySelector(".btn-danger")
let btnSuccess = document.querySelector(".btn-success")
let btnPurple = document.querySelector(".btnPurple")

//addEventList
btnGrey.addEventListener ("click", () =>{
    plan.style.background = "#a8a8a8"
})
btnDanger.addEventListener ("click", () =>{
    plan.style.background = "#8a0b0b"
})
btnSuccess.addEventListener ("click", () =>{
    plan.style.background = "#208a0b"
})
btnPurple.addEventListener ("click", () =>{
    plan.style.background = "#620b8a"
})

// Button Border
// Variables
let brdGros = document.querySelector(".brdGros")
let brdDash = document.querySelector(".brdDash")
let brdPetit = document.querySelector(".brdPetit")
let brdVide = document.querySelector(".brdVide")
let brdTop2 = document.querySelector(".brdTop2")
let brdTop6 = document.querySelector(".brdTop6")

//addEventList
brdGros.addEventListener ("click", () =>{
    plan.style.border = "solid 3px black"
})
brdDash.addEventListener ("click", () =>{
    plan.style.border = "dashed 3px black"
})
brdPetit.addEventListener ("click", () =>{
    plan.style.border = "2px solid black"
})
brdVide.addEventListener ("click", () =>{
    plan.style.border = ""
})
brdTop2.addEventListener ("click", () =>{
    plan.style.borderTop = "2px solid red"
})
brdTop6.addEventListener ("click", () =>{
    plan.style.borderTop = "6px solid red"
})

// Input Color & Border
// Variables
let inpColor = document.querySelector(".inpColor")
let inp = document.querySelector(".inp")
let inpTop = document.querySelector(".inpTop")
let inpRight = document.querySelector(".inpRight")
let inpBottom = document.querySelector(".inpBottom")
let inpLeft = document.querySelector(".inpLeft")

//addEventList
inpColor.addEventListener ("click", () =>{
    plan.style.background = inpColor.value
})
inp.addEventListener ("click", () =>{
    plan.style.border = `solid black ${inp.value}px`
})
inpTop.addEventListener ("click", () =>{
    plan.style.borderTop = `solid black ${inpTop.value}px`
})
inpRight.addEventListener ("click", () =>{
    plan.style.borderRight = `solid black ${inpRight.value}px`
})
inpBottom.addEventListener ("click", () =>{
    plan.style.borderBottom = `solid black ${inpBottom.value}px`
})
inpLeft.addEventListener ("click", () =>{
    plan.style.borderLeft = `solid black ${inpLeft.value}px`
})

// Variables
//input Radius
let radiusFull = document.querySelector(".radiusFull")
let leftTop = document.querySelector(".leftTop")
let rightTop = document.querySelector(".rightTop")
let rightBottom = document.querySelector(".rightBottom")
let leftBottom = document.querySelector(".leftBottom")

//addEventList
radiusFull.addEventListener ("click", () =>{
    plan.style.borderRadius = `${radiusFull.value}%`
})
leftTop.addEventListener ("click", () =>{
    plan.style.borderTopLeftRadius = `${leftTop.value}%`
})
rightTop.addEventListener ("click", () =>{
    plan.style.borderTopRightRadius = `${rightTop.value}%`
})
rightBottom.addEventListener ("click", () =>{
    plan.style.borderBottomRightRadius = `${rightBottom.value}%`
})
leftBottom.addEventListener ("click", () =>{
    plan.style.borderBottomLeftRadius = `${leftBottom.value}%`
})

// Variables
// PLan
let plan = document.querySelector(".plan")

