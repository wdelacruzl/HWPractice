const main = async () => {
 // ex1();
 // ex2();
 //ex3();
 //ex4();
 //ex5();
 ex6();
};

const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};

const countNumbers = (array) => {
  let retval = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof(array[i]) === 'number' && array[i] % 1 !== 0) {
      retval++;
    }
  }
  return retval;
};

const ex2 = () => {
  const array = [12, 55, "2", 22, 11, true];
  console.log(minNumber(array));
};

const minNumber = (array) => {
    let retval = array[0]  //initializing retval as the first element
    for (let i = 0; i < array.length; i++) { // Going through each element of the array and compare it
      if (typeof(array[i]) == 'number' && array[i]< retval) {  //  If it’s smaller value and a number then store it and replace it with retval
        retval = array[i];                                     //and replace it with retval.
      }
    }
    return retval;
}

const ex3 = () => {
  array = ["this", "is", "a", "test", "happy"];
  console.log(shortestString(array));
};

const shortestString = (array) => {
    return array.sort((a, b) => a.length - b.length)[0];
    
    //LONGER ROUTE
    /* let shortest = '';

    if(array.length > 0){
        for(let i = 0; i < arr.length; i++){
          if(typeof array[i] === 'string' && array[i].length < shortest.length)
            {
             shortest = array[i];
           }
         }
        }
      }
       return shortest; 
   }*/

};

const ex4 = () => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));    
}

const countLetters = (array) =>{
    return array.join("").length;
}

const ex5 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    console.log(countIt(array));    
}

const countIt = (array) => {
  const countItegerNumbers = (array) => {
    let retval = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number" && array[i] % 1 === 0) {
        retval++;
      }
    }
    return "Number of Integers: " + retval;
  };

  const countDecimalNumbers = (array) => {
    let retval = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number" && array[i] % 1 !== 0) {
        retval++;
      }
    }
    return " Number of Decimal Numbers: " + retval ;
  };

  const countStrings = (array) => {
    let retval = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "string") {
        retval++;
      }
    }
    return " Number of Strings:  " + retval;
  };
  return countItegerNumbers(array) + '\n' +  countDecimalNumbers(array) + '\n' + countStrings(array)
};

const ex6 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    let result = countItems(array);
    console.log("Number of Integers: " + result.numIntegers)
    console.log("Number of Decimal Numbers: " + result.numDecimals)
    console.log("Number of Strings: " + result.numStrings)
};

const countItems = (array) => {

}
main();
