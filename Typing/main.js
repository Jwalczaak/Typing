
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Powolne ','wpisywanie ','tekstu'];

let indexActiveLetter = -15;
let indexActiveIndex = 0;

const addLetter = () => {
 if(indexActiveLetter >=0){
 spnText.textContent += txt[indexActiveIndex][indexActiveLetter];
 }
 indexActiveLetter ++;
 if(indexActiveLetter === txt[indexActiveIndex].length){
 indexActiveIndex++;
 if(indexActiveIndex === txt.length) return;
 
 
 return setTimeout(() => {
 indexActiveLetter = 0;
 spnText.textContent = "";
 addLetter();
 },2000)
}

 setTimeout(addLetter,200);

}





addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
const indexTyping = setInterval(cursorAnimation, 500);
