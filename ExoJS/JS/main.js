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

const motsApplication = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let motUtilisateur = prompt ("Entrez le mot : " + motsApplication[0])

// Je vérifie que je récupère bien le mot entré par l'utilisateur : 
// console.log(motUtilisateur);

if (motUtilisateur === motsApplication[0]){
    console.log("Bravo !")
    score += 1
    console.log("Score : " + score)
} else {
    console.log("Faux ! ")
    console.log("Score : " + score);
}


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

motUtilisateur = prompt ("Entrez le mot : " + motsApplication[1])

if (motUtilisateur === motsApplication[1]){
    console.log("Bravo !")
    score += 1
    console.log("Score : " + score);
}  else {
    console.log("Faux ! ")
    console.log("Score : " + score);
}


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

motUtilisateur = prompt ("Entrez le mot : " + motsApplication[2])

if (motUtilisateur === motsApplication[2]){
    console.log("Bravo !")
    score += 1
    console.log("Score : " + score);
}  else {
    console.log("Faux ! ")
    console.log("Score : " + score);
}

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


