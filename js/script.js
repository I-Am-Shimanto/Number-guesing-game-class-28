// =========== dom part
let player = document.querySelector(".player")
let playerTwoChances = document.querySelector(".playerTwoChances")
let playerThreeChances = document.querySelector(".playerThreeChances")
let error = document.querySelector(".error")
let playerOneInput = document.querySelector(".playerOneInput")
let playerTwoInput = document.querySelector(".playerTwoInput")
let playerThreeInput = document.querySelector(".playerThreeInput")
let playerOneBtn = document.querySelector(".playerOneBtn")
let playerTwoBtn = document.querySelector(".playerTwoBtn")
let playerThreeBtn = document.querySelector(".playerThreeBtn")
let player1Win = document.querySelector(".player1Win")
let player2Win = document.querySelector(".player2Win")
let player3Win = document.querySelector(".player3Win")
let result = document.querySelector(".result")
let reset = document.querySelector(".reset")


// =========== function part start

// =========== player one 

playerOneBtn.addEventListener("click", () => {
    if (playerOneInput.value == "") {
        return error.innerHTML = "Please input a Number"
    }
    if (playerOneInput.value > 11 || playerOneInput.value < 1) {
        return error.innerHTML = "Please enter value between 1 to 10"
    }
    if (!(playerOneInput.value - 0)) {
        return error.innerHTML = "Please enter a valid number"
    }
    player.innerHTML = "Player Two"
    error.innerHTML = ""
    playerOneInput.style = "display:none;"
    playerTwoInput.style = "display:block;"
    playerOneBtn.style = "display: none;"
    playerTwoBtn.style = "display: block;"
})

// ============== player two

let chances2 = 5;

playerTwoBtn.addEventListener("click", () => {
    --chances2;
    if (playerTwoInput.value == "") {
        return error.innerHTML = "Please input a Number"
    }
    if (playerTwoInput.value > 11 || playerTwoInput.value < 1) {
        return error.innerHTML = "Please enter value between 1 to 10"
    }
    if (!(playerTwoInput.value - 0)) {
        return error.innerHTML = "Please enter a valid number"
    }
    if (chances2 > 0) {
        playerTwoChances.innerHTML = `Your chances left ${chances2}!`

        if (playerOneInput.value == playerTwoInput.value) {
            // player.innerHTML = "Player Two Win"
            playerTwoChances.innerHTML = ""
            playerTwoInput.style = "display : none;"
            playerTwoBtn.style = "display : none;"
            player.innerHTML = "Player Three"
            playerThreeBtn.style = "display : block;"
            playerThreeInput.style = "display : block;"
        }
    } 
    else {
        // player.innerHTML = "Player One Win"
        playerTwoChances.style = "display:none;"
        playerTwoInput.style = "display : none;"
        playerTwoBtn.style = "display : none;"
        player.innerHTML = "Player Three"
        playerThreeBtn.style = "display : block;"
        playerThreeInput.style = "display : block;"
    }
})

// ============ player three
let chances3 = 5;

playerThreeBtn.addEventListener("click", () => {
    --chances3;
    if (playerThreeInput.value == "") {
        return error.innerHTML = "Please input a Number"
    }
    if (playerThreeInput.value > 11 || playerThreeInput.value < 1) {
        return error.innerHTML = "Please enter value between 1 to 10"
    }
    if (!(playerThreeInput.value - 0)) {
        return error.innerHTML = "Please enter a valid number"
    }
    if (chances3 > 0) {
        playerThreeChances.innerHTML = `Your chances left ${chances3}!`
        
        if (playerOneInput.value == playerThreeInput.value) {
            playerTwoChances.style = "display :none;"
            playerThreeChances.style = "display :none;"
            playerThreeInput.style = "display : none;"
            playerThreeBtn.style = "display :none; "
            player.style = "display: none;"
            result.style = "display : block ;"
            
            // =============
        }
    
    }
    else {
         playerTwoChances.style = "display :none;"
            playerThreeChances.style = "display :none;"
            playerThreeInput.style = "display : none;"
            playerThreeBtn.style = "display :none; "
            player.style = "display: none;"
            result.style = "display : block ;"
            
        
        }
})

// ============== result part start

result.addEventListener("click", () => {
    if (playerOneInput.value == playerTwoInput.value && playerTwoInput.value == playerThreeInput.value) {
        result.style = "display : none ;"
        reset.style = "display : block ;"
        player2Win.innerHTML = "Player Two Win"
        return player3Win.innerHTML = "Player Three Win"
    }
    if (playerOneInput.value == playerTwoInput.value) {
        result.style = "display : none ;"
        reset.style = "display : block ;"
        return player2Win.innerHTML = "Player Two Win"
    }
    if (playerOneInput.value == playerThreeInput.value) {
        result.style = "display : none ;"
        reset.style = "display : block ;"
        return player3Win.innerHTML = "Player Three Win"
    }
    else {
        result.style = "display : none ;"
        reset.style = "display : block ;"
        return player1Win.innerHTML = "Player One Win"
    }
})

reset.addEventListener("click", () => {
    location.reload()
})