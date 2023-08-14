const dot = document.querySelector('.dot')
window.addEventListener('mousemove', (event) => {    
    requestAnimationFrame(() => mouseMove(event))
})
const mouseMove = (event) => {
    dot.style.left = event.clientX - (dot.clientWidth / 2) + 'px'
    dot.style.top = event.clientY - (dot.clientHeight / 2)+ 'px'
}

window.addEventListener('click', () => {
    const bubble = document.createElement('span')
    bubble.classList.add('bubble')
    dot.append(bubble)
    setTimeout(() => {
        bubble.remove()
    },1000)
})