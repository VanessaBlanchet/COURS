// console.log("Hello World !");

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

// // Je vérifie que je récupère bien le mot entré par l'utilisateur : 
// // console.log(motUtilisateur);

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

const motsApplication = ["Cachalot", "Pétunia", "Serviette"]
i = 0
score = 0

//Je vérifie que je récupère bien le mot : ça marche

// console.log("motApplication : " + motsApplication[i])
console.log("Id initial : " + i);
console.log("Score initial : " + score );

// Je vérifie que je récupère bien} le mot entré par l'utilisateur : ça marche 

motUtilisateur = prompt ("Entrez le mot : " + motsApplication[i])

// console.log("motUtilisateur : " + motUtilisateur)



while (i < 3){

    console.log("Id du mot demandé : " + i)
    console.log("Mot attendu : " + motsApplication[i])
    console.log("Mot tapé : " + motUtilisateur)
    
    if (motUtilisateur === motsApplication[i]){
    console.log("Bravo !")
    score ++
    console.log("Score : " + score)
    i++

    if (i < 3 ){
    motUtilisateur = prompt ("Entrez le mot : " + motsApplication[i])
    } else {
        console.log("C'est fini ! Score final : " + score);
    }

    } else {
        console.log("Faux !")
        console.log("Score : " + score)
        i++
        
        if (i < 3 ){
            motUtilisateur = prompt ("Entrez le mot : " + motsApplication[i])
            } else {
                console.log("C'est fini ! Score final : " + score);
            }
        
        
    }


}


