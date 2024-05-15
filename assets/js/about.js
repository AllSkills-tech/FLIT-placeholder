let infoShown = false;

window.onload = function() {
  /*if (window.innerWidth < 576) {
    window.addEventListener('click', infoOpen)
  }*/
}

function infoOpen(event) {
  if (infoShown === false) {
    // Locate the corrosponding info to be shown
    const elementId = event.target.id;
    const elementNumber = elementId.split('-')[0];
    const infoId = elementNumber + '-about';
    infoElement = document.getElementById(infoId);
    // Display the corrosponding info
    infoElement.style.display = 'block';
    infoShown = true;
  } else {
    const infoElements = document.getElementsByClassName('about-info');
    for (const info of infoElements){
      info.style.display = 'none';
    }
    infoShown = false;
  }
}