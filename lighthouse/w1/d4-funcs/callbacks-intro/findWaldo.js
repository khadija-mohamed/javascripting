// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      let index = i;
      found(index);   // execute callback
      
    }
  }
}

const actionWhenFound = function(index) {
  console.log(`Found index ${index}`);

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// Exercise 2 
const findWaldo = (names, found) => {
  names.forEach(function(item, index) {
    if (item === "Waldo") {
      found(index); // execute callback
    }
  })
};

const actionWhenFound = i => {
  console.log("Found Waldo" + i + "!");
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);