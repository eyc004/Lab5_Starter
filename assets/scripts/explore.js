// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  

  let voiceOptions = document.getElementById('voice-select');
  let synth = window.speechSynthesis;
  let voices = []
  synth.addEventListener('voiceschanged', () =>{
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceOptions.appendChild(option);
    }
  })

  let voiceType = document.getElementById('voice-select');
  
  let text = document.querySelector('textarea');
  
  let speak_button = document.querySelector("button");

  let emoji = document.querySelector('img')
  
  speak_button.addEventListener('click', (event) => { 
    
    const dialogue = new SpeechSynthesisUtterance(text.value);
    
    for (let i = 0; i < voices.length; i++) {
      if (`${voices[i].name} (${voices[i].lang})` == voiceType.value) {
        dialogue.voice = voices[i];
      }
    }
    synth.speak(dialogue);
    
    function checkIsSpeaking() {
      if (synth.speaking == true) {
        emoji.src = 'assets/images/smiling-open.png'
      } else {
        emoji.src = 'assets/images/smiling.png'
      }
      
    }
    setInterval(checkIsSpeaking, 100);
    
  })
  



  
}