import { boxCircle } from './script.js'

export const randomShowRed = () => {
    setInterval(() => {
        const randomShow = boxCircle[Math.floor(Math.random() * boxCircle.length)]

        randomShow.classList.add('red')

        setTimeout(() => {
            randomShow.classList.remove('red')
            randomShow.classList.remove('green')

            randomShow.style.pointerEvents = null
        }, 1000)

    }, 2000)
}
    