
btnAdd.onclick=function() {
int1 = parseInt(inptNum1.value)
int2 = parseInt(inptNum2.value)
lblAnswer.value = int1+int2
}

btnMultiply.onclick=function() {
int1 = parseInt(inptNum1.value)
int2 = parseInt(inptNum2.value)
lblAnswer.value = int1*int2
}

btnClear.onclick=function() {
lblAnswer.value = ""}



/*
Do this with your partner. 
 Calculator program (use this form).
 Scenario: gets 2 numbers, and outputs the sum. User 
 can also clear the input boxes. Put answer on a second 
 form. So create a form named calculatorDemoAnswer.
 Requirement - must use a global function 

 1) Algorithm:
    get two numbers from user
    when user clicks the Add button, add the numbers 
    and show the answer in a control.
      ? show it in a label? in a Bootstrap Alert? NSBMsg()? 
    if user clicks the reset button, clear the content 
    of the two controls that hold the numbers and the answer display.
 2) sketch GUI, id controls needed:
    - need two input controls  (for 2 numbers) with labels
    - need Add button
    - need Reset button
    - need control to display answer - bootstrap4 Alert? label? NSBMsg? 

 3) build first part of interface with 1-2 controls and properties.
    (already built here)
 4) Now for the code for button onclick event handler. 
    It is close to this (this code needs some tweaking). 

        var answer = 0
        btnAdd.onclick=function(){      
            lblAnswer = addTwo(inptNum1.value,inptNum2.value)
        }
        
 5) Then add an event and event handler code for the Reset button. 

*/
