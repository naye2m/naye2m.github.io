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
function intrval_func() {
  for (let i = 0; i < 20; i++) {
	;
    if (i < 1) {
      setTimeout( document.getElementById("Naye2m-nameBlock").innerText = CRS(15), 250 * i);
	  random_string = ""
    } else {
      if (i == 8){ setTimeout(() => {
		document.getElementById("Naye2m-nameBlock").innerText ="Muhammad Nayeem"
	  }, 2000);};
    }
  }
}

var nameChengingInt = setInterval(() => {
	intrval_func()
}, 30000);
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