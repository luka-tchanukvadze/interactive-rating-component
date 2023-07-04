const submitBtn = document.querySelector('.submit')
const cont1 = document.querySelector('.container1')
const cont2 = document.querySelector('.container2')
const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const num3 = document.querySelector('.num3')
const num4 = document.querySelector('.num4')
const num5 = document.querySelector('.num5')

const numList = [num1, num2, num3, num4, num5]

const rate = document.querySelector('.rate-num')

let rateNum = 0

numList.forEach(function(element) {
  element.addEventListener('click', function() {
    rateNum = Number(element.textContent)
    rate.textContent = rateNum

    if (!(element.classList.contains("btn-style"))) {
      element.classList.add('btn-style')
      element.style.color = 'white'
      element.style.backgroundColor = 'darkgray'
    }

    numList.forEach((el) => {
      if(el != element){
        el.classList.remove('btn-style')
        el.removeAttribute("style")
      }
    })

  });
});




cont2.style.display = 'none'

submitBtn.onclick = function(){
  cont1.style.display = 'none'
  cont2.style.display = 'block'
}

