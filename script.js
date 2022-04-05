import { createTimer } from './timer.js'
import { randomShowRed } from './randomShowRed.js'
import { checkClick, score } from './checkClick.js'

const main = document.querySelector('.main')

export const game = Array.from(new Array(5))

const renderGame = () => {
    const mainGame = document.createElement('div')
    mainGame.classList.add('main__game')
    main.appendChild(mainGame)

    const gameDiv = document.createElement('div')
    gameDiv.classList.add('game')
    mainGame.appendChild(gameDiv)
    
    const timer = document.createElement('div')
    timer.classList.add('game__timer')
    timer.textContent = 'Click Start Game And Clicks Every Red Circle ! '
    gameDiv.appendChild(timer)

    const gameBox = document.createElement('div')
    gameBox.classList.add('game__box')
    gameDiv.appendChild(gameBox)

    const box = document.createElement('div')
    box.classList.add('box')
    gameBox.appendChild(box)

    const gameScore = document.createElement('div')
    gameScore.classList.add('game__score')
    gameScore.textContent = 'Score: ' + score
    gameDiv.appendChild(gameScore)

    const startGame = document.createElement('button')
    startGame.classList.add('game__start')
    startGame.textContent = 'Start Game'
    gameDiv.appendChild(startGame)
}

renderGame()

const box = document.querySelector('.box')

const createCircle = () => {
    const boxCircle = document.createElement('div')
    boxCircle.classList.add('box__circle')
    boxCircle.style.pointerEvents = 'none'
    box.appendChild(boxCircle) 
}

game.forEach(() => createCircle() )

const timer = document.querySelector('.game__timer')
const start = document.querySelector('.game__start')

export const boxCircle = document.querySelectorAll('.box__circle')

const startGame = () => {
    start.classList.add('hidden')

    let time = 6

    setTimeout(() => {
        let countDown = setInterval(() => {

            time--

            timer.textContent = time

            if (time === 3) {
                timer.textContent = 'Ready!?'

            }

            else if (time === 0) {
                timer.textContent = 'Go!'
            }

            if (!time) {
                clearInterval(countDown)

                boxCircle.forEach(item => item.style.pointerEvents = null)

                randomShowRed()

                createTimer()
            }
        }, 1000)
    }, 200)
}

start.addEventListener('click', startGame)

export const gameScore = document.querySelector('.game__score')

boxCircle.forEach(circle => circle.addEventListener('click', event => checkClick(event) ))
    