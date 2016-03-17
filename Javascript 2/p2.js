function randArray(n){
  var arr = new Array(n);

  for (var i = 0; i < arr.length; i++)
  {
    var randNum = Math.floor((Math.random() * (9 + 1)));

    arr[i] = randNum;

    console.log(arr[i]);
  }
}

randArray(5);
