/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
let format =  time.match(/[a-z]+|[^a-z]+/gi);
let h = format[0].split(':');
if(format[1]=="AM"||format[1]=="am")
return ("Good Morning");
else if(format[1]=="PM"||format[1]=="pm")
{
if(h[0]<=5||h[0]==12)
{
  return ("Good Afternoon");
}
else {
  return ("Good Evening");
}

}
}
/* Write your implementation of displayMessage() */
function displayMessage(txt) {
document.getElementById("greeting").innerHTMl= txt;

}
