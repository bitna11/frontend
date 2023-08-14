const menu = [참이슬, 진로제로슈가, 별빛청하, 세로, 복분자]

const button = document.getElementById('button')
const result = document.getElementById('result')
button.addEventListener('click', () => {
    let result = Math.floor(Math.random() * menu.langth)
    result.textContent = menu[randpm]
})

