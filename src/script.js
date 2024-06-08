function displayPoem(response){
new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  cursor: "",
  delay: 1,
});
}

function poemGenerator(event){
event.preventDefault();

let instructions = document.querySelector("#user-instructions");
let apiKey = "01dd2bca25c0t00b3d253f443e0of791";
let context = "you are a creative and romantic poem writer. Your objective is to create a 4 line poem, in HTML format seperating each line with a <br>, following the user instructions. only display the poem.";
let prompt = `user instructions are: generate a poem about ${instructions.value}` ;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML=`<div class="ct-animate-blink">Generating a poem about ${instructions.value}</div>`;

axios.get(apiUrl).then(displayPoem);
}

let formInputElement = document.querySelector("#form-input");
formInputElement.addEventListener("submit", poemGenerator);