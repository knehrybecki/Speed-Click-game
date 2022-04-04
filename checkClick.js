
import { gameScore } from './script.js'

export let score = 0

export const checkClick = ({target}) => {
    if (target.className === "box__circle red") {
        score++

        gameScore.textContent = "Score: " + score
        
        target.classList.add('green')

        target.style.pointerEvents = "none"
    }
}
