const li = document.querySelectorAll('.li')
for(let i = 0; i < li.length; i++){
    li[i].addEventListener('click', () => {
        for(let j = 0; j < li.length; j++){
            li[j].classList.remove('active')
        }
        li[i].classList.add('active')
    })
}