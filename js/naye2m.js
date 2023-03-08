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
