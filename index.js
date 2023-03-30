const submittedWord = document.querySelector(".inputs input");
checkButton = document.querySelector(".inputs button");
infoTxt = document.querySelector(".info-txt");
let filterInput;

// Took the variable called reverseInput and set that 
// to the filtered word after it had been split, reversed and rejoined again 

//then I put a conditional saying that if the filtered word was NOT equal to the new reversed input
//then return the inputted word with the phrase isn't a palindrome

checkButton.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${submittedWord.value}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span>'${submittedWord.value}'</span> is a palindrome!`;
});

// this section here was dedicated to setting up the word and filtering it
// so here i took the original word and get rid of the special characters and spaces 


submittedWord.addEventListener("keyup", () => {
    filterInput = submittedWord.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");

    if(filterInput) {
        return checkButton.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkButton.classList.remove("active");
});



