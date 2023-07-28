//! Manipuler les éléments du DOM


let baliseZoneProposition = document.getElementById("zoneProposition")

console.log(baliseZoneProposition)

console.log(baliseZoneProposition.clientWidth)


baliseZoneProposition = document.querySelector("#zoneProposition span")


// Je récupère tous les éléments de type radio : 

let listeInputRadio = document.querySelectorAll(".zoneChoix input")

// console.log("Liste inputRadio : " + listeInputRadio)



// https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript/8205925-recuperez-un-element-d-une-page-web


//! Récupérer des éléments de la page HTML et les modifier

// J'ai ajouté un id à mon Span dans la page index.html afin de pouvoir affiché en front
// le mot demandé. Je le récupère ici, puis je vérifie que ça marche en faisant un console.log

let motAffiche = document.getElementById("motAffiche")
let nouveauMot = document.createElement("p")

console.log("Mot Affiché : " + motAffiche);

// ça marche

let baliseImage = document.getElementById("randomImg")
// baliseImage.setAttribute("alt", "Ceci est la nouvelle valeur de alt pour l'image")


// Je change la photo de ma page HTML grâce à setAttribute - ça marche

// baliseImage.setAttribute("src", "https://fastly.picsum.photos/id/554/300/300.jpg?hmac=kIu3laxJRMZ2F8gry2ncELxiui_sC0s0lPgOVgc56ZA")

//En utilisant le raccourci baliseImage.src : ça marche aussi : 

baliseImage.src = "https://fastly.picsum.photos/id/292/300/300.jpg?hmac=j0Jbm_zVjpT5HJ7nBl7_wZIn2Ttqi34CzI0PyuFYnKw"


//? Ici je m'amuse à ajouter puis supprimer une classe à ma balise image

// console.log(baliseImage);
// la nouvelle valeur de alt pour l'image est passée de "Image aléatoire" (tapé dans le html) à 
// "Ceci est la nouvelle valeur de alt pour l'image" (entré ci-dessus). 

baliseImage.classList.add("nouvelle_classe", "truc")
console.log("Liste des classes de la balise image : " + baliseImage.classList);

baliseImage.classList.remove("truc")
console.log("Liste des classes de la balise image : " + baliseImage.classList);


//! Créer un nouvel élément

// Définition des variables contenant le texte du titre et du paragraphe
let contenuTitre = "Azertype"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"

// Création d'un div avec createElement. Dans cette div, on va créer un titre h1 et un paragraphe p
let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h1")
let nouveauParagraphe = document.createElement("p")

// On ajoute du texte dans le titre et le paragraphe
nouveauTitre.textContent = contenuTitre
nouveauParagraphe.textContent = contenuParagraphe

// On ajoute le titre et le paragraphe dans la div
nouvelleDiv.appendChild(nouveauTitre)
nouvelleDiv.appendChild(nouveauParagraphe)

// On ajoute la div dans le body
// let body = document.querySelector("body")

let maDiv = document.getElementById("images_ajoutees")
maDiv.appendChild(nouvelleDiv)

//! la partie ci-dessus est à revoir : 
// je souhaite rajouter une deuxième photo à la place du titre et du texte proposés par l'exercice



