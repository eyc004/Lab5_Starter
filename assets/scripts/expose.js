// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let horn_type = document.getElementById('horn-select');
  horn_type.addEventListener('change', (event) => {
    if (horn_type.value == 'air-horn') {
      document.querySelector("img").src = 'assets/images/air-horn.svg'
    }
    if (horn_type.value == 'car-horn') {
      document.querySelector("img").src = 'assets/images/car-horn.svg'
    }
    if (horn_type.value == 'party-horn') {
      document.querySelector("img").src = 'assets/images/party-horn.svg'
    }
  });
  
}