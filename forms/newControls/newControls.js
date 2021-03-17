/*
New function 1: Textarea
Textarea is similar to input and functions the same way.
Textarea is better for larger text inputs.

Function 1 changes:
Font changed to Times New Roman
Font style changed to Oblique
Max length set to 256 characters
Min length set to 1 character
*/

btnSimpControl2.onclick=function() {
label = txtaNewControlOne.value
lblSimpControl1.value = label
}

btnSimpControl3.onclick=function() {
display = ""
lblSimpControl1.value = display
}

/*
ADDITIONAL SIMPLE FUNCTIONS
lblSimpControl1: to show output from txtaNewControlOne
btnSimpControl2: to submit input from txtaNewControlOne
btnSimpControl3: to clear input from txtaNewControlOne
*/

/*
New function 2: Slider
Slider can be used as an event that can trigger a function.

Function 2 changes:
Slider color changed to gold
Left side of slider (side that shows how far the slider has been moved) changed to black
Right side of slider (side that shows how far the slider has yet to move) changed to white
Slider handle changed from circle to square
*/

/*
sldrNewControl2.onslide=function() {
lblSimpControl1.value = ""
}
*/

/*
The above code causes the slider's movement to clear the text from the label.
*/


/*
New function 3: Checkbox
Checkbox is used to mark certain items that the user selects.

Function 3 changes:
Header changed to "Animal Check Box"
Options changed to show "Platypus"
*/

cbxNewControl3.onclick=function() {
lblSimpControl1.value = "You have selected a Platypus!"}

/*
The above code displays a message to the user that they have selected "Platypus" when they have checked the platypus checkbox
*/

/* 
New function 4: Switch
Switch is used to indicate if a user has selected a certain item
(often shows if something is on or off)

Function 4 changes:
Title changed to "Toggle"
Changed text color to green (indicating success)
*/


swtNewControl4.onclick=function() {
let displayValue = lblSimpControl1.value
lblSimpControl1.value = "Toggle selected"
  }






