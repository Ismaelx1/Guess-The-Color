const rgValue = document.getElementById('rgbVal')
const playBtn = document.getElementById('playGame')
const tryBtn = document.getElementById('tryAgain')
const header = document.querySelector('.header')
let random1 = Math.floor(Math.random() * 256)
let random2 = Math.floor(Math.random() * 256)
let random3 = Math.floor(Math.random() * 256)
let indo1 = document.getElementById('index1')
let indo2 = document.getElementById('index2')
let indo3 = document.getElementById('index3')
let indo4 = document.getElementById('index4')
let indo5 = document.getElementById('index5')
let indo6 = document.getElementById('index6')
const cards = document.getElementById('cards')
let order1 = Math.floor(Math.random() * 100) + 1;
let order2 = Math.floor(Math.random() * 100) + 1;
let order3 = Math.floor(Math.random() * 100) + 1;
let order4 = Math.floor(Math.random() * 100) + 1;
let order5 = Math.floor(Math.random() * 100) + 1;
let order6 = Math.floor(Math.random() * 100) + 1;

let bgvalue = `rgb(${random1}, ${random2}, ${random3})`
let checkin = rgValue.innerHTML = bgvalue
indo1.style.backgroundColor = bgvalue
indo1.style.order = order1
rgValue.innerHTML = bgvalue

let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
let randomColor3 = Math.floor(Math.random()*16777215).toString(16);
let randomColor4 = Math.floor(Math.random()*16777215).toString(16);
let randomColor5 = Math.floor(Math.random()*16777215).toString(16);
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


tryBtn.addEventListener('click', function() {
    location.reload();
})

    cards.addEventListener('click', colors, false)
    function colors(event) {
      if (event.target == indo1) {
        header.style.backgroundColor = bgvalue
        rgValue.innerHTML = "Congrats You won!"
       
      } else if (event.target == indo2) {
          indo2.style.visibility = "hidden"
      } else if (event.target == indo3) {
        indo3.style.visibility = "hidden"
    } else if (event.target == indo4) {
        indo4.style.visibility = "hidden"
    } else if (event.target == indo5) {
        indo5.style.visibility = "hidden"
    } else if (event.target == indo6) {
        indo6.style.visibility = "hidden"
    }

    } 
    
    
    