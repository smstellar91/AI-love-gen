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
  let context=`User instructions: You are a romantic love song writer and you are writing a love song for a couple who is in love. The song should be sweet and romantic in 4 lines in basic HTML.Follow the user instructions. The song should be in English.
  Sign the song with "Love, AI"`;
  let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
 
  console.log("generating love song");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  
  axios.get(apiUrl).then(displayLoveSong);


  

}

let loveForm= document.querySelector("#love-generator-form");
loveForm.addEventListener("submit", generateLoveSong);