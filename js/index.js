// Defining our Settings variable
// This variable will hold the settings container
let allFeatures = document.querySelector(".AllContactsContainer");
let AllNames = document.querySelectorAll(".contactName");
// let headre = document.querySelector(".contactName")
let manner = document.querySelector(".ale");
let phoneOthers = document.querySelector(".phoneMobile")
let AllContent = document.body;
var appBody = document.querySelector(".mainContainer");
const PhoneSettings = document.getElementById("case");
// PhoneSettings.addEventListener("click", function () {
 

//     if (AllContent.style.background = "#010101") {
//         AllContent.style.background = "#f1f1f1"
//         manner.style.color = "#010101"
//         phoneOthers.style.color = "#010101";
        
//     }

// });

// Calling the Icons Container
let recentsContainer = document.querySelector(".icon1");
let contactsContainer = document.querySelector(".icon2")
let simContainer = document.querySelector(".icon3")

// ----------- Showing the Container that is selected (Now it is for Contacts)


contactsContainer.addEventListener("click", function (){
    if (recentsContainer.style.color = "rgb(124, 126, 236)") {
        recentsContainer.style.color = "rgb(182, 180, 180)"
        contactsContainer.style.color = "rgb(124, 126, 236)"
        simContainer.style.color = "rgb(182, 180, 180)"
}
})

recentsContainer.addEventListener("click", function (){
    if (simContainer.style.color = "rgb(124, 126, 236)") {
        simContainer.style.color = "rgb(182, 180, 180)"
        recentsContainer.style.color = "rgb(124, 126, 236)"
        contactsContainer.style.color = "rgb(182, 180, 180)"
    }
})
// -----For the Sim Container
simContainer.addEventListener("click", function (){
    if (contactsContainer.style.color = "rgb(124, 126, 236)") {
        contactsContainer.style.color = "rgb(182, 180, 180)"
        simContainer.style.color = "rgb(124, 126, 236)"
    }
})

// This Icon will be responsible for hiding all the Numbers Container Section 

let ShowNumbers = document.getElementById("hideandDisplay");
let allNumbersContainer = document.getElementById("NumbersDial");
ShowNumbers.addEventListener("click", function showNumbersContainer() {
    if (allNumbersContainer.style.contentVisibility = "hidden") {
        allNumbersContainer.style.contentVisibility = "visible"
        ShowNumbers.style.display = "none"
    }
})

// To open the Numbers Container On click
let openNumbers = document.getElementById("showNumbers");
openNumbers.addEventListener("click", function openDatas() {
    if (allNumbersContainer.style.contentVisibility = "vible") {
        allNumbersContainer.style.contentVisibility = "hidden"
                ShowNumbers.style.display = "block"

    }
})

// This code is going to be adding the values pressed in the phone and display them on this container
function DisplayNum(display) {
    let dataDisplay = document.querySelector(".displayNumbers");
    let output = dataDisplay.innerHTML;
    output += display;
    dataDisplay.innerHTML += display
    console.log(output)
}

// Function to pass a message of thr Number being called
let callIcon = document.getElementById("Sim1");
// for (let i = 0; i < callIcon; i++) {
//     document.querySelectorAll(".Sim1")[i].addEventListener("click", function () {
        
//     })
    
// }


callIcon.addEventListener("click", function () {
    let output;
    let dataDisplay = document.querySelector(".displayNumbers")
    output = dataDisplay.innerHTML
    if (output == "") {
        alert("Please type a number to call")
    } else {
        alert(` Sim 1 Outgoing Call \n Calling ${output}`)
        alert(`Call Duration: \n 0.00 seconds`)
    console.log(callIcon)
    }
    
})

// For Sim2 Call Dial
let caller2 = document.getElementById("Sim2")
caller2.addEventListener("click", function () {
    let output;
    let dataDisplay = document.querySelector(".displayNumbers")
    output = dataDisplay.innerHTML
    if (output == "") {
        alert("Please type a number to call")
    } else {
        alert(` Sim 2 Outgoing Call \n Calling ${output}`)
        alert(`Call Duration: \n 0.00 seconds`)
    console.log(output)
    }
    
})
