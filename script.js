function colorMode(moon){
  const bodyDark= document.getElementById("bodyDark")
  const deskdark= document.getElementById("darkMode")
  const bgDark=document.getElementById("bgDark")
  const bgDark1=document.getElementById("bgDark1")
  const bgDark2=document.getElementById("bgDark2")
  const bgDark3=document.getElementById("bgDark3")
  const bgDark4=document.getElementById("bgDark4")
  const bgDark5=document.getElementById("bgDark5")
  const bgDark6=document.getElementById("bgDark6")
  const input1=document.getElementById("input1")
  const input2=document.getElementById("input2")
  const input3=document.getElementById("input3")
  const input4=document.getElementById("input4")
  const input5=document.getElementById("input5")
  const input6=document.getElementById("input6")
 
  input1.classList.toggle('bg-dark')
  input2.classList.toggle('bg-dark')
  input3.classList.toggle('bg-dark')
  input4.classList.toggle('bg-dark')
  input5.classList.toggle('bg-dark')
  input6.classList.toggle('bg-dark')
  bodyDark.classList.toggle('body-dark')
  deskdark.classList.toggle("bg-deskdark")
  bgDark.classList.toggle('bg-dark')
  bgDark1.classList.toggle('dark-outline')
  bgDark1.classList.toggle('bg-dark')
  bgDark2.classList.toggle('bg-dark')
  bgDark3.classList.toggle('bg-dark')
  bgDark4.classList.toggle('bg-dark')
  bgDark5.classList.toggle('bg-dark')
  bgDark6.classList.toggle('bg-dark')
  mainInput.classList.toggle('bg-dark')
  // moon.classList.toggle("bg-dark")
}

function getVal(){
const inputValue= document.getElementById('mainInput').value
console.log(inputValue)
if(input1.value.length==0){ 
  document.getElementById('input1').value=inputValue
}else if(input2.value.length==0){ 
  document.getElementById('input2').value=inputValue
}else if(input3.value.length==0){ 
  document.getElementById('input3').value=inputValue
}else if(input4.value.length==0){ 
  document.getElementById('input4').value=inputValue
}else if(input5.value.length==0){ 
  document.getElementById('input5').value=inputValue
}else if(input6.value.length==0){ 
  document.getElementById('input6').value=inputValue
}
}