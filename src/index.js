function displayLoveSong(response) {

    console.log("love song generated");
    new Typewriter('#song', {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor:"",
        
      });
}

function generateLoveSong(event) {
  event.preventDefault();

let instructionsInput= document.querySelector("#user-instructions");
  let apiKey="d01e20d8to435efcbfa38a7b1daac0be";
  let prompt=`Generate a love song about ${instructionsInput.value}`;
  let context="You are a romantic song expert and love to write short 4 line love songs. Your mission is to generate a short love song, always separate it in verses, in basic HTML and separate each line with a  <br />.  Do not include a title to the song. Do not write html at the beggining.";
  let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
 
  let songContainer= document.querySelector("#song");
    songContainer.classList.remove("hidden");
    songContainer.innerHTML=`💗Generating a love song about ${instructionsInput.value}...`;

  console.log("generating love song");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  
  axios.get(apiUrl).then(displayLoveSong);


  

}

let loveForm= document.querySelector("#love-generator-form");
loveForm.addEventListener("submit", generateLoveSong);