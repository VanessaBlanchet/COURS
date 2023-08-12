

// let motApplication = "Bonjour"


// let motUtilisateur = prompt("Entrez un mot :")
// console.log(motUtilisateur)

// let motTapeOk = true

// if (motTapeOk) {
//     console.log("Bravo, vous avez correctement tapé le mot")
// }   else {
//     console.log("Echec, le mot n'est pas correct")
// }

// ------------------------------------------------------------------
// ------------------------------------------------------------------

// if (motUtilisateur === motApplication){
//     console.log("Bravo !")
// } else {
//     console.log("Vous avez fait une erreur de frappe.")
// }

// ------------------------------------------------------------------
// ------------------------------------------------------------------

// switch (motUtilisateur){
//     case motApplication:
//         console.log("Bravo !")
//         break

//     case "Gredin":
//         console.log("Restez correct !")
//         break

//     case "Mécréant":
//         console.log("Restez correct !")
//         break

//     case "Vilain":
//         console.log("Restez correct !")
//         break

//     default:
//         console.log("Vous avez fait une erreur de frappe");
// }


// ------------------------------------------------------------------
// ------------------------------------------------------------------

//! Condition avec if

// const motsApplication = ["Cachalot", "Pétunia", "Serviette"]
// let score = 0

// let motUtilisateur = prompt ("Entrez le mot : " + motsApplication[0])

// Je vérifie que je récupère bien le mot entré par l'utilisateur : 
// console.log(motUtilisateur);

// if (motUtilisateur === motsApplication[0]){
//     console.log("Bravo !")
//     score += 1
//     console.log("Score : " + score)
// } else {
//     console.log("Faux ! ")
//     console.log("Score : " + score);
// }

//! condition avec Switch

// switch (motUtilisateur){
//     case motsApplication[0]:
//         console.log("Bravo !")
//         score += 1
//         console.log("Score : " + score)
//         break

//         default:
//             console.log("Faux !")
//             console.log("Score :" + score);

// }

//! Condition avec if

// motUtilisateur = prompt ("Entrez le mot : " + motsApplication[1])

// if (motUtilisateur === motsApplication[1]){
//     console.log("Bravo !")
//     score += 1
//     console.log("Score : " + score);
// }  else {
//     console.log("Faux ! ")
//     console.log("Score : " + score);
// }

//! Condition avec Switch

// motUtilisateur = prompt ("Entrez le mot : " + motsApplication[1])

// switch (motUtilisateur){
//     case motsApplication[1]:
//         console.log("Bravo !")
//         score += 1
//         console.log("Score : " + score)
//         break

//         default:
//             console.log("Faux !")
//             console.log("Score :" + score);

// }
//! Condition avec if

// motUtilisateur = prompt ("Entrez le mot : " + motsApplication[2])

// if (motUtilisateur === motsApplication[2]){
//     console.log("Bravo !")
//     score += 1
//     console.log("Score : " + score);
// }  else {
//     console.log("Faux ! ")
//     console.log("Score : " + score);
// }

//! Condition avec Switch

// motUtilisateur = prompt ("Entrez le mot : " + motsApplication[2])

// switch (motUtilisateur){
//     case motsApplication[2]:
//         console.log("Bravo !")
//         score += 1
//         console.log("Score : " + score)
//         break

//         default:
//             console.log("Faux !")
//             console.log("Score :" + score);

// }

//? Ici j'aurais dû utiliser les conditions if, mais ça marche aussi avec Switch et Case
//? même si c'est pas fait pour ça
//? et je ne connaissais pas cette fonction alors ça m'a amusé de l'utiliser

// ------------------------------------------------------------------
// ------------------------------------------------------------------

//! La déclaration de la variable motsApplication ci-dessous a été commentée 
//! et déplacée dans le fichier config.js



function init() {
    i = 0

    // console.log("Id initial : " + i);

    // Je mets un écouteur d'évènement sur le bouton Valider

    let boutonValider = document.getElementById("submitButton")
    let inputEcriture = document.querySelector(".inputEcriture ")    


    // J'affiche la proposition du jeu que l'utilisateur doit recopier : 


    function afficherProposition(proposition) {
        
        let motATaper = document.querySelector(".zoneProposition")
        
        motATaper.innerText = proposition

        console.log("Affichage du mot à taper : " + motATaper.innerText);
    }

    //! Attention ici problème : dans la zone de proposition, après "Entrez le mot : " il affiche n'importe quoi...
    // Problème réglé grâce à Costin. Le navigateur m'affichait C à la place de Cachalot, é à la place de Pétunia etc
    // Costin m'a fait remarqué que j'affichais la 1e lettre du 1er mot, la 2e lettre du 2e mot etc
    // parce que j'ai incrémenté deux fois le tableau motsApplication et que j'avais mis motApplication en paramètre
    // de ma fonction afficherProposition
    // alors que cela n'a rien à voir : on peut mettre ce qu'on veut comme variable en paramètre de la fonction
    // et on définit après, à l'intérieur de la fonction, à quoi cette variable correspond
    // du coup j'ai remplacé motApplication par tableau dans le paramètre de la fonction
    // et remis après, à l'intérieur, la ligne motATaper.innertext = tableau 
    // et le lien est fait avec le tableau des mots à afficher dans le paramètre lorsque j'appelle la fonction 
    // afficherProposition, ci-dessous



    // j'affiche la proposition initiale

    
    afficherProposition(motsApplication[i])

    // J'ajoute mon EventListener au bouton valider : 

    boutonValider.addEventListener("click", function() {

        console.log("inputEcriture.value : " + inputEcriture.value)

        i ++ 

        inputEcriture.value = "" // je vide le champ de texte à chaque fois que "valider" est cliqué

        // Je teste si le mot proposé est undefined, si oui j'affiche "le jeu est fini" sinon, j'affiche le prochain mot

        if (motsApplication[i] === undefined){
            afficherProposition("Le jeu est fini")
            boutonValider.disabled = true
        } else {
            afficherProposition(motsApplication[i])
        }



        console.log("i : " + i);
        
        console.log("prochain motApplication : " + motsApplication[i]);

        

    });
  

    
}


    
    // while (i < 5) {

    //     console.log("Id du mot demandé : " + i)
    //     console.log("Mot attendu : " + motsApplication[i])
    //     console.log("Mot tapé : " + motUtilisateur)

    //     if (motUtilisateur === motsApplication[i]) {
    //         console.log("Bravo !")
    //         score++
    //         console.log("Score : " + score)
    //         i++

            //! Ici je suis obligée de rajouter un if (ligne 186) dans le if (ligne 178) pour ne pas 
            //! que l'appli me demande un mot supplémentaire par rapport à ceux présents dans le tableau 
            //! à cause du i++ juste avant, pour arrêter le jeu une fois que tous les mots ont été proposés

            //     if (i < 5) {
            //         motUtilisateur = prompt("Entrez le mot : " + motsApplication[i])
            //     } else {
            //         console.log("C'est fini ! Score final : " + score);
            //     }

            // } else {
            //     console.log("Faux !")
            //     console.log("Score : " + score)
            //     i++

            //     if (i < 5) {
            //         motUtilisateur = prompt("Entrez le mot : " + motsApplication[i])
            //     } else {
            //         console.log("C'est fini ! Score final : " + score);
            //     }

            // }
//         }
//     }
// }

// }




document.addEventListener("DOMContentLoaded", init)





https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript/8206488-recuperez-la-valeur-d-un-champ-de-formulaire