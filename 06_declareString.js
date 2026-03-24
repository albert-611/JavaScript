var firstName = "Albert ";
var LastName = "Smith";

console.log(firstName+LastName);

//Escaping Literal Quotes in Strings

// use '\' before "" quotation -> (\") like this
var myStr = "I am a \"double Quoted\"String inside\"double quotes\"";

console.log(myStr);

// use of single quotation for string
var link = '<a href="https://www.example.com">Click here</a>'
console.log(link);

/***** 
 Code output
 \'     single quote
 \"     Double Quote
 \\     backslash
 \n     newLine
 \r     carriage return
 \t     tab
 \b     backspace
 \f     form feed
 *****/

 myStr = "\\FirstLine\n\t\\SecondLine\n\t\t\\ThirdLine";
 console.log(myStr)