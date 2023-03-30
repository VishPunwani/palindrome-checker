const wordSubmitted = document.querySelector('.inputs input');
checkButton = document.querySelector('.inputs button');
let filterInput;

checkButton.addEventListener('click',() => {
    console.log(filterInput);
})

wordSubmitted.addEventListener('keyup', () => {
    let filterInput = wordSubmitted.value.replace(/[^A-Z0-9]/ig, '');
    if (filterInput){
        return checkButton.classList.add('active');
    }    
    checkButton.classList.remove('active');
})