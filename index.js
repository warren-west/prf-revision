function showAlert() {
    alert("You clicked the button!")
}

function addTwoNumbers() {
    const num1 = prompt("Enter num 1:")
    const num2 = prompt("Enter num 2:")

    const sum = parseInt(num1) + Number(num2) // -> NaN

    if (!isNaN(sum)) {
        alert(num1 + " " + num2 + " = " + sum)
    } else {
        alert("Please enter numbers only!")
    }
}

function looping() {
    let count = 0
    while (confirm("Do you want to continue?")) { // true or false
        count++
        console.log(count)
    }
}

// looping and conditional operators
function looping2() {
    const userInput = parseInt(prompt("Enter number between 1 and 10:"))

    // || vs &&
    if (isNaN(userInput) || userInput < 1 || userInput > 10) {
        alert("Wrong input")
        return
    }

    for (let i = 0; i < 10; i++) {
        console.log("before", i)
        if (i == userInput) {
            break
            // continue
        }
        console.log("after", i)
    }
}


function iteratorMeth() {
    let sentence = "I go to the shop to buy bread and to buy rice"
    let arrayOfWords = sentence.split(" ")
    let wordToFind = "bicycle"// "to" // "buy" // "bread"

    console.log(arrayOfWords)

    let resultOfFind = arrayOfWords.find(x => x === wordToFind) // "to"
    let resultOfFindIndex = arrayOfWords.findIndex(x => x === wordToFind) // index

    console.log("find(): ", resultOfFind)
    console.log("findIndex(): ", resultOfFindIndex)
}




function activity1() {
    let userNum = prompt("Enter num:")


    // is "12" true or false
    // is "0" true or false

    // difference between && and ||
    while (userNum < 1 || userNum > 20) {
        userNum = prompt("Try again")
    }
    
    alert("Good job")
    console.log(userNum)
}