import Sound from "./sounds.js"

// import {
//     buttonPause,
//     buttonPlay,
//     uttonIncrease,
//     buttonDecrease,
//     buttonStop,
//     minutesDisplay,
//     secondsDisplay,
//     buttonIncrease,
//   } from "./elements.js"

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');


const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.decrease');
const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');

let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  

function countDown() {
  timerTimeOut = setTimeout(function() {
  
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if( seconds <= 0 ) {
          seconds = 60
          if (minutes <= 0){
            sound.timeEnd()
            return
          }
      --minutes

        }
  

      updateTimerDisplay(minutes, String(seconds -1))
      countDown()

  },1000)
}

function hold() {
  clearTimeout(timerTimeOut)
}



buttonPlay.addEventListener('click', function() {
    countDown()
 })

 buttonStop.addEventListener('click', function() {
    sound.timeEnd()
    hold()
 })



 

buttonIncrease.addEventListener('click', function() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
})

buttonDecrease.addEventListener('click', function() {
    if(Number(minutesDisplay.textContent) > 5) {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
    }
    else if (Number(minutesDisplay.textContent) <= 5) {
        minutesDisplay.textContent = String("00")
        secondsDisplay.textContent = String("00")
        alert("Tempo zerado")
    }
 })


const sound = Sound()

const cardForest = document.querySelector('.forest');
const cardRain = document.querySelector('.rain');
const cardCoffee = document.querySelector('.coffee');
const cardFireplace = document.querySelector('.fireplace');

const svgForest = document.querySelector('.forest-select');
const svgRain = document.querySelector('.rain-select');
const svgCoffee = document.querySelector('.coffee-select');
const svgFireplace = document.querySelector('.fireplace-select');


cardForest.addEventListener('click', function() {
    cardForest.classList.add('card-selected')
    cardRain.classList.remove('card-selected')
    cardCoffee.classList.remove('card-selected')
    cardFireplace.classList.remove('card-selected')

    svgForest.classList.add('svg-selected')
    svgRain.classList.remove('svg-selected')
    svgCoffee.classList.remove('svg-selected')
    svgFireplace.classList.remove('svg-selected')

    sound.pressButtonForest()
   
  })

cardRain.addEventListener('click', function() {
    cardRain.classList.add('card-selected')
    cardForest.classList.remove('card-selected')
    cardCoffee.classList.remove('card-selected')
    cardFireplace.classList.remove('card-selected')

    svgRain.classList.add('svg-selected')
    svgForest.classList.remove('svg-selected')
    svgCoffee.classList.remove('svg-selected')
    svgFireplace.classList.remove('svg-selected')

    sound.pressButtonRain()
  })

cardCoffee.addEventListener('click', function() {
  
    cardCoffee.classList.add('card-selected')
    cardRain.classList.remove('card-selected')
    cardForest.classList.remove('card-selected')
    cardFireplace.classList.remove('card-selected')

    svgCoffee.classList.add('svg-selected')
    svgForest.classList.remove('svg-selected')
    svgRain.classList.remove('svg-selected')
    svgFireplace.classList.remove('svg-selected')

    sound.pressButtonCoffee()
    
  })

cardFireplace.addEventListener('click', function() {
    cardFireplace.classList.add('card-selected')
    cardCoffee.classList.remove('card-selected')
    cardRain.classList.remove('card-selected')
    cardForest.classList.remove('card-selected')

    svgFireplace.classList.add('svg-selected')
    svgForest.classList.remove('svg-selected')
    svgRain.classList.remove('svg-selected')
    svgCoffee.classList.remove('svg-selected')


    sound.pressButtonFireplace()
  })
