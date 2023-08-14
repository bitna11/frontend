// window.addEventListener('mousemove', (event) => {
//     console.log('마우스의 X좌표:' + e.clientX)
//     console.log('마우스의 Y좌표:' + e.clientY)
// })

// dot.style.left = event.clientX - (dot.clientWidth / 2) + 'px'
// dot.style.top = event.clientY - (dot.clientHeight / 2) + 'px'
// console.log('마우스의 X좌표:' + event.clientX)
// console.log('마우스의 Y좌표:' + event.clientY)

const dot = document.querySelector('.dot')
window.addEventListener('mousemove', (event) => {
requestAnimationFrame( () => mouseMove(event))
})

conts mouseMove = (event) => {
    dot.style.left = evernt.clientX - (dot.clientWidth / 2) + 'px'
    dot.style.top = event.clientY - (dot.clientHeight / 2) + 'px'
}



