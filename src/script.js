function poemGenerator(event){
event.preventDefault();


new Typewriter("#poem", {
  strings: "sample of what a poem will look like",
  autoStart: true,
  cursor: "",
  delay: 1,
});
}

let formInputElement = document.querySelector("#form-input");
formInputElement.addEventListener("submit", poemGenerator);