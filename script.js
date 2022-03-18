const rgValue = document.getElementById('rgbVal')
const tryBtn = document.getElementById('tryAgain')
const header = document.querySelector('.header')
const displayer = document.querySelector('#display')

// Main Card
const random1 = Math.floor(Math.random() * 256)
const random2 = Math.floor(Math.random() * 256)
const random3 = Math.floor(Math.random() * 256)
const bgvalue = `rgb(${random1}, ${random2}, ${random3})`
indo1.style.backgroundColor = bgvalue
rgValue.innerHTML = bgvalue
// Main Card

const indo1 = document.getElementById('index1')
const indo2 = document.getElementById('index2')
const indo3 = document.getElementById('index3')
const indo4 = document.getElementById('index4')
const indo5 = document.getElementById('index5')
const indo6 = document.getElementById('index6')
const cards = document.getElementById('cards')

function ordeR(card) {
    const order = Math.floor(Math.random() * 100) + 1;
 card.style.order = order
}

function randomHex(card) {
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    card.style.backgroundColor = "#" + randomColor1
}

randomHex(indo2)
randomHex(indo3)
randomHex(indo4)
randomHex(indo5)
randomHex(indo6)

ordeR(indo1)
ordeR(indo2)
ordeR(indo3)
ordeR(indo4)
ordeR(indo5)
ordeR(indo6)

let lives = 3;
displayer.textContent += lives

function decrement() {
    displayer.textContent = `Number Of Lives: ${lives}`
if (lives === 0) {
   displayer.textContent = "Number Of Lives: 0"

}
}

tryBtn.addEventListener('click', function() {
    location.reload();
})

function alerty() {
    alert("You've Lost, Try Again!")
    location.reload()
}
function checkLives() {
    if (lives === 0) {
        setTimeout(alerty, 500)
      
    }
}

    cards.addEventListener('click', colors, false)
    function colors(event) {
      if (event.target == indo1) {
        header.style.backgroundColor = bgvalue
         cards.style.backgroundColor = bgvalue
            rgValue.innerHTML = "You've Won Well Played!"
                tryBtn.style.color = bgvalue
        return
      } else if (event.target == indo2) {
            indo2.style.visibility = "hidden"
                lives--
                    decrement()
                        checkLives()
         
      } else if (event.target == indo3) {
            indo3.style.visibility = "hidden"
                lives--
                    decrement()
                        checkLives()
      
    } else if (event.target == indo4) {
        indo4.style.visibility = "hidden"
            lives--
                decrement()
                    checkLives()
        
    } else if (event.target == indo5) {
        indo5.style.visibility = "hidden"
            lives--
                decrement()
                    checkLives()
    } else if (event.target == indo6) {
        indo6.style.visibility = "hidden"
            lives--
                decrement()
                    checkLives()
    } 
    }  // End. Obviously.