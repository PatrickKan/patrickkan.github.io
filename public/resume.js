resumeIndex = 0;

resumeContent = [
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

document.querySelector("#resume").addEventListener('click', (e) => {
    reuseTextContainer()

    document.getElementById("tagline-id").innerText = "the resume game"

    document.getElementById("back-button").style.visibility = "visible";
    $("#back-button").animate({opacity: 1}, 500)

    $("#about").animate({opacity: 0}, 500, () => {
        document.getElementById("about").style.visibility = "hidden";
    });
    $("#test").animate({opacity: 0}, 500, () => {
        document.getElementById("test").style.visibility = "hidden";
    });

    const rightButton = `
        <div class="nav-button" id="resume-right-button">
          <p class="nav-button-title">--></p>
        </div>
    `;

    const leftButton = `
        <div class="nav-button" id="resume-left-button">
          <p class="nav-button-title"><--</p>
        </div>
    `;
    
    document.getElementById("button-2").innerHTML = rightButton;
    document.getElementById("button-1").innerHTML = leftButton;

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

    reuseTextContainer()
})

function writeNewResumeText(text) {
    writeNewTextForId('#resume-text-id', text, 30)
}

function reuseTextContainer() {
    const textContainer = `
        <div class="resume-text" id="resume-text-id"></div>
    `

    document.getElementById("text-container-id").innerHTML = textContainer
    writeNewResumeText(resumeContent[resumeIndex])
}