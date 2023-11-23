// Creo 3 email fittizie di controllo
let email = ["prova@gmail.com", "franco@gmail.com", "salvatore@gmail.com"]
console.log(email)






const button = document.getElementById("bt");

button.addEventListener("click", function(){
    // Chiedo email all'utente
    let emailutente = document.getElementById("mail").value;
    console.log(emailutente)
    const text = document.querySelector("h2")
    let check = false;
    for(let i=0; i<email.length; i++){
        if(emailutente == email[i]){
            check = true
        }
    }
    if(check){
        text.innerHTML = "Email Valida"
    }
    else{
        text.innerHTML = "Email non Valida"
    }
})

// GIOCHINO DADI




let players = [];
let risultati = []
let resultone = document.getElementById("resultone");
let resultwo = document.getElementById("resultwo");
let winner = document.getElementById("winner");
const play = document.getElementById("play");
play.addEventListener("click", function(){
    let first_player = document.getElementById("playerone").value;
    let first_two = document.getElementById("playertwo").value;
    players.push(first_player,first_two);
    for(let i=0; i<players.length; i++){
        let dado = (Math.random() * 6) + 1
        risultati.push(dado)
        console.log(risultati)
        console.log(players)
        resultone.innerHTML = risultati[1]
        resultwo.innerHTML = risultati[2]
    }
    if(resultone>resultwo){
        winner.innerHTML = "Giocatore 1 vince"
    }
    else if(resultone = resultwo){
        winner.innerHTML = "Pareggio"
    }
    else{
        winner.innerHTML = "Giocatore 2 vince"
    }
})









