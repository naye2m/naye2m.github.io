function NotAvailableNow(_name) {
  alert(`sorry ${_name} is not available now.`);
}
var NAN = NotAvailableNow;
function create_random_string(string_length = 15) {
  var random_string = "";
  var characters = "NnAaYyEeMmXxZz180YyMUuHh";
  for (var i, i = 0; i < string_length; i++) {
    random_string += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return random_string;
}
const CRS = create_random_string;
/* -- Glow effect -- */

// const blob = document.getElementById("blob");

// window.onpointermove = event => { 
//   const { clientX, clientY } = event;
  
//   blob.animate({
//     left: `${clientX}px`,
//     top: `${clientY}px`
//   }, { duration: 3000, fill: "forwards" });
// }

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let nameChenginhInterval = null;

document.getElementById("Naye2m-nameBlock").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(nameChenginhInterval);
  
  nameChenginhInterval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(nameChenginhInterval);
    }
    
    iteration += 1 / 2;
  }, 30);
}
var nameChenginhInterval2 = setInterval(() => {
  let iteration = 0;
  
  clearInterval(nameChenginhInterval);
  
  nameChenginhInterval = setInterval(() => {
    document.getElementById("Naye2m-nameBlock").innerText = document.getElementById("Naye2m-nameBlock").innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return document.getElementById("Naye2m-nameBlock").dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= document.getElementById("Naye2m-nameBlock").dataset.value.length){ 
      clearInterval(nameChenginhInterval);
    }
    
    iteration += 1 / 2;
  }, 30);
},3000)

// var nameChengingInt = setInterval(() => {
	
//   for (let i = 0; i < 20; i++) {
    
//       if (i < 1) {
//         setTimeout( document.getElementById("Naye2m-nameBlock").innerText = CRS(15), 250 * i);
//       random_string = ""
//       } else {
//         if (i == 8){ setTimeout(() => {
//       document.getElementById("Naye2m-nameBlock").innerText ="Muhammad Nayeem"
//       }, 2000);};
//       }
//     }  
// }, 30000);
var d = new Date();
var c1 = d.getFullYear() + d.getMonth() + d.getDate()
function naye2m_direct(input = prompt("SUMYMDH")) {
  d = new Date();
   var d1 = c1 + d.getHours();
  if (+input == d1) {
    window.open( "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiY0cvZ1RGYkhEcWFRWmhNeDBYTVU5TlZ3WU9NZEFLdlRCOWNIVkgrUlcyVEZSVGdCVzFjRVBtRHNzY3QrT29od1dGem1pKzUwUFk4V0pqeTRsZnU4dHIzcEdUQmQxb3NWQm4rZ1lXbjU1TXVVbUpzLzZBWVJrWE53YzlpTmJaWDg2MW5uZE0zWFhBPT0iLCJoIjoiOCBiaSIsInMiOiJNamp4T0xVd3ZhWHpGekJ1cXU4RHB3PT0iLCJpIjoiTy9lMUdIWTJvMGUxc1hsaCJ9" , "__blank")
  } else {
    alert("sorry this form isn't connected pls try that next one")
  }
}

function getIn (valj){
// var vali = valj.toLowerCase()
var vali= "my files"
  if( vali == "my files" || vali == "my docs" || vali == "my doc" || vali == "my file" || 1){
    naye2m_direct();
  }else{ alert("sorry this form isn't connected pls try that next onej") }
}