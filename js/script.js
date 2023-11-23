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


const play = document.getElementById("play");
play.addEventListener("click", function(){
    let dadoplayer = ((Math.random() * 5) + 1).toFixed(0);
    console.log(dadoplayer)
    let dado = ((Math.random() * 5) + 1).toFixed(0);
    console.log(dado)
    let playerone = document.getElementById("playerone").value;
    console.log(playerone)
    let playertwo = document.getElementById("playertwo").value;
    console.log(playertwo)
    let results = document.querySelector("h3");
    console.log(results)
    let winner;

    if(dadoplayer > dado){
        winner = `${playerone} ha Vinto!`
    }
    else if (dadoplayer < dado){
        winner = `${playertwo} ha Vinto!`
    }
    else{
        winner = "Pareggio"
    }

    results.innerHTML = winner;
})









