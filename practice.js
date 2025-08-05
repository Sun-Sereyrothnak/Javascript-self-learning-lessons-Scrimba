// ctrl+k+c
// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// let myAge = 20
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint  = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// function increment () {
//   console.log("The button was clicked")
// }

// function myLogger() {
//   console.log(42)
// }

// myLogger()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function logLabTime() {
//   //let totalTime =  lap1 + lap2 + lap3
//   //console.log(totalTime);
//   console.log(lap1 + lap2 + lap3)
// }
// logLabTime();

// let lapsCompleted = 0

// function totalLaps() {
//   lapsCompleted = lapsCompleted + 1
// }
// totalLaps ()
// totalLaps ()
// totalLaps ()

// console.log(lapsCompleted)


// let username = "Nak"
// let notification = "You have three new notification"

// console.log(username + "! " + notification)

// let name = "Nak"
// let greeting = "Sursdey! My name is "
// let myGreeting = greeting + name

// console.log(myGreeting)

//=====================================================================
// Variables practise

// let firstname = "Sun "
// let lastname = "Sereyrothnak"

// let fullname = firstname + lastname
// console.log(fullname)

//=========================================
//if/else


// let age = 21
// if (age < 21) {
//   console.log("You can not enter the club!")
// }else {
//   console.log("Welcome!")
// }

// let age = 101
// if (age < 100){
//   console.log("Not elegible")
// }else if (age === 100) {
//   console.log("Here is your birthday card from the KING!")
// }else {
//   console.log("Not elegible, you have already gotten one")
// }


//============================================
//for loop

// for ( let count = 10;  count < 21;  count += 1 )  {
    
//   console.log(count)

// }

// for (let i = 10; i < 101; i +=10) {
//   console.log(i)
// }

// let messages = [
//   "Hey, how's it going?",        
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "Same here!",
//   "Great to hear",
//   "Nak"
// ]

// // DRY - Don't repeat yourself
// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])
// // console.log(messages[3])

// for (let i = 0; i < messages.length; i += 1) {
//   console.log(messages[i])
// }

// let cards = [7, 3, 9]

// // Create a for loop that logs out all the cards in the array
// // Use cards.length to specify how long the loop should run

// for (i = 0; i < cards.length; i += 1) {
//   console.log(cards[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Nak"] 
// let greetingEl = document.getElementById("greeting-el")

// // Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " " 
// }


//===========================================
//Return value

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//       return player1Time
//     }else if(player2Time > player1Time) {
//       return player2Time
//     }else {
//       return player1Time
//   }
// }
// // let fastestRace = getFastestRaceTime()
// // console.log(fastestRace)

// function getTotalRaceTime () {
//   return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()
// console.log(totalTime)


//==========================================
//Math.random()

// let randomNumber = Math.random() * 6

// console.log(randomNumber)

// let randomNumber = Math.floor( Math.random() * 6 )

// console.log(randomNumber)

// function rollDice () {
//   let randomNumber = Math.floor(Math.random() * 6) +  1
//   return randomNumber
// }
// console.log(rollDice())


//====================================
//Logical Oparator

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function
// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution....")
// }

// let likesDocumentaries = true
// let likesStartups = true
// if (likesDocumentaries === true || likesStartups === false) {
//   recommendMovie()
// }
// function recommendMovie() {
//   console.log("Hey, check out this new film we think you will like!")
// }


//===================================
//Object

// let castle = {
//   isSuperHost: true,
//   name: "Live like a King in my Castle",
//   rate: 4.95,
//   price: 190,
//   info: ["4 guests", "2 bedrooms", "2 beds", "2 baths"]
// }

// console.log(castle.name, castle.info)


//=============================================
//Practice obj and function 

// let person = {
//   name: "Nak",
//   age: 20,
//   country: "Cambodia"
// }

// function logData(){
//   return person.name + " is " + person.age + " year old" + " and live in " + person.country

// }
//   console.log(logData())

//   function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()


// Practice if else

// let age = 17

// if (age < 6) {
//   console.log("free")
// }else if(age < 18 ) {
//   console.log("Child discount")
//  } else if(age < 27 ) {
//   console.log("Student discount")
//  } else if(age < 67  ) {
//   console.log("Full price")
//  } else {
//   console.log("Senior citizen discount")
//  } 


// Practice loop and array

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
// console.log("Top 5 largest countries in the world: ")
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- "+ largeCountries[i])
// }  

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)


//======================================
//Practice logical operators

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//   console.log("😱")
// } 


//======================================
//Rockpaperscissors game
// let hands = ["rock", "paper", "scissor"]
// function getHands () {
//   let randomIndex = Math.floor( Math.random() * 3)
//   return hands[randomIndex]
// }
// console.log(getHands())

// let box = document.getElementById("box")

// box.addEventListener("click" , function () {
//   console.log("I want to open the box")
// })
 
// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>buy!</button>"

// function buy() {
//   container.innerHTML += "<p>Ty for buying!<\p>"
// }

// template strings/literals

// const recipient = "James"
// const sender = "Nak"

// // Refactor the email string to use template strings
// const email = `
// Hey ${recipient}!
//  How is it going? 
//  Cheers ${sender}`

// console.log(email)



// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name, emoji) {
//   welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
// }

// greetUser("Howdy", "James", "🔥")




// function add(num1, num2) {
//   return num1 + num2
// }
// console.log( add(3,4)    ) 
// console.log( add(9, 102) ) 




// //.                parameters
// function greetUser(greeting, name) { 
//   welcomeEl.textContent = `${greeting}, ${name} 👋`
// }

// //.        arguments
// let hi = "Howdy"
// greetUser(hi, "James")


// function add(num1, num2) {
//   return num1 + num2
// }

// add(3, 4)




// function getfirst(arr) {
//   return arr[0]
// }

// let firstCard = getfirst([10,20,30])

// console.log(firstCard)



// SETTING THE STAGE
// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"

// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes



// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// // Create a function that takes a single parameter, an array,
// // and logs all the items of the array to the console.
// // Call the function while passing in myCourses as an argument

// function courses (arr) {
//     for (let i= 0; i < arr.length; i++ ){
//         console.log(arr[i])
//     }
// }

// courses(myCourses)




// let scoreBtn = document.getElementById("jane-score-btn")
// let data = [
//     {
//         player: "Jane",
//         score: 52
//     }, 
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// scoreBtn.addEventListener("click", function(){
//     console.log(`Jane's score: ${data[0].score}`)
// })

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)




// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {
//     let baseString = `The ${arr.length} ${desc} are `
//     const lastIndex = arr.length - 1
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             baseString += arr[i]
//         } else {
//             baseString += arr[i] + ", "   
//         }
//     }
//     return baseString
// }

// const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
// console.log(sentence)




// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

// const imgs = [
//     "hip1.jpg",
//     "hip2.webp",
//     "hip3.webp"
// ]
// const container = document.getElementById("container")

// function renderItem() {
//     let imgsDOM = ""
//     for(let i = 0; i < imgs.length; i++){
//         imgsDOM += `<img alt="Villain" class= "team-img" src="${imgs[i]}">`
//     }
//     container.innerHTML = imgsDOM
// }
// renderItem()



// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// const totalPrice = "420.69235632455"
// const btn = document.getElementById("buy-btn")
// btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`



let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}

// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values
let scrimbaUsersEmails = Object.values(scrimbaUsers)

// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys
let scrimbaUsersIDs = Object.keys(scrimbaUsers)

// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values
let scrimbaUsersEntries = Object.entries(scrimbaUsers)

console.log(scrimbaUsersEntries)