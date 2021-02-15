const btn = document.querySelector("#talk")
const content  = document.querySelector("#content")

const greeting = [
    'Im good you little piece of love', 
    'Doing good homebai',
    'leave me alone'
]

const weather = [
    'Weather is fine',
    'You need a tan'
]

btn.addEventListener("click", () => {recognition.start()})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = () => {
    console.log('Voice is activated');
}

recognition.onspeechend = () => {
    console.log('Voice is disactivated');
}

recognition.onresult = (event) => {
    const current = event.resultIndex
    const transcript = event.results[current][0].transcript
    content.textContent = transcript

    readOutLoud(transcript)
}

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance()
    
    // speech.text = 'I dont know what you said'
    speech.text = 'Non so cosa hai detto'
    
    if(message.includes('How are you')){
        const finalText = greeting[Math.floor(Math.random() * greeting.length)]
        speech.text = finalText
    }
    if(message.includes('weather')){
        const finalText = weather[Math.floor(Math.random() * weather.length)]
        speech.text = finalText
    }
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}
// try{
// }catch(e){

// }