//! Manipuler les éléments du DOM


let baliseZoneProposition = document.getElementById("zoneProposition")

console.log(baliseZoneProposition)

console.log(baliseZoneProposition.clientWidth)


baliseZoneProposition = document.querySelector("#zoneProposition span")


// Je récupère tous les éléments de type radio : 

let listeInputRadio = document.querySelectorAll(".zoneChoix input")

console.log("Liste inputRadio : " + listeInputRadio)


//! WIP à revoir, ça n'a pas l'air de produire le résultat escompté
// https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript/8205925-recuperez-un-element-d-une-page-web


//! Récupérer des éléments de la page HTML et les modifier

// J'ai ajouté un id à mon Span dans la page index.html afin de pouvoir affiché en front
// le mot demandé. Je le récupère ici, puis je vérifie que ça marche en faisant un console.log

let motAffiche = document.getElementById("motAffiche")
let nouveauMot = document.createElement("p")

console.log("Mot Affiché : " + motAffiche);

// ça marche
