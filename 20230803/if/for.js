// //for (초기값, 조건, 증가)
// for (let i =1;i <= 15;i++)
//     console.log(i)


// for(let x = 1; x <= 9; x++){
//     for(let y=1; y <= 9; y++)
//     console.log(x + ' X ' + y + ' = ' + x * y)
// }



let stat = ''
for(let i = 0; i < 5; i++){
    stat += '*'
    console.log(stat)
}

let stat = ''
for(let i = 0; i < 5; i++){
    if(i === 0 || i > 1){
        star += "*";
        else {
            star += "o";
        }
    }
    console.log(stat)
}