const nom_boutique = "L'Arcane Emporium";
let number_potion_soin = 100;
let prix_potion_soin = 10;
let nom_sorcier = "Akana"; // Nom du sorcier

cconsole.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔");
// Calcul du prix total d'une commande de potion 🪙
let quantite_potion = parseInt(prompt("Combien de potions de soin souhaitez-vous acheter ?"));
let prix_total = quantite_potion * prix_potion_soin;
console.log(`Prix de ${quantite_potion} potions de soins : ${prix_total} 🪙 mon cher Aventurier. 💸`);

// Bourse de l'Aventurier 💰
let bourse_aventurier = 100; // Initialisation de l'argent de l'aventurier

if (quantite_potion > number_potion_soin) {
    console.log("Désolé, il n'y a pas assez de potions en stock !");
} else if (prix_total > bourse_aventurier) {
    console.log("Désolé, vous n'avez pas assez d'argent pour acheter ces potions !");
} else {
    number_potion_soin -= quantite_potion; // Soustraire du stock
    bourse_aventurier -= prix_total; // Soustraire du montant de la bourse
    console.log(`Achat réussi ! Il vous reste ${bourse_aventurier} pièces d'or. Il reste ${number_potion_soin} potions en stock.`);
}

// Liste des potions
let potions = ["Potion de soin", "Potion de mana", "Potion de force"];
console.log(potions); // Afficher le tableau des potions

// Affichage des potions
console.log(`La première potion est : ${potions[0]}`);
console.log(`La dernière potion est : ${potions[potions.length - 1]}`);

for (let i = 0; i < potions.length; i++) {
    console.log(`Nous avons de la ${potions[i]} !`);
}

// Ajout d'une nouvelle potion
potions.push("Potion de vitesse"); 
console.log("Liste des potions mise à jour après ajout :");
potions.pop(); 
console.log("Liste des potions mise à jour après suppression :");
console.log(potions); 

// Rangeons les informations de la potion de soin dans un objet 
let potionDeSoin = {
    nom: "Potion de soin",
    prix: prix_potion_soin,
    stock: number_potion_soin
};
console.log(potionDeSoin); 

// Affichons les informations de la potion
console.log(`Nom de la potion : ${potionDeSoin.nom}`); 
console.log(`Prix de la potion : ${potionDeSoin["prix"]} pièces d'or`); 

// Transforme le tableau de noms de potions en tableau d'objets de potions
const inventaire = potions.map(potion => ({
    nom: potion,
    prix: prix_potion_soin,
    stock: number_potion_soin
}));

// Affiche l'inventaire
console.log("C'est l'heure de faire l'inventaire...");
for (let i = 0; i < inventaire.length; i++) {
    console.log(`Nom: ${inventaire[i].nom}`);
    console.log(`Prix: ${inventaire[i].prix}`);
    console.log(`Stock: ${inventaire[i].stock}`);
}

// Affichage dynamique des propriétés de la potion
for (const potion of inventaire) {
    for (const key of Object.keys(potion)) {
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${potion[key]}`);
    }
}

console.log("1. Le nom de la boutique");
console.log("2. Le nom du Sorcier");
console.log("3. Le prix d'une potion de soin");
console.log("4. La quantité d'une potion de soin");

// Affichage conditionnel avec switch
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
// Dernier programme vider la bourse 
// Lien GitHub : https://github.com/ESTIAM-Metz-Kevin/javascript-basics-exercices-Maria-dft