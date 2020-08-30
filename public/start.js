// $

let taglineOptions = {
    strings: ['Coder. Gamer. Foodie.'],
    typeSpeed: 60,
    showCursor: false,
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
        strings: ['Welcome to Patrick\'s webbie'],
        typeSpeed: 40,
        showCursor: false,
    };
    let typedBoxTitle = new Typed('#orig-title', boxTextOptions);

    setTimeout(() => {
        setHomePageEvents();
    }, 2500);
}
