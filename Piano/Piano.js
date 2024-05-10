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
async function guarda() {
  for (let i = 0; i < notesTocades.length; i++) {
    let nota = notesTocades[i];
    let audio = new Audio(nota + '.mp3');
    audio.play();
    await sleep(500);
  }
}

function sleep(ms) {
  return new Promise(resolve => {setTimeout(resolve, ms); });
}

