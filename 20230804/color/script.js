const title = document.querySelector('#title')
const button = document.querySelector('#button')



button.addEventListener('click', () => {
    if(title.classList.contains('active')){
        console.log(title.classList.contains('active'))
        title.classList.remove('active')
        title.textContent = '클레스 제거'
    } else{
        console.log(title.classList.contains('active'))
        title.classList.add('active')
        title.innerText = '클레스 추가'
    }
})