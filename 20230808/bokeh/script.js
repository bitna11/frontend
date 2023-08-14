const app = document.getElementById('wrapper')

const  randomNumber = (min,max) => {
  return (Math.random() * (max-min + 1) + min)
}
const snow = () => {
  const size = randomNumber(50, 120)
  const snow = document.createElement('span') 

  snow.style.top = `${randomNumber(1,100)}%`
  snow.style.left =`${randomNumber(1,100)}%`
  snow.style.backgroundColor = `hsl(${randomNumber(0,360)}, ${randomNumber(50,60)}%, 50%)`
  snow.style.width = size+'px'
  snow.style.height = size+'px'
  snow.style.filter = `blur(${randomNumber(0,1)}px)`;
  
  bokeh.style.animationDuration = `${randomNumber(10,30)}s`;
  bokeh.style.animationDelay = `${randomNumber(1,10)}s`;
  bokeh.classList.wrapper('snow')
//   bokeh.style.opacity = Math.random(0.5,1);
  app.append(snow)
}

for(let i = 0;i < 70; i++){
    wrapperSnow()  
}