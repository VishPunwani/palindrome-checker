const wordSubmitted = document.querySelector('.inputs input');

wordSubmitted.addEventListener('keyup', () => {
    let filterInput = wordSubmitted.value.replace(/[^A-Z0-9]/ig, '');

    console.log(wordSubmitted.value)
})