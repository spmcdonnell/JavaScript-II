// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function closureExample() {
  var privateVar = 'private variable';

  return (message) => {
    console.log(message, privateVar);
  };
}

const accessPrivateVar = closureExample();

accessPrivateVar('I can still access privateVar:');


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  return () => {
    num++;
    console.log(num);
  };
};

const newCounter = counter();
newCounter(); 
newCounter(); 
newCounter(); 

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num = 0;
  return {
    increment: () => {
      num++;
      console.log(num);
    },
    decrement: () => {
      num--;
      console.log(num);
    }
  };
};

const plusOrMinus = counterFactory();

plusOrMinus.increment();
plusOrMinus.increment();
plusOrMinus.increment();
plusOrMinus.increment();
plusOrMinus.decrement();
