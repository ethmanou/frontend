function creerCarte(valeur, couleur) {
    return {
        valeur: valeur,
        couleur: couleur
    };
}

// Exemple de création d'un paquet de cartes
function creerPaquet() {
    const couleurs = ['Coeur', 'Carreau', 'Trèfle', 'Pique'];
    const valeurs = ['7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As'];
    const paquet = [];

    for (const couleur of couleurs) {
        for (const valeur of valeurs) {
            paquet.push(creerCarte(valeur, couleur));
        }
    }

    return paquet;
}

// Exemple de mélange du paquet de cartes
function melangerPaquet(paquet) {
    for (let i = paquet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [paquet[i], paquet[j]] = [paquet[j], paquet[i]];
    }
}

// Exemple de distribution des cartes aux joueurs
function distribuerCartes(paquet, joueurs) {
    for (let i = 0; i < paquet.length; i++) {
        const joueur = i % joueurs.length;
        joueurs[joueur].main.push(paquet[i]);
    }
}

// Exemple d'affichage de la main d'un joueur
function afficherMain(joueur) {
    console.log(`Main du joueur ${joueur}:`);
    for (const carte of joueurs[joueur].main) {
        afficherCarte(carte);
    }
}

// Exemple d'affichage d'une carte en tant qu'image
function afficherCarte(carte) {
    const carteImg = document.createElement('img');
    carteImg.src = `chemin_vers_images/${carte.valeur}_de_${carte.couleur}.png`;
    carteImg.alt = `${carte.valeur} de ${carte.couleur}`;
    carteImg.classList.add('carte');
    document.getElementById('jeu').appendChild(carteImg);
}

// Exemple de déroulement du jeu
const paquet = creerPaquet();
melangerPaquet(paquet);

const joueurs = [
    { nom: 'Joueur 1', main: [] },
    { nom: 'Joueur 2', main: [] },
    { nom: 'Joueur 3', main: [] },
    { nom: 'Joueur 4', main: [] }
];

distribuerCartes(paquet, joueurs);

for (let i = 0; i < joueurs.length; i++) {
    afficherMain(i);
}




console.log("Welcome to Programiz!");