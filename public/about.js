document.querySelector("#about").addEventListener('click', (e) => {
    writeNewActionText('text-clicked');
    $textButton = $('#text-container-id');
    $textButton.removeClass('enlarged')
    $textButton.addClass('flat');
    
    // Run function after 3s
    setTimeout(() => {
        $textButton.removeClass('flat');
        $textButton.addClass('enlarged');
    }, 3000)
})