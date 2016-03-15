function printCurrentDate(){
  var currentDate = new Date();
  var dateTime = "Current date: " + currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + (currentDate.getFullYear());

  alert(dateTime);
}

printCurrentDate();
