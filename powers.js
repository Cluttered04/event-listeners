// flightHandlerFunction = () => { 
//     document.querySelector("#flight").classList.remove("disabled");
//     document.querySelector("#flight").classList.add("enabled");
// }

// document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

// mindReadingFunction = () => {
//     document.querySelector("#mindreading").classList.remove("disabled");
//     document.querySelector("#mindreading").classList.add("enabled");
// }

// document.querySelector("#activate-mindreading").addEventListener("click", mindReadingFunction)

// xrayFunction = () => {
//     document.querySelector("#xray").classList.remove("disabled");
//     document.querySelector("#xray").classList.add("enabled");
// }

// document.querySelector("#activate-xray").addEventListener("click", xrayFunction);

// function activateAll() {
//     flightHandlerFunction();
//     mindReadingFunction();
//     xrayFunction();
// }

// document.querySelector("#activate-all").addEventListener("click", activateAll);

// The learning objective of this challenge to write a function handler to be used for multiple events, and uses information in the event argument to perform common logic.

// You may notice that your code to enable individual powers (not all at once) is very similar. To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-") in your function)

const basicActivateFunction = function() {
        let splitClass = event.target.id.split("-")[1];
        document.querySelector(`#${splitClass}`).classList.remove("disabled");
        document.querySelector(`#${splitClass}`).classList.add("enabled");
}


document.querySelectorAll("button");
let buttons = document.querySelectorAll("button");
for(let i =0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", basicActivateFunction);
}



// function activateAll() {
//     flightHandlerFunction();
//     mindReadingFunction();
//     xrayFunction();
// }

// document.querySelector("#activate-all").addEventListener("click", activateAll);


function deactivateAll() {
    let matches = document.querySelectorAll("section");
    for(let i = 0; i < matches.length; i++) {
        matches[i].classList.remove("enabled");
        matches[i].classList.add("disabled")
    }
}

document.querySelector("#deactivate-all").addEventListener("click", deactivateAll);

function activateAll() {
    let matches = document.querySelectorAll("section");
    for(let i = 0; i < matches.length; i++) {
        matches[i].classList.remove("disabled");
        matches[i].classList.add("enabled")
    }
}

document.querySelector("#activate-all").addEventListener("click", activateAll);


// document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

// mindReadingFunction = () => {
//     document.querySelector("#mindreading").classList.remove("disabled");
//     document.querySelector("#mindreading").classList.add("enabled");
// }
// let split = event.matches.id.split("#xray");
// console.log(split);