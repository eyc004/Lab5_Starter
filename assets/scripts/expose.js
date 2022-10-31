// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let loudness = document.querySelector('audio');
  let horn_type = document.getElementById('horn-select');
  horn_type.addEventListener('change', (event) => {
    if (horn_type.value == 'air-horn') {
      document.querySelector("img").src = 'assets/images/air-horn.svg'
      loudness.src = 'assets/audio/air-horn.mp3';
    }
    if (horn_type.value == 'car-horn') {
      document.querySelector("img").src = 'assets/images/car-horn.svg'
      loudness.src = 'assets/audio/car-horn.mp3';
    }
    if (horn_type.value == 'party-horn') {
      document.querySelector("img").src = 'assets/images/party-horn.svg'
      loudness.src = 'assets/audio/party-horn.mp3';
    }
  });

  
  let volume_level = document.getElementById('volume');
  let volume_image = document.getElementById('volume-controls');
  volume_level.addEventListener('change', (event) => {
    if (volume_level.value == 0) {
      volume_image.querySelector('img').src = 'assets/icons/volume-level-0.svg';
      loudness.volume = volume_level.value/100;
    } else if (volume_level.value < 33) {
      volume_image.querySelector('img').src = 'assets/icons/volume-level-1.svg';
      loudness.volume = volume_level.value/100;
    } else if (volume_level.value < 67) {
      volume_image.querySelector('img').src = 'assets/icons/volume-level-2.svg';
      loudness.volume = volume_level.value/100;
    } else {
      volume_image.querySelector('img').src = 'assets/icons/volume-level-3.svg'
      loudness.volume = volume_level.value/100;
    }
  })
  let horn_button = document.querySelector("button");
  
  horn_button.addEventListener('click', (event) => { 
    if (horn_type.value == 'party-horn') {
      const conffeti = new JSConfetti();
      conffeti.addConfetti();
    }
    loudness.play();
  });
  
  
}