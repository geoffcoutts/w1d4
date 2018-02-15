// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name){
    if (name === "Waldo"){
      found(arr.indexOf(name));   // execute callback
    }
  });
}

function actionWhenFound(location) {
  console.log("Found him at index " + location + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
