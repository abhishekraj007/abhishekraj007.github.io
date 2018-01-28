(function () {


  var options = {
    textColour: '#fff',
    // textHeight: 20,
    depth: 0.99,
    outlineThickness: 0.5,
    outlineColour: '#fe0853',
    maxSpeed: 0.06,
    freezeActive: true,
    shuffleTags: true,
    shape: 'sphere',
    zoom: 1,
    noSelect: true,
    textFont: null,
    pinchZoom: true,
    freezeDecel: true,
    fadeIn: 3000,
    initial: [0.3, -0.1]
  };

  window.onload = function () {
    try {
      TagCanvas.Start('skillCanvas', '', options);
      // console.log("Start skill animation");
    } catch (e) {
      // something went wrong, hide the canvas container
      // console.log("Hide canvas")
      document.getElementById('skillCanvasContainer').style.display = 'none';
    }
  };

  // Modal
  var petModal = document.querySelector('#petModal');

  // Get the button that opens the modal
  var openModal = document.querySelector(".side-link.pet");

  var closeModal = document.querySelector(".modal__close");

  // When the user clicks on the button, open the modal 
  openModal.onclick = function () {
    petModal.classList.add('active')
  }

  // When the user clicks on <span> (x), close the modal
  closeModal.onclick = function () {
    petModal.classList.remove('active')
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == petModal) {
      petModal.classList.remove('active');
    }
  }

})();
