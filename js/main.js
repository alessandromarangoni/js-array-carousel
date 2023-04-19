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

// dichiaro le immagini


let slideContainer = document.getElementById("slider")
let btn = document.getElementById("bottone")
let btnback = document.getElementById("back")
let currentslide = 0;
const immagini = [img2, img3, img4, img5, img1]
let problema = document.getElementById("imgStart")
// aggiungo evento al click della freccia in alto 
btn.addEventListener("click", function(){
    // immagine nel dom sparisce
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
    currentslide++
    // controllo che la posizione corrente non raggiunga mai un "index" > della linghezza dell array e nel caso lo fa lo riporto alla posizione 0
    if(currentslide >= immagini.length){
        currentslide = 0
    }
}
)
// faccio l inverso di quello fatto sopra 

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
    // aggiungo variabile torna indietro
    var tornaNdre;
    // se l "index" è inferiore a 0 lo riporto alla immagine numero 5 che in realtà è la 1
    if (currentslide < 0){
        currentslide = 4
        tornaNdre = true
    }
    
    if (tornaNdre != true) {
        currentslide = currentslide--
    }

    //c'è sicuramente un errore nel tornare indietro ora ma non riesco a capire di preciso come risolverlo ci riprovo più tardi
}
)
