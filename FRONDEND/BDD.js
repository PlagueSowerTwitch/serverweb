///let pool = require('../API/Asupprimer/BDD');
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const emailsignup = document.getElementById('emailsignup');
const nomsignup = document.getElementById('nomsignup');
const mdpsignup = document.getElementById('mdpsignup');
const mdplogin = document.getElementById('mdplogin');
const emaillogin = document.getElementById('emaillogin');




registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    document.getElementById('checksignup').addEventListener('click',function(){
        
        if(nomsignup.value.length===0){
            alert("le nom ne doit pas etre vide")
        }
        if(mdpsignup.value.length <=7){
            mdpsignup.value="";
            alert("le mot de passe doit contenir plus de 8 charactères")
        }
        let arobase = false
        let indexarobase = 0 
        for(let i=0;i<emailsignup.value.length;i++){
            if (emailsignup.value[i]==="@"){
                arobase = true;
                indexarobase = i;
                break;
            }
        }

        if (arobase===false){
            emailsignup.value="";
            alert("l'email doit contenir un @");
        };
        let sub="";
        if (indexarobase===0){
            emailsignup.value="";
            alert("l'email n'est pas au bon format");
        }
        else{
            sub=emailsignup.value.substring(indexarobase+1,emailsignup.value.length);
            let aunpoint=false;
            for (let element=0;element<sub.length;element++){
                if (sub[element]==="."){
                    aunpoint=true;
                }
            }
            if (aunpoint===false){
                emailsignup.value="";
                alert("l'email n'est pas au bon format");
            }
        }
        
        if (emailsignup.value !== "" && nomsignup.value !== "" && mdpsignup.value !== ""){
            console.log("in");
            


            fetch(`http://localhost:4000/api/user/${emailsignup.value}`, { 
                method: `GET`, 
                headers: {'Content-Type': 'application/json',}, 
            })
            .then(response => {
                if (!response.ok) {
                }
                return response.json();  
            })
            .then(data => {
                if (data[0]['case'] === 0){
                    fetch("http://localhost:4000/api/user/", { 
                        method: `POST`, 
                        headers: {'Content-Type': 'application/json',}, 
                        body: JSON.stringify({
                        name: `${nomsignup.value}`,
                        email: `${emailsignup.value}`,
                        motdepasse: `${mdpsignup.value}`
                        }) 
                    });  
                } else {
                    alert("votre compte existe déjà, veuillez vous connecter.");
                }
            })
            

        }
    });
});


loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    document.getElementById('checklogin').addEventListener('click',function(){
        console.log("le bouton login a ete utilise")

        fetch("http://localhost:4000/api/authenticator/", { 
            method: `POST`, 
            headers: {'Content-Type': 'application/json',}, 
            body: JSON.stringify({
            email: `${emaillogin.value}`,
            motdepasse: `${mdplogin.value}`
            }) 
        })
        .then(response => {
            if (!response.ok) {
            }
            return response.json();  
        })
        .then(data => {
            console.log(data)
            if (data[0]['case'] === 1){
                window.location = "compte.html"; 
             } else {
                alert("Mauvais mot de passe ou d'email");
             }   
        })

    });
});

