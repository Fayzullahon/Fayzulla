let counter = 0


const number = document.querySelector('#value')
const buttons = document.querySelectorAll('.buttons')


buttons.forEach(button => {
    button.addEventListener('click', function(e){
        const classN = e.target.classList
     if(classN.contains('decrease')){
        counter--;
        
     }else if (classN.contains('reset')){
        counter = 0;
     }
     else {
        counter ++;
     }

     number.textContent = counter
    })



  })
if (number > 0) {
  console.log("%c" + number, "color: green");  
} else if (number < 0) {
  console.log("%c" + number, "color: red"); 
} else {
  console.log(number);
}

  