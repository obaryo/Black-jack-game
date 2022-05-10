let cards = [] // cards array
let sum = 0

//object for player-el
let player = {
    name: "Obri",
    chips: 169
}

let hasBlackJack = false;
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el")

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1 // 1-13 whole number
    if (randomCard === 1) {
        return 11;
    } else if (randomCard > 10) {
        return 10;
    } else {
        return randomCard
    }
}

function startGame() { // will call renderGame
    isAlive = true
    // Generate two random numbes
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    // cards.push(firstCard,secondCard) // my first solution

    sum = firstCard + secondCard 

    renderGame()
}

function renderGame () {
    sumEl.textContent = "Sum: "+sum
    cardEl.textContent = "Cards: "
    
    // Will render the cards on card-el 
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?🙂"
        // hasBlackJack = false
    } else if (sum === 21) {
        message = "You've got Blackjack! 🥳"
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
    }
    messageEl.textContent = message;
    

}

function newCard () {
    // so that you cant use new card before you start the game
    if (isAlive === true && hasBlackJack === false) {

        let thirdCard = getRandomCard();    
        sum += thirdCard
        // Push the card to the cards array
        cards.push(thirdCard)
        renderGame();
    }    
}












