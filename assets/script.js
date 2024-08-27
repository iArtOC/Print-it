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

var numero = 0
lookBanner(slides[numero])

//création du bouton gauche du slide
var previousButton=document.createElement("div")
previousButton.classList.add("arrow")
previousButton.classList.add("arrow_left")
//création de l'image du bouton du slide
var previousButtonImg=document.createElement("img")
previousButtonImg.src="./assets/images/arrow_left.png"
previousButton.append(previousButtonImg)
//affichage du bouton dans le DOM
var banner=document.getElementById("banner")
banner.append(previousButton)
//EventListener du button gauche
previousButton.addEventListener('click', function(){
	changeSlide ("previous")
	lookBanner(slides[numero])
})
console.log

//création du bouton droit du slide
var nextButton=document.createElement("div")
nextButton.classList.add("arrow")
nextButton.classList.add("arrow_right")
//création de l'image du bouton du slide
var nextButtonImg=document.createElement("img")
nextButtonImg.src="./assets/images/arrow_right.png"
nextButton.append(nextButtonImg)
//affichage du bouton dans le DOM
var banner=document.getElementById("banner")
banner.append(nextButton)
//EventListener du button droite
nextButton.addEventListener('click', function(){
	changeSlide ("next")
	lookBanner(slides[numero])
})
console.log
//création des points bulles
var dots=document.querySelector(".dots")
for (var slide of slides){
	var dot=document.createElement("div")
	dot.classList.add("dot")
	dots.append(dot)
}

//fonction de changement image
function changeSlide (direction){
	if (direction==="previous"){
		if (numero <=0 ){
			numero = slides.length - 1
		} else {
			numero = numero - 1
		}
	} else {
		if (numero >=slides.length - 1){
			numero = 0
		} else {
			numero = numero + 1
		}
	} console.log (numero)
	console.log(slides[numero])
}

//fonction d'affichage de la banniere
function lookBanner (slide) {
	var bannerImg=document.querySelector(".banner-img")
	bannerImg.src=`./assets/images/slideshow/${slide.image}`
	var bannerTitle=document.querySelector ("#banner p")
	bannerTitle.innerHTML=slide.tagLine
}