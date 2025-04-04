function generateLoveSong(event) {
  event.preventDefault();

 
  new Typewriter('#song', {
    strings: ["Sing a sad song for the lonely hearts"],
    autoStart: true,
    delay:1,
    cursor:"",
    
  });

}

let loveForm= document.querySelector("#love-generator-form");
loveForm.addEventListener("submit", generateLoveSong);