import {playSnakeGame2, requestID} from './snake_game/game.js';

var resumeIndex = 0;

const resumeContent = [
    `Hey! Welcome to my resume. Play the game with arrow keys or press the right and left buttons to scroll through!`,
    // <br>
    // <br>`,
    // Or, check out my resume <a href="https://google.com/">here</a>!`, 
    "I'm currently a senior at UIUC!", 
    `Haha, it's also known as the school in the 
    middle of a bunch of cornfields.`,
    `Now then, as for my work experiences...`,
    `My most recent internship in Summer 2020...`,
    `was at Facebook as a Software Engineering Intern!`,
    "Hmm, try to guess what team I was on :)",
    "No guesses?",
    `Well, I worked under AI Infra with the Machine Learning Training Platform team!`,
    "I got to collaborate between a lot of different infra teams,", 
    "with my project preventing SEVs and impacting a wide variety of other infra teams...",
    "And it was used by multiple teams in production!",
    "I know it'll lessen the pain of SEVs for them...",
    "by just making broken changes less frequent! :)",
    "Hmmmmmmmmmmmmmmmmm...",
    "but what more?",
    `I've also interned with Microsoft as an Explore Intern, which was Software Engineering + PM.`,
    "I thought my time at Microsoft was also super cool...",
    "with the PM side, I got to interact directly with customers who used the product",
    "scope out new feature requests while building out the project",
    "and get direct feedback from users to continuously iterate!",
    "But wait... there's more!",
    "I've also worked as a SWE part-time at State Farm",
    "while attending my corn fields school during Spring 2020! :)",
    "thanks for playing!!!!!!"
]

let resumeCounter = 0;
let resumeScreen = false;
let playPressed = false;
// let resumeAnimating = false;

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
    })
}

addResumeEvents();

// function incrementResumeIndex() {
//     if(resumeIndex < resumeContent.length-1) {
//         resumeIndex++;
//         writeNewResumeText(resumeContent[resumeIndex])
//     }
// }

export function incrementResumeIndexLoop() {
    if(resumeIndex < resumeContent.length-1) {
        resumeIndex++;
    }
    else {
        resumeIndex = 0;
    }
    writeNewResumeText(resumeContent[resumeIndex])
}

function remapButtons() {
    const playButton = `
        <div class="nav-button" id="play-game-button">
          <p class="nav-button-title">play</p>
        </div>
    `;

    const homeButton = `
        <div class="nav-button" id="resume-home-button">
          <p class="nav-button-title">home</p>
        </div>
    `;
    
    document.getElementById("button-2").innerHTML = playButton;
    document.getElementById("button-1").innerHTML = homeButton;

    remapHomeButton();
}

function writeNewResumeText(text) {
    writeNewTextForId('#resume-text-id', text, 23)
}

function reuseTextContainer() {
    const textContainerHTML = `
        <div class="resume-text-container">
            <div class="resume-text" id="resume-text-id"></div>
        </div>
        <div id="game-board-container"></div>
    `
    const textContainer = document.getElementById("text-container-id")
    textContainer.innerHTML = textContainerHTML
    textContainer.style.height = "18rem";

    let currResumeCounter = resumeCounter;
    // resumeAnimating = true;
    setTimeout(() => {
        if(resumeScreen && resumeCounter == currResumeCounter) {
            // resumeAnimating = false;
            // Place game board and animate into box
            document.getElementById("game-board-container").innerHTML = '<div id="game-board"></div>';
            const gameBoard = document.getElementById("game-board");
            gameBoard.style.height = textContainer.clientHeight/2 - 40;
            gameBoard.style.width = textContainer.clientWidth - 40;
            $("#game-board").animate({opacity: 1}, 1000);

            
            // Make play game accessible, animate into frame
            document.getElementById("play-game-button").style.visibility = "visible";
            $("#play-game-button").animate({opacity: 1}, 2000);

            setRightLeftButtons();
        }
    }, 5000);

    document.querySelector("#play-game-button").addEventListener('click', () => {
        if(!playPressed) {
            playSnakeGame2();
        }
        playPressed = true;
    })
    writeNewResumeText(resumeContent[resumeIndex])
}

function setRightLeftButtons() {
    const leftButton = `
        <div class="nav-button" id="resume-left-button">
            <p class="nav-button-title"><--</p>
        </div>
    `;

    const rightButton = `
        <div class="nav-button" id="resume-right-button">
            <p class="nav-button-title">--></p>
        </div>
    `;
    
    let button0 = document.getElementById("button-0");
    let button3 = document.getElementById("button-3");
    button0.innerHTML = leftButton;
    button3.innerHTML = rightButton;

    button0.style.visibility = "visible";
    button3.style.visibility = "visible";

    $("#button-0").animate({opacity: 1}, 4000);
    $("#button-3").animate({opacity: 1}, 4000);

    document.querySelector("#resume-left-button").addEventListener('click', (e) => {
        if(resumeIndex > 0) {
            resumeIndex--;
            writeNewResumeText(resumeContent[resumeIndex])
        }
    })
    
    document.querySelector("#resume-right-button").addEventListener('click', (e) => {
        if(resumeIndex < resumeContent.length-1) {
            resumeIndex++;
            writeNewResumeText(resumeContent[resumeIndex])
        }
    })
}

function remapHomeButton() {
    let homeButton = document.getElementById("resume-home-button");

    homeButton.addEventListener('click', () => {
        resumeIndex = 0;

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

        // document.getElementById("button-0").style.visibility = "visible";
        // $("#button-0").animate({opacity: 1}, 500);
        // document.getElementById("button-3").style.visibility = "visible";
        // $("#button-3").animate({opacity: 1}, 500);

        const aboutButton = `
        <div class="nav-button" id="about">
            <p class="nav-button-title">about</p>
        </div>
        `

        const testButton = `
        <div class="nav-button" id="test">
          <p class="nav-button-title">test</p>
        </div>
        `

        document.getElementById("button-0").innerHTML = aboutButton;
        document.getElementById("button-3").innerHTML = testButton;

        let button0 = document.getElementById("button-0");
        let button3 = document.getElementById("button-3");

        button0.style.visibility = "visible";
        button3.style.visibility = "visible";

        $("#button-0").animate({opacity: 1}, 2000);
        $("#button-3").animate({opacity: 1}, 2000);

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