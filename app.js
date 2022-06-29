console.log("Exercise 1: \n==========\n");

// Exercise 1 Section

const numbers = [2, 22, 12, 17, 18, 39, 129];
const arraySum = (numbers) => {
  
    let sum = 0;
    numbers.forEach((num) => {
      sum += num;
    });   
  return sum;
  };

  console.log(arraySum(numbers));




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book2 = {
    title: "Traffic Secrets",
    pages:325,
    readCount: 3,
    author: "Russell Brunson"
  };
  // add method to the above object - do NOT use a fat arrow
  book2.info = function()  {
   return(`${this.title} ${this.author} ${this.pages} ${this.readCount}`) ;
  };
  
  console.log(book2.info());  // calling the object's method
  
  
  // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
