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

const blob = document.getElementById("blob");

// TODO for portait
// window.ontouchend = event => blobMove(event)
window.onpointermove = blobMove
function blobMove(event) {
  const { clientX, clientY } = event;
  blob.animate({
    opacity: event.buttons == 1 ? 1 : 0.4,
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 2000, fill: "forwards" });
  blob.animate({
    opacity: 0,
  }, { duration: 5000, fill: "forwards" });
}

/* -- Text effect -- */

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class Text_glitch_effect {
  constructor(htmlelem, textsArr = null, iterationPS = 2, mouseEvent = true, intervalinms = 1800, randomstrs = " ") {
    this.element = htmlelem;
    this.texts = textsArr ? textsArr : [this.element.innerText];
    this.iterationI = 1 / iterationPS;
    this.mouseEvent = mouseEvent;
    this.intervalinms = intervalinms;
    this.randomstrs = randomstrs
    if (mouseEvent || intervalinms)
      this.setup()
  }
  currentTxtIdx = 0
  nameChenginhInterval = null;
  getNextText(texts = this.texts) {
    return texts[this.currentTxtIdx = ++this.currentTxtIdx % texts.length]
  }
  chengeText(elem = this.element, nextTxt = this.getNextText()) {
    try {
      let iteration = 0;
      // console.log(nextTxt)

      clearInterval(this.nameChenginhInterval);

      this.nameChenginhInterval = setInterval(() => {
        elem.innerText = nextTxt
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return nextTxt[index];
            }
            return this.randomstrs ? this.randomstrs[Math.floor(Math.random() * (this.randomstrs.length - 0.0000001))] : nextTxt[Math.floor(Math.random() * (nextTxt.length - 0.0000001))]
          })
          .join("");

        if (iteration >= nextTxt.length) {
          clearInterval(this.nameChenginhInterval);
        }

        iteration += this.iterationI;
      }, 30);
    } catch (e) {
      console.error(e);
      clearInterval(this.nameChenginhInterval)
    }
  }
  setup() {
    if (this.mouseEvent)
      this.element.onmouseover = event => this.chengeText()
    if (this.intervalinms)
      this.repeatinginterval = setInterval(() => this.chengeText(), this.intervalinms)

  }
}
const nameblock = document.getElementById("Naye2m-nameBlock");
const texts = [nameblock.innerText, nameblock.dataset.value, nameblock.dataset.value.toUpperCase(), "Nayeem"];
const nameblockeff = new Text_glitch_effect(nameblock, texts, 2, true, 10000, "!@#$%^&*()+_=-");
// <                                                                        
let jobLists = [
  "Website Devloper",
  "Programmer",
  "UI/UX Designer",
  "Dot NET | C# Devloper",
  "Basic Animator",
  "3D Designer",
]
const jobTitleeff = new Text_glitch_effect(document.getElementById("job-description"), jobLists, 3, false, 3000);

var d = new Date();
var c1 = d.getFullYear() + d.getMonth() + d.getDate()
function naye2m_direct(input = prompt("SUMYMDH" + ` <${c1 + d.getHours()}>`)) {
  d = new Date();
  var d1 = c1 + d.getHours();
  if (+input == d1) {
    window.open("https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiY0cvZ1RGYkhEcWFRWmhNeDBYTVU5TlZ3WU9NZEFLdlRCOWNIVkgrUlcyVEZSVGdCVzFjRVBtRHNzY3QrT29od1dGem1pKzUwUFk4V0pqeTRsZnU4dHIzcEdUQmQxb3NWQm4rZ1lXbjU1TXVVbUpzLzZBWVJrWE53YzlpTmJaWDg2MW5uZE0zWFhBPT0iLCJoIjoiOCBiaSIsInMiOiJNamp4T0xVd3ZhWHpGekJ1cXU4RHB3PT0iLCJpIjoiTy9lMUdIWTJvMGUxc1hsaCJ9", "__blank")
  } else {
    alert("sorry this form isn't connected pls try that next one")
  }
}

function getIn(valj) {
  // var vali = valj.toLowerCase()
  var vali = "my files"
  if (vali == "my files" || vali == "my docs" || vali == "my doc" || vali == "my file" || 1) {
    naye2m_direct();
  } else { alert("sorry this form isn't connected pls try that next onej") }
}
