const rgValue = document.getElementById('rgbVal')
const playBtn = document.getElementById('playGame')
const tryBtn = document.getElementById('tryAgain')
const header = document.querySelector('.header')
const contain = document.querySelector('.container')
const divs = document.querySelectorAll('#cards > div')
console.log(divs)
const random1 = Math.floor(Math.random() * 256)
const random2 = Math.floor(Math.random() * 256)
const random3 = Math.floor(Math.random() * 256)
const indo1 = document.getElementById('index1')
const indo2 = document.getElementById('index2')
const indo3 = document.getElementById('index3')
const indo4 = document.getElementById('index4')
const indo5 = document.getElementById('index5')
const indo6 = document.getElementById('index6')
const cards = document.getElementById('cards')
const order1 = Math.floor(Math.random() * 100) + 1;
const order2 = Math.floor(Math.random() * 100) + 1;
const order3 = Math.floor(Math.random() * 100) + 1;
const order4 = Math.floor(Math.random() * 100) + 1;
const order5 = Math.floor(Math.random() * 100) + 1;
const order6 = Math.floor(Math.random() * 100) + 1;

const bgvalue = `rgb(${random1}, ${random2}, ${random3})`
const checkin = rgValue.innerHTML = bgvalue
indo1.style.backgroundColor = bgvalue
indo1.style.order = order1
rgValue.innerHTML = bgvalue

const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
const randomColor4 = Math.floor(Math.random()*16777215).toString(16);
const randomColor5 = Math.floor(Math.random()*16777215).toString(16);
indo2.style.backgroundColor = "#" + randomColor1
indo3.style.backgroundColor = "#" + randomColor2
indo4.style.backgroundColor = "#" + randomColor3
indo5.style.backgroundColor = "#" + randomColor4
indo6.style.backgroundColor = "#" + randomColor5
indo2.style.order = order2
indo3.style.order = order3
indo4.style.order = order4
indo5.style.order = order5
indo6.style.order = order6


let lives = 0;

tryBtn.addEventListener('click', function() {
    location.reload();
})

function checkLives() {
    if (lives === 3) {
        alert("You've lost Try Again!")
        location.reload()
    }
}

    cards.addEventListener('click', colors, false)
    function colors(event) {
     
       
      if (event.target == indo1) {
        header.style.backgroundColor = bgvalue
        cards.style.backgroundColor = bgvalue
        rgValue.innerHTML = "Congrats You won!"
        tryBtn.style.color = bgvalue
       
      } else if (event.target == indo2) {
          indo2.style.visibility = "hidden"
          lives++
          checkLives()
      } else if (event.target == indo3) {
        indo3.style.visibility = "hidden"
        lives++
        checkLives()
    } else if (event.target == indo4) {
        indo4.style.visibility = "hidden"
        lives++
        checkLives()
    } else if (event.target == indo5) {
        indo5.style.visibility = "hidden"
        lives++
        checkLives()
    } else if (event.target == indo6) {
        indo6.style.visibility = "hidden"
        lives++
        checkLives()
    } 

    } 
    

