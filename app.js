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
  
  
  // Exercise 3 Section




//Convert the array of reversed words back into a string
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
//Convert the sentence into an array of words - 

function reverseWords(sentence){
  let result=[];
 //turn string into an array using the .split method
  let words = sentence.split(" ");
  //console.log("words:" + words);
//Iterate over each word
  for (let i=0; i < words.length; i++){
  //Convert each word to an array of characters
    let letters = words[i].split("");
 //Reverse each array of characters and update the array of words
   letters.reverse();
   let reverseWord = letters.join("");
  // result = result.concat(reverseWord);
   result.push(reverseWord);
  }

  return result.join(' ');
}
console.log(reverseWords(sentence));
//console.log(reverseWords("My name is Susan"));


console.log("EXERCISE 4:\n==========\n");
//Exercise 4 - CSV
let csvData = "name, age\nFrodo, 50\nSam, 38\nMary, 36\nPippin, 26";

function csvConverter(data){
  //determine header
  //split header string to an array of headers
  let headers= data.slice(0, data.indexOf("\n")).split(","); //["name", "age"]
  
  //Determine the row data
  let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");
  
  const customArray = valuesList.map((row) => {
    //separate the values into array values
    let values = row.split(",");
    let obj={}
    
    values.forEach((col, idx) => {
      if (idx < headers.length) {
         obj[headers[idx]] = col;
      } else {
        obj[`misc${idx - headers.length +1}`]=col;
      }
    });
    // console.log(headers);
    return obj;
  });
  
 return customArray;
}
console.log(csvConverter(csvData));
