const brand = document.querySelector('.brand')
console.log(brand)

const menuItem = document.querySelectorAll('.menu-item')
console.log(menuItem)

for(let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click',() => {
    for(let j = 0; j <menuItem.length; j++){
        menuItem[j].classList.remove('active')
    }
    menuItem[i].classList.add('active')
})
}

