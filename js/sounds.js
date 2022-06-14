export default function() {
  
  const buttonAudioCoffee = new Audio("./sons/Cafeteria.wav")
  const buttonAudioRain = new Audio("./sons/Chuva.wav")
  const buttonAudioForest = new Audio("./sons/Floresta.wav")
  const buttonAudioFireplace = new Audio("./sons/Lareira.wav")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  // const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")


  buttonAudioCoffee.loop = true
  buttonAudioRain.loop = true
  buttonAudioForest.loop = true
  buttonAudioFireplace.loop = true


  function pressButtonCoffee() {
    buttonAudioCoffee.play()
    buttonAudioRain.pause()
    buttonAudioForest.pause()
    buttonAudioFireplace.pause()
  }

  function pressButtonRain() {
    buttonAudioRain.play()
    buttonAudioCoffee.pause()
    buttonAudioForest.pause()
    buttonAudioFireplace.pause()

  }

  function pressButtonForest() {
    buttonAudioForest.play()
    buttonAudioCoffee.pause()
    buttonAudioRain.pause()
    buttonAudioFireplace.pause()
}


  function pressButtonFireplace() {
    buttonAudioFireplace.play()
    buttonAudioCoffee.pause()
    buttonAudioRain.pause()
    buttonAudioForest.pause()
  }
  
  

  function timeEnd() {
    kitchenTimer.play()
    buttonAudioFireplace.pause()
    buttonAudioCoffee.pause()
    buttonAudioRain.pause()
    buttonAudioForest.pause()
  }

  return {
    pressButtonCoffee,
    pressButtonRain,
    pressButtonForest,
    pressButtonFireplace,
    timeEnd,
    // bgAudio
  }

}