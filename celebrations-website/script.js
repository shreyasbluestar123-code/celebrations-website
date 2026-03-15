
// smooth scroll animation

const cards = document.querySelectorAll(".card")

window.addEventListener("scroll", ()=>{

cards.forEach(card=>{

const top = card.getBoundingClientRect().top

if(top < window.innerHeight - 100){
card.style.opacity = "1"
card.style.transform = "translateY(0)"
}

})

})


// floating balloons

function createBalloon(){

const balloon = document.createElement("div")

balloon.classList.add("balloon")

balloon.style.left = Math.random()*100+"vw"

document.body.appendChild(balloon)

setTimeout(()=>{
balloon.remove()
},6000)

}

setInterval(createBalloon,1200)