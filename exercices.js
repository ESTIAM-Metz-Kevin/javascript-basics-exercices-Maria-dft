// Défintion de variable 
const nom_boutique = "L'Arcane Emporium";
let number_potion_soin = 100;
let prix_potion_soin = 10;
let nom_sorcier = "Akana"; // Nom du sorcier

console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔");
// Calcul du prix total d'une commande de potion 🪙
let quantite_potion = parseInt(prompt("Combien de potions de soin souhaitez-vous acheter ?"));
let prix_total = quantite_potion * prix_potion_soin;
console.log(`Prix de ${quantite_potion} potions de soins : ${prix_total} 🪙 mon cher Aventurier. 💸`);

console.log("1. Le nom de la boutique");
console.log("2. Le nom du Sorcier");
console.log("3. Le prix d'une potion de soin");
console.log("4. La quantité d'une potion de soin");

//Affichage conditionnel avec switch

let choix = parseInt(prompt("Fais ton choix entre 1 et 4 :"));

switch (choix) {
    case 1:
        console.log(`Le nom de la boutique est : ${nom_boutique}`);
        break;
    case 2:
        console.log(`Le nom du Sorcier est : ${nom_sorcier}`);
        break;
    case 3:
        console.log(`Le prix d'une potion de soin est : ${prix_potion_soin} pièces d'or`);
        break;
    case 4:
        console.log(`La quantité d'une potion de soin est : ${number_potion_soin}`);
        break;
    default:
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
}
