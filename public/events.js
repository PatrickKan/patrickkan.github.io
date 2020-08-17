function resetTitleBox() {
    window.location.reload();
    // document.getElementById("button-0").style.visibility = "visible";
    // document.getElementById("button-1").style.visibility = "visible";
    // document.getElementById("button-2").style.visibility = "visible";
    // document.getElementById("button-3").style.visibility = "visible";
    // originalHTML = `
    // <div class="tagline"> Coder. Gamer. Foodie. </div>
    // <div class="main-page-container">
    //   <div class="text-container" id="text-container-id">
    //     <div class="title" id="orig-title">
    //       Welcome to Patrick's webbie
    //     </div>       
    //     <div class="action-text" id="action-text-id"></div>
    //   </div>
    // </div>
    // <div class="nav-button-container">
    //   <div class="nav-button-wrapper" id="button-0">
    //     <div class="nav-button" id="about">
    //       <p class="nav-button-title">about</p>
    //     </div>
    //   </div>
    //   <div class="nav-button-wrapper" id="button-1">
    //     <div class="nav-button" id="resume">
    //       <p class="nav-button-title">resume</p>
    //     </div>
    //   </div>
    //   <div class="nav-button-wrapper" id="button-2">
    //     <div class="nav-button" id="github">
    //       <p class="nav-button-title" id="github-title">github</p>
    //     </div>
    //   </div>
    //   <div class="nav-button-wrapper" id="button-3">
    //     <div class="nav-button" id="test">
    //       <p class="nav-button-title">test</p>
    //     </div>
    //   </div>
    // </div>
    // `;

    // document.getElementById("body-wrapper").innerHTML = originalHTML;
}

document.getElementById("back-button").addEventListener('click', () => {
    resetTitleBox();
    console.log('back clicked');
});