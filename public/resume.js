document.querySelector("#resume").addEventListener('click', (e) => {
    writeNewActionText('resume clicked')
    $("#about").animate({opacity: 0}, 500, () => {
        document.getElementById("about").style.visibility = "hidden";
    });
    $("#test").animate({opacity: 0}, 500, () => {
        document.getElementById("test").style.visibility = "hidden";
    });
    // document.getElementById("about").style.visibility = "hidden";
    // document.getElementById("test").style.visibility = "hidden";

    const rightButton = `
        <div class="nav-button">
          <p class="nav-button-title">--></p>
        </div>
    `;

    const leftButton = `
        <div class="nav-button">
          <p class="nav-button-title"><--</p>
        </div>
    `;
    
    document.getElementById("button-2").innerHTML = rightButton;
    document.getElementById("button-1").innerHTML = leftButton;
    
})

document.querySelector("#test").addEventListener('click', (e) => {
    writeNewActionText('test clicked')
})