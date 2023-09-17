const result=document.getElementById('result_area');
const Allbuttons=document.querySelectorAll('.btn');
const Resultbutton=document.getElementById('btn16');


Allbuttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const buttonText = this.textContent;
    let txtcontent = result.value;

    // Check if the last character in the 'result' text is a number.
    const lastChar = /[0-9]$/.test(txtcontent);
    // Check if the clicked button is an operator (+, -, *, /, or .).
    const clickedbtn = /[+\-*/.]/.test(buttonText);
    
     // If the last character is a number and the clicked button is an operator, add the operator to the 'result'.
    if(lastChar && clickedbtn){
        result.value += buttonText;
    }
    // If the clicked button is not an operator, simply add it to the 'result'.
    else if(!clickedbtn){
        result.value += buttonText;
    }
  });
});

Resultbutton.addEventListener('click',function(){
    const equation = result.value;
    try {
    const finalresult = eval(equation);
    
    if (!isFinite(finalresult)) {
      result.value = "Can't divide";
    } else {
      result.value = finalresult;
    }
  } catch (error) {
    result.value = equation;
  }
})



