// Creo 3 email fittizie di controllo
let email = ["prova@gmail.com", "franco@gmail.com", "salvatore@gmail.com"]
console.log(email)






const button = document.getElementById("btn");

button.addEventListener("click", function(){
    // Chiedo email all'utente
    let emailutente = document.getElementById("mail").value;
    console.log(emailutente)
    const text = document.querySelector("h2")
    let entrare = false;
    for(let i=0; i<email.length; i++){
        if(emailutente == email[i]){
            entrare = true
        }
    }
    if(entrare){
        text.innerHTML = "Email Valida"
    }
    else{
        text.innerHTML = "Email non Valida"
    }
})









