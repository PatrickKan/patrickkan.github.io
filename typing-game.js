const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const timestamps = [];

var sentenceIndex = 0;
var sentence = [..."HELLO WORLD AND POTATOES "]

timestamps.unshift(getTimestamp());

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
  return keys[getRandomNumber(0, keys.length-1)]
}

function targetKeyInSentence() {

    character = sentence[sentenceIndex]

    if(character == " ") {
        character = "SPACE"
    }

    const key = document.getElementById(character);
    key.classList.add("selected");    

    sentenceIndex++

    if(sentenceIndex >= sentence.length) {
        sentenceIndex = 0
        // document.getElementById("add-text").innerText = ""
    } 

    return character
}

function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  key.classList.add("selected");
  let start = Date.now()
}

function getTimestamp() {
  return Math.floor(Date.now() / 1000)
}

document.addEventListener("keydown", event => {
  var keyPressed;

  if (event.key !== undefined) {
    keyPressed = event.key.toUpperCase();

    if(event.code == 'Space') {
        keyPressed = 'SPACE'
    }
    console.log(keyPressed)
    console.log(event.code)
  } else if (event.keyCode !== undefined) {
    code = event.keyCode;
    keyPressed = String.fromCharCode(code);
  }

//   const keyPressed = String.fromCharCode(code);
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
  
  keyElement.classList.add("hit")
  keyElement.addEventListener('animationend', () => {
    keyElement.classList.remove("hit")
  })

  var comparedKey;
  console.log(highlightedKey.innerHTML + "highlighted")
  if(highlightedKey.innerHTML === "Space" && keyPressed === "SPACE") {
      comparedKey = 'SPACE'
  } else {
      comparedKey = highlightedKey.innerHTML
  }

//   var comparedKey = keyPressed === 'SPACE' ? 'SPACE' : highlightedKey.innerHTML
  
  if (keyPressed === highlightedKey.innerHTML.toUpperCase()) {
    timestamps.unshift(getTimestamp());
    const elapsedTime = timestamps[0] - timestamps[1];
    console.log(`Character per minute ${60/elapsedTime}`)
    highlightedKey.classList.remove("selected");
    targetKeyInSentence();

    if(keyPressed === 'SPACE') {
        document.getElementById("add-text").innerHTML += " " 
    } else {
        document.getElementById("add-text").innerHTML += keyPressed
    }
  } 
})

targetKeyInSentence();