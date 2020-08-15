// const typed

const actionTyping = new TypeIt("#action-text-id", {
    strings: "choose an action...",
    waitUntilVisible: true,
    lifeLike: true
}).go()

const aboutTyping = new TypeIt("#action-text-id", {
    strings: "learn more about me!",
    waitUntilVisible: true,
    lifeLike: true
})

// document.querySelector("#about").addEventListener('mouseenter', (e) => {
//     // actionTyping.delete(5).go();
//     // actionTyping.reset();
//     // aboutTyping.go();

//     new TypeIt(".action-text", {
//         waitUntilVisible: true,
//         lifeLike: true
//     }).delete(19).type('new-action').go()
//     console.log("mouseenter");
// })

// document.querySelector("#about").addEventListener('mouseleave', (e) => {
//     // actionTyping.freeze();
//     // aboutTyping.reset();
//     // actionTyping.go();
//     console.log("mouseout");
// })