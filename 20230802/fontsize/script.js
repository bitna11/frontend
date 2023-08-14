const title = document.getElementById('title')
const incButton = document.getElementById('inc')
const decButton = document.getElementById('dec')
console.log(title,incButton,decButton)

let size = 32;
title.style.transform = 'rotate (' + size + 'deg' +')'

incButton.addEventListener('click',() => {
    size = size + 5
    title.style.fontSize = size+'px'
})

decButton.addEventListener('click',() => {
    size = size - 5
    title.style.fontSize = size+'px'
})