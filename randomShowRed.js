import { boxCircle } from "./script.js"

const getRandomNumberBetween = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomShowRed = () => {
    setInterval(() => {
        const randomShow = boxCircle[Math.floor(Math.random() * boxCircle.length)]

        randomShow.classList.add('red')

        setTimeout(() => {
            randomShow.classList.remove('red')
            randomShow.classList.remove('green')

            randomShow.style.pointerEvents = null
        }, 1000);
    }, getRandomNumberBetween(1000, 5000))
}
    