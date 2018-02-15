var countdownGenerator = function (x) {
  /* your code here */
  var message = "";
  var counter = 0;
  count = x +1;
  return function() {
   //  your code here
    count -= 1;
    if (count > 0){
      message = `T-minus ${count}...`;
    } else if (count === 0) {
      message = `Blast Off!`;
    } else {
      message =`Rockets already gone, bub!`;
    }
    return console.log(message);
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!