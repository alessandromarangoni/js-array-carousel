var img1 = document.createElement("img");
img1.src = "./img/01.webp"
img1.classList.add("slide")


var img2 = document.createElement("img");
img2.src = "./img/02.webp"
img2.classList.add("slide", "hidden")


var img3 = document.createElement("img");
img3.src = "./img/03.webp"
img3.classList.add("slide", "hidden")

var img4 = document.createElement("img");
img4.src = "./img/04.webp"
img4.classList.add("slide", "hidden")


var img5 = document.createElement("img");
img5.src = "./img/05.webp"
img5.classList.add("slide", "hidden")



let slideContainer = document.getElementById("slider")
let btn = document.getElementById("bottone")
let btnback = document.getElementById("back")
let currentslide = 0;
const immagini = [img2, img3, img4, img5, img1]
let problema = document.getElementById("imgStart")

btn.addEventListener("click", function(){
    problema.classList.add("hidden")
// document.getElementById("slider").appendChild(img2);

    for (let c = 0; c < immagini.length; c++) {
        const slide = immagini[c];
        if(c == currentslide){
            slideContainer.appendChild(slide)
            slide.classList.remove("hidden")
            console.log("si")
        }
        else {
            console.log("no")
            slide.classList.add("hidden")
        }
    }
    currentslide++

    if(currentslide >= immagini.length){
        currentslide = 0
    }
}
)

btnback.addEventListener("click", function(){
    problema.classList.add("hidden")

    for (let c = 0; c < immagini.length; c++) {
        const slide = immagini[c];
        if(c == currentslide){
            slideContainer.appendChild(slide)
            slide.classList.remove("hidden")
            console.log("si")
        }
        else {
            console.log("no")
            slide.classList.add("hidden")
        }
    }
    currentslide--

    if(currentslide > immagini.length){
        currentslide = 0
    }

    var tornaNdre;

    if (currentslide < 0){
        currentslide = 3
        tornaNdre = true
    }
    
    if (tornaNdre != true) {
        currentslide = currentslide--
    }
}
)
