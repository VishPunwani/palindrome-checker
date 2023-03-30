const wordSubmitted = document.querySelector('.inputs input');
infoTxt = document.querySelector(".info-txt");
checkButton = document.querySelector('.inputs button');
let filterInput;





checkButton.addEventListener("click", () => {
    let reverseInput =
        (filterInput === '') ? '' : reverseString(filterInput.substr(1)) + filterInput.charAt(0);

    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});





wordSubmitted.addEventListener('keyup', () => {
    let filterInput = wordSubmitted.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput){
        return checkButton.classList.add('active');
    }    
    infoTxt.style.display = "none";
    checkButton.classList.remove('active');
})
