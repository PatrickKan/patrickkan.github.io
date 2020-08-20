import {playSnakeGame2, requestID} from './snake_game/game.js';

var resumeIndex = 0;

const resumeContent = [
    `Hey! Welcome to my resume. Press the right and left buttons to scroll through!
    <br>
    <br>
    Or, check out my resume <a href="https://google.com/">here</a>!`, 
    `I'm currently a senior at UIUC! 
    It's otherwise known as the school in the 
    middle of a bunch of cornfields!<br><br>
    As for my work experiences...`,
    `My most recent internship (Summer 2020) was at Facebook as a Software Engineering Intern
    under AI Infra with the Machine Learning Training Platform team!`,
    `I've also interned with Microsoft and State Farm...`
]

let resumeScreen = false;
let playPressed = false;

export function addResumeEvents() {
    document.querySelector("#resume").addEventListener('click', (e) => {
        resumeScreen = true;
        playPressed = false;
        remapButtons();
        reuseTextContainer();

        document.getElementById("tagline-id").innerText = "the resume game"

        // document.getElementById("back-button").style.visibility = "visible";
        // $("#back-button").animate({opacity: 1}, 500)

        $("#button-0").animate({opacity: 0}, 500, () => {
            document.getElementById("button-0").style.visibility = "hidden";
        });
        $("#button-3").animate({opacity: 0}, 500, () => {
            document.getElementById("button-3").style.visibility = "hidden";
        });

        // document.querySelector("#resume-left-button").addEventListener('click', (e) => {
        //     if(resumeIndex > 0) {
        //         resumeIndex--;
        //         writeNewResumeText(resumeContent[resumeIndex])
        //     }
        // })
        
        // document.querySelector("#resume-right-button").addEventListener('click', (e) => {
        //     if(resumeIndex < resumeContent.length-1) {
        //         resumeIndex++;
        //         writeNewResumeText(resumeContent[resumeIndex])
        //     }
        // })
    })
}

addResumeEvents();

function remapButtons() {
    const rightButton = `
        <div class="nav-button" id="play-game-button">
          <p class="nav-button-title">play</p>
        </div>
    `;

    const leftButton = `
        <div class="nav-button" id="resume-home-button">
          <p class="nav-button-title">home</p>
        </div>
    `;
    
    document.getElementById("button-2").innerHTML = rightButton;
    document.getElementById("button-1").innerHTML = leftButton;

    remapHomeButton();
}

function writeNewResumeText(text) {
    writeNewTextForId('#resume-text-id', text, 23)
}

function reuseTextContainer() {
    const textContainerHTML = `
        <div class="resume-text" id="resume-text-id"></div>
        <div id="game-board-container"></div>
    `
    const textContainer = document.getElementById("text-container-id")
    textContainer.innerHTML = textContainerHTML
    textContainer.style.height = "18rem";

    setTimeout(() => {
        if(resumeScreen) {
            // Place game board and animate into box
            document.getElementById("game-board-container").innerHTML = '<div id="game-board"></div>';
            const gameBoard = document.getElementById("game-board");
            gameBoard.style.height = textContainer.clientHeight/2 - 40;
            gameBoard.style.width = textContainer.clientWidth - 40;
            $("#game-board").animate({opacity: 1}, 1000);

            
            // Make play game accessible, animate into frame
            document.getElementById("play-game-button").style.visibility = "visible";
            $("#play-game-button").animate({opacity: 1}, 4000);
        }
    }, 5000);
    
    // const gameBoard = document.getElementById("game-board");
    // gameBoard.style.height = textContainer.clientHeight - 40;
    // gameBoard.style.width = textContainer.clientWidth - 40;

    document.querySelector("#play-game-button").addEventListener('click', () => {
        if(!playPressed) {
            playSnakeGame2();
        }
        playPressed = true;
    })
    writeNewResumeText(resumeContent[resumeIndex])
}

function remapHomeButton() {
    let homeButton = document.getElementById("resume-home-button");

    homeButton.addEventListener('click', () => {
        console.log("request id is " + requestID);
        window.cancelAnimationFrame(requestID);

        document.getElementById("tagline-id").innerText = "Coder. Gamer. Foodie."
        const textContainerHTML = `
            <div class="title" id="orig-title">
            Welcome to Patrick's webbie
            </div>       
            <div class="action-text" id="action-text-id"></div>
        `
        const textContainer = document.getElementById("text-container-id")
        textContainer.innerHTML = textContainerHTML
        textContainer.style.height = "9rem";

        document.getElementById("button-0").style.visibility = "visible";
        $("#button-0").animate({opacity: 1}, 500);
        document.getElementById("button-3").style.visibility = "visible";
        $("#button-3").animate({opacity: 1}, 500);
        console.log("homebutton clicked")

        const resumeHTML = `
            <div class="nav-button" id="resume">
                <p class="nav-button-title">resume</p>
            </div>
        `

        document.getElementById("button-1").innerHTML = resumeHTML;

        const githubHTML = `
            <div class="nav-button" id="github">
                <p class="nav-button-title" id="github-title">github</p>
            </div>
        `

        document.getElementById("button-2").innerHTML = githubHTML;

        setHomePageEvents();
        addResumeEvents();
    })
}