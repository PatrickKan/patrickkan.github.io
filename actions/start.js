// $

// var keystrokeSound = new Audio('single-type.mp3');

// var interval;



// function playSound () {
//     clearInterval(interval);
//     interval = setInterval(function(){
//             // keystrokeSound.pause();
//             var keystrokeSound = new Audio('single-type-cut.mp3');
//             keystrokeSound.currentTime = 0;
//             keystrokeSound.play();
//     },120);
// }

let taglineOptions = {
    strings: ['Coder. Gamer. Foodie.'],
    typeSpeed: 60,
    showCursor: false,
    // preStringTyped : function(array, self){
    //     playSound();
    // },
    // onStringTyped : function(array, self){
    //     clearInterval(interval);
    // },
    // onComplete: function(array, self){
    //     clearInterval(interval);
    // }
};
let typedTagline = new Typed('#tagline-id', taglineOptions);


setTimeout(() => {
    animateBox();
}, 2250)

function animateBox() {
    let box = document.getElementById("text-container-id")
    box.style.borderColor = "white";
    box.style.width = "28rem";
    box.style.paddingLeft = "20px";
    box.style.paddingRight = "20px";

    // After one second expand height
    setTimeout(() => {
        box.style.height = "9rem";
        box.style.paddingTop = "20px";
        box.style.paddingBottom = "20px";

        setTimeout(() => {
            setBoxText();
        }, 1250);
    }, 1000);
}

function setBoxText() {
    // let boxText = document.getElementById("orig-title");
    console.log("Setting box text")
    let boxTextOptions = {
        strings: ['Welcome to Patrick\'s website'],
        typeSpeed: 20,
        showCursor: false,
        // preStringTyped : function(array, self){
        //     playSound();
        // },
        // onStringTyped : function(array, self){
        //     clearInterval(interval);
        // },
        // onComplete: function(array, self){
        //     clearInterval(interval);
        // }
    };
    let typedBoxTitle = new Typed('#orig-title', boxTextOptions);

    // Choose an action...
    setTimeout(() => {
        setHomePageEvents();
        
        setTimeout(() => {
            makeNavButtonsVisible();
        }, 800);
    }, 1500);
}

function makeNavButtonsVisible() {

    console.log("Making buttons visible")
    let button0str = "button-0"
    let button1str = "button-1"
    let button2str = "button-2"
    let button3str = "button-3"
    let button0 = document.getElementById(button0str);
    let button1 = document.getElementById(button1str);
    let button2 = document.getElementById(button2str);
    let button3 = document.getElementById(button3str);

    makeButtonVisible(button0);
    makeButtonVisible(button1);
    makeButtonVisible(button2);
    makeButtonVisible(button3);
    
    
    let button0Func = () => {
        $("#button-0").animate({opacity: 1}, 750);
    }
    let button1Func = () => {
        $("#button-1").animate({opacity: 1}, 750);
    }
    let button2Func = () => {
        $("#button-2").animate({opacity: 1}, 750);
    }
    let button3Func = () => {
        $("#button-3").animate({opacity: 1}, 750);
    }
    
    let funcs = [button0Func,button1Func,button2Func,button3Func]

    // setTimeout(() => {
    //     $("#button-0").animate({opacity: 1}, 500);
    // }, 500+500)

    for(var i = 0; i < funcs.length; i++) {
        console.log("calling func " + i)
        setTimeout(funcs[i], i*750+500)
    }
}

function makeButtonVisible(button) {
    button.style.opacity = "0";
    button.style.visibility = "visible";
}


