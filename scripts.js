const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const userResult = document.querySelector(".user-result img")
const computerResult = document.querySelector(".computer-result img")

const computerImg = ["assets/pedra.png", "assets/papel.png", "assets/tesoura.png"]

/*
(R) Rock - Pedra
(P) Paper - Papel
(S) Scissors - Tesoura

Pedra - Ganha de Tesoura, perde para papel
Papel - Ganha de Pedra, perde para Tesoura
Tesoura - Ganha de Papel, perde para Pedra

*/

const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você",
}


function handOptionClick(event){
    const clickedImage = event.currentTarget  
    const clickedIndex = Array.from(optionImages).indexOf(clickedImage)                      // currentTarget serve para pegar as info de quem foi clicado.//
    

    container.classList.add("start")
    resultText.innerHTML = "..."

    userResult.src = computerResult.src = "assets/pedra.png"

    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerImg[clickedIndex]

        const randomNumber = Math.floor(Math.random() * computerImg.length)
        computerResult.src = computerImg[randomNumber]

        const userValue = [ "R", "P", "S" ][clickedIndex]
        const computerValue = [ "R", "P", "S" ][randomNumber]
        const userComputerResult = userValue + computerValue 
        const finalResult = winner[userComputerResult]

        console.log(finalResult)

       

        resultText.innerHTML = userValue === computerValue ? "Empate" : finalResult + " Ganhou"
    }, 2000);
}


optionImages.forEach(img => {
    img.addEventListener("click", handOptionClick)
})