function randArray(r, c){
  var arr = [];

  for (var i = 0; i < r; i++)
  {
    var columns = [];

    for (var j = 0; j < c; j++)
    {
      columns[j] = Math.floor((Math.random() * (9 + 1)));
    }
    arr[i] = columns;
  }
  return arr;
}

console.log(randArray(5, 5));
