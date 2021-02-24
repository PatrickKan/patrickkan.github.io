const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ."];

const timestamps = [];

var elementIds = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", "SPACE"]

var sentenceIndex = 0;
var sentence = [..."KYLETOLENTINO.COM"]

var createLink = false

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

    // createLink = false

    if(character == " ") {
        character = "SPACE"
    }

    const key = document.getElementById(character);
    key.classList.add("selected");    

    // sentenceIndex++

    // console.log(sentenceIndex)

    // if(sentenceIndex >= sentence.length) {
    //     sentenceIndex = 0
    //     // document.getElementById("add-text").innerText = ""
    //     createLink = true
    // } 

    console.log(timestamps)

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

function registerKeyPress(keyPressed) {
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
  
  keyElement.classList.add("hit")
  keyElement.addEventListener('animationend', () => {
    keyElement.classList.remove("hit")
  })
  
  console.log("ENTERING KEY PRESS")

  if (keyPressed === highlightedKey.innerHTML.toUpperCase()) {
    sentenceIndex++
    if(sentenceIndex >= sentence.length) {
      sentenceIndex = 0
      // document.getElementById("add-text").innerText = ""
      createLink = true
    } else {
      createLink = false
    }


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

    if(createLink) {
      document.getElementById("add-text").innerHTML = "<a target='_blank' href='https://" + document.getElementById("add-text").innerHTML + "'>" + document.getElementById("add-text").innerHTML + "</a>"
      console.log("CREATING LINK")
    }
  } 
}

// console.log(elementIds)

for(const elemId of elementIds) {
    // console.log("element id" + elemId)
    document.getElementById(elemId).addEventListener("click", () => {
        registerKeyPress(elemId)
    })
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

  registerKeyPress(keyPressed)
})

targetKeyInSentence();