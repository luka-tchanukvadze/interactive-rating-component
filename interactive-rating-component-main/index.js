const submitBtn = document.querySelector('.submit')
const cont1 = document.querySelector('.container1')
const cont2 = document.querySelector('.container2')
const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const num3 = document.querySelector('.num3')
const num4 = document.querySelector('.num4')
const num5 = document.querySelector('.num5')

const rate = document.querySelector('.rate-num')

let rateNum = 0


num1.addEventListener('click', () =>{
  rateNum = Number(num1.textContent)
  rate.textContent = rateNum

  num2.classList.remove('btn-style')
  num3.classList.remove('btn-style')
  num4.classList.remove('btn-style')
  num5.classList.remove('btn-style')

  num2.removeAttribute("style")
  num3.removeAttribute("style")
  num4.removeAttribute("style")
  num5.removeAttribute("style")



  num1.classList.add('btn-style')
  document.querySelector('.btn-style').style.color = 'white'
  document.querySelector('.btn-style').style.backgroundColor = 'darkgray';

  
  
})

num2.addEventListener('click', () =>{
  rateNum = Number(num2.textContent)
  rate.textContent = rateNum

  num1.classList.remove('btn-style')
  num3.classList.remove('btn-style')
  num4.classList.remove('btn-style')
  num5.classList.remove('btn-style')

  num1.removeAttribute("style")
  num3.removeAttribute("style")
  num4.removeAttribute("style")
  num5.removeAttribute("style")


  num2.classList.add('btn-style')
  document.querySelector('.btn-style').style.color = 'white'
  document.querySelector('.btn-style').style.backgroundColor = 'darkgray';
  
})

num3.addEventListener('click', () =>{
  rateNum = Number(num3.textContent)
  rate.textContent = rateNum

  num1.classList.remove('btn-style')
  num2.classList.remove('btn-style')
  num4.classList.remove('btn-style')
  num5.classList.remove('btn-style')

  num1.removeAttribute("style")
  num2.removeAttribute("style")
  num4.removeAttribute("style")
  num5.removeAttribute("style")

  num3.classList.add('btn-style')
  document.querySelector('.btn-style').style.color = 'white'
  document.querySelector('.btn-style').style.backgroundColor = 'darkgray';
})

num4.addEventListener('click', () =>{
  rateNum = Number(num4.textContent)
  rate.textContent = rateNum

  num1.classList.remove('btn-style')
  num2.classList.remove('btn-style')
  num3.classList.remove('btn-style')
  num5.classList.remove('btn-style')

  num1.removeAttribute("style")
  num2.removeAttribute("style")
  num3.removeAttribute("style")
  num5.removeAttribute("style")

  num4.classList.add('btn-style')
  document.querySelector('.btn-style').style.color = 'white'
  document.querySelector('.btn-style').style.backgroundColor = 'darkgray';
})

num5.addEventListener('click', () =>{
  rateNum = Number(num5.textContent)
  rate.textContent = rateNum

  num1.classList.remove('btn-style')
  num2.classList.remove('btn-style')
  num3.classList.remove('btn-style')
  num4.classList.remove('btn-style')

  num1.removeAttribute("style")
  num2.removeAttribute("style")
  num3.removeAttribute("style")
  num4.removeAttribute("style")

  num5.classList.add('btn-style')
  document.querySelector('.btn-style').style.color = 'white'
  document.querySelector('.btn-style').style.backgroundColor = 'darkgray';
})




cont2.style.display = 'none'

submitBtn.onclick = function(){
  cont1.style.display = 'none'
  cont2.style.display = 'block'
}

