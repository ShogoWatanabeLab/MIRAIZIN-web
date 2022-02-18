// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/miraizi-icon.jpg') {
      myImage.setAttribute('src','images/miraizi-icon2.jpg');
    } else {
      myImage.setAttribute('src','images/miraizi-icon.jpg');
    }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'MIRAIZIN is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'MIRAIZIN is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
