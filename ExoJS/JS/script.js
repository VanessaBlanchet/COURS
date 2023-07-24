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