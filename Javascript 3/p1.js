function countdown()
{
  var n = prompt("Please enter a number");
  var numStr = "";

  for (var i = (n-1); i > 0; i--)
  {
    numStr = numStr.concat(i + " ");
  }

  return numStr;
}

function changeDivContents(){
  var divDisplay = document.getElementById("divDisplay");
  divDisplay.innerHTML = countdown();
}

changeDivContents();
