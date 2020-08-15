var options = {
    strings: ['choose an action...'],
    smartBackspace: true, // Default value
    typeSpeed: 50,
}

var typed = new Typed('#action-text-id', options)

var aboutSelected = false;
var resumeSelected = false;
var githubSelected = false;
var testSelected = false;


// Starts with no indexs selected
// var selectedIndex = -1;

// about, resume, github, test
// const selectedButton = [false, false, false, false]

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
        writeNewActionText('resume pop-up')
    }
})

document.querySelector("#github").addEventListener('mouseenter', (e) => {
    if(!githubSelected) {
        aboutSelected = false;
        resumeSelected = false;
        githubSelected = true;
        testSelected = false;
        writeNewActionText('check out my github at https://github.com/PatrickKan/')
    }
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


// document.querySelector("#about").addEventListener('mouseleave', (e) => {
//     // typed.toggle()
//     // typed.start()
//     // typed.stop()
// })

function writeNewActionText(text) {
    writeNewTextForId('#action-text-id', text)
}

function writeNewTextForId(id, text) {
    typed.destroy();

    typed = new Typed(id, {
        strings: [text],
        typeSpeed: 50,
        backSpeed: 30,
    })
}