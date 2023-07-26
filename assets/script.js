const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}

]
// Définir une variable pour suivre le diaporama actuel
let currentSlide = 0;

// Fonction pour changer le dot selected en fonction du diaporama actuel
function changeSelectedDot(){
	// Sélectionne tous les dots
	const dots = document.querySelectorAll('.dot')

	// Parcourt chaque dot
	dots.forEach((dot, idx) => {
		// Enlève la classe de dot_selected
		dot.classList.remove('dot_selected')
		// Si l'indice du dot correspond au diaporama actuel, ajoute la classe de dot_selected
		if(idx === currentSlide){
			dot.classList.add('dot_selected')
		}
	});
}

// Fonction pour changer de diaporama
function changeSlide(){
	// Obtient le diaporama actuel de la liste de diaporamas
	const slide = slides[currentSlide]
	// Sélectionne l'image de la bannière et le texte d'accompagnement
	const banner = document.querySelector('.banner-img')
	const tagLine = document.querySelector('#banner p')

	// Met à jour l'image de la bannière et le texte d'accompagnement avec ceux du diaporama actuel
	banner.setAttribute('src', `./assets/images/slideshow/${slide['image']}`)
	tagLine.innerHTML = slide['tagLine']
}

// Sélectionne les flèches de navigation
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

// Ajoute un événement de clic à la flèche gauche
arrow_left.addEventListener('click', function() {
	// Si on est au premier diaporama, va au dernier
    if(currentSlide === 0){
		currentSlide = slides.length - 1
	} else {
		// Sinon, va au diaporama précédent
    	currentSlide -= 1
	}
	// Appelle les fonctions pour changer de diaporama et changer le point sélectionné
	changeSlide()
	changeSelectedDot()
});

// Ajoute un événement de clic à la flèche droite
arrow_right.addEventListener('click', function() {
	// Si on est au dernier diaporama, revient au premier
    if(currentSlide === slides.length - 1){
		currentSlide = 0
	} else {
		// Sinon, passe au diaporama suivant
    	currentSlide += 1
	}

	// Appelle les fonctions pour changer de diaporama et changer le point sélectionné
	changeSlide()
	changeSelectedDot()
});


/// Sélection de l'élément dans lequel que je veux insérer les dots
const dots = document.querySelector('.dots');

// Pour chaque slide, crée un dot
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    
    // Ajout de la classe à chaque dot
    dot.className = 'dot';
    
    // Pour le premier slide, ajout de la classe dot selected
    if (i == 0) {
        dot.classList.add('dot_selected');
    }
    
    // Insére le dot dans le DOM
    dots.appendChild(dot);
}


