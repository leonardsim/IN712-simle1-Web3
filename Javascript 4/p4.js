function handleEvent(e)
{
  var el = e.target;
  var et = e.type;

  if (el.tagName == "P")
  {
    if (et == "mouseover")
    {
      el.className = "underline";
    }
    else if (et == "mouseout")
    {
      el.className = "";
    }

    if (et == "click")
    {
      console.log("hello");
    }
  }
}

function mouseOutChange()
{
  var el = e.target;

  if (el.tagName == "P")
  {
    el.className = "";
  }
}


document.addEventListener("mouseover", handleEvent);
document.addEventListener("mouseout", handleEvent);
document.addEventListener("click", handleEvent);
