const focusOnInput = () => {
  letterBox[0].focus();
};

document.addEventListener("DOMContentLoaded", focusOnInput);

const letterBox = document.querySelectorAll("input");
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    letterBox.focus();
    letterBox.value = key.textContent;
  });
  key.setAttribute("id", key.textContent);
});

// letterBox.forEach(box) =>{
//     box.focus();
//     if(box.value != null){

//     }
// }

// document.addEventListener('keydown',alphaOnly)

// function alphaOnly(event) {
//     const key = event.code;
//     return ((key >= 65 && key <= 90) || key == 8 || key == 32);
//   };

const backspace = document.querySelector(".backspace");
const enter = document.querySelector(".return");

// const mode = document.querySelector('.mode');
// const body =document.querySelector('body');

// mode.addEventListener('click', () =>{
//     mode.classList.toggle("bi-moon");
//     if(mode.classList.toggle('bi-brightness-high')){
//         body.style.background = 'white';
//         body.style.color = 'black';
//     }
//     else{
//         body.style.background = 'black';
//         body.style.color = 'white';
//     }

// })
