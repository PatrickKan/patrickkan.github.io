document.querySelector("#about").addEventListener('mouseenter', (e) => {
    // actionTyping.delete(5).go();
    // actionTyping.reset();
    // aboutTyping.go();

    new TypeIt(".action-text", {
        waitUntilVisible: true,
        lifeLike: true
    }).delete(19).type('new-action').go()
    console.log("mouseenter");
})

document.querySelector("#about").addEventListener('mouseleave', (e) => {
    // actionTyping.freeze();
    // aboutTyping.reset();
    // actionTyping.go();
    console.log("mouseout");
})