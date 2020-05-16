/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
let format =  time.match(/[a-z]+|[^a-z]+/gi);
h = format[0].split(':');
if()

}
/* Write your implementation of displayMessage() */
function displayMessage(txt) {
document.getElementById('greeting').innerHTMl= txt;

}
