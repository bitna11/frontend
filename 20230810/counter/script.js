const dataList = document.querySelector('[data-counter]')
console.log(dataList)

for(let i = 0; i < dataList.length; i++){
const target = dataList[i].daraset.counter;
let index = 0;
const timerText = dataList[i].querySelector('.timer')

setInterval(()=>{
    if(index < target) {
     index++
    console.log(index)
}
}, 1)
}
// querySelector(()=>{
//     if(index < timer) {
//         index++
//         console.log(timer)
//     }
// }, 1)





