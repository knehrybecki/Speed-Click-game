import { score } from './checkClick.js'

export const createTimer = () => {
    let time = 60
    
    let countDown = setInterval(() => {
        time--
        
        if (!time) {
            clearInterval(countDown)

            alert('The End Game! '+' Your Score is : ' + score)

            window.location.reload()
        }

       const result =  time.toString().padStart(2, '0')

       const timer = document.querySelector('.game__timer')
    
        timer.textContent = '00:' + result
      
    }, 1000)
}
    