/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
let h = time.split(':');
if(h[0]>=0&&h[0]<12)
alert ("Good Morning");
else if(h[0]>=12&&h[0]<=18)
{
  alert ("Good Afternoon");
}
else {
  alert ("Good Evening");
}

}
/* Write your implementation of displayMessage() */
function displayMessage(txt) {
document.getElementById("greeting").innerHTMl= txt;
}
