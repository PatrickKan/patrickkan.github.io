var options = {
    strings: ['choose an action...'],
    smartBackspace: true, // Default value
    typeSpeed: 50,
}
var typed = ""

var aboutSelected = false;
var resumeSelected = false;
var githubSelected = false;
var testSelected = false;

function setHomePageEvents() {
    typed = new Typed('#action-text-id', options)
    aboutSelected = false;
    resumeSelected = false;
    githubSelected = false;
    testSelected = false;

    document.querySelector("#about").addEventListener('mouseenter', (e) => {
        if(!aboutSelected) {
            aboutSelected = true;
            resumeSelected = false;
            githubSelected = false;
            testSelected = false;
            writeNewActionText('learn more about me!')
        }
    })

    document.querySelector("#resume").addEventListener('mouseenter', (e) => {
        if(!resumeSelected) {
            aboutSelected = false;
            resumeSelected = true;
            githubSelected = false;
            testSelected = false;
            writeNewActionText('click to see some cool experiences!')
        }
    })

    document.querySelector("#github").addEventListener('mouseenter', (e) => {
        if(!githubSelected) {
            aboutSelected = false;
            resumeSelected = false;
            githubSelected = true;
            testSelected = false;
            writeNewActionText('check out my github <a class="action-text-color" href="https://github.com/PatrickKan/" target="_blank">here</a>!')
        }
    })

    document.querySelector("#github").addEventListener('click', (e) => {
        window.open("https://github.com/PatrickKan/")
    })

    document.querySelector("#test").addEventListener('mouseenter', (e) => {
        if(!testSelected) {
            aboutSelected = false;
            resumeSelected = false;
            githubSelected = false;
            testSelected = true;
            writeNewActionText('test selected')
        }
    })

    // document.querySelector("#resume").addEventListener('click', (e) => {
    //     $("#button-0").animate({opacity: 0}, 500, () => {
    //         document.getElementById("button-0").style.visibility = "hidden";
    //     });
    //     $("#button-3").animate({opacity: 0}, 500, () => {
    //         document.getElementById("button-3").style.visibility = "hidden";
    //     });

    //     document.getElementById("github").innerHTML = "<p class='nav-button-title'>--></p>";
    //     document.getElementById("resume").innerHTML = "<p class='nav-button-title'><--</p>";
    // })

    document.querySelector("#test").addEventListener('click', (e) => {
        writeNewActionText('test clicked')
    })
 }

//  setHomePageEvents();

function writeNewActionText(text) {
    writeNewTextForId('#action-text-id', text)
}

function writeNewTextForId(id, text, typeSpeed = 50, backSpeed = 30) {
    typed.destroy();

    typed = new Typed(id, {
        strings: [text],
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        autoInsertCss: true,
    })
}

function resetToHome() {
    // document.getElementById("button-0").style.visibility = "visible";
    // $("#button-0").animate({opacity: 0}, 500);
    // document.getElementById("button-3").style.visibility = "visible";
    // $("#button-3").animate({opacity: 0}, 500);
}