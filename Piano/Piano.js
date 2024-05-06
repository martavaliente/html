let notesTocades=[];
function playSound(nota){
  let audio;
  if (nota=='do') audio=new Audio ("do.mp3");
  if (nota=='re') audio=new Audio ("re.mp3");
  if (nota=='mi') audio=new Audio ("mi.mp3");
  if (nota=='fa') audio=new Audio ("fa.mp3");
  if (nota=='sol') audio=new Audio ("sol.mp3");
  if (nota=='la') audio=new Audio ("la.mp3");
  if (nota=='si') audio=new Audio ("si.mp3");
   audio.play()
  notesTocades.push(nota);
  document.getElementById("notes").innerHTML=notesTocades;
}
function esborra(){
  notesTocades=[];
  document.getElementById("notes").innerHTML=notesTocades;
}
function guarda() {
  let i = 0;
  const interval = setInterval(() => {
      if (i < notesTocades.length) {
          playSound(notesTocades[i]);
          i++;
      } else {
          clearInterval(interval);
      }
  }, 500); // Adjust this value to control the playback speed
}

