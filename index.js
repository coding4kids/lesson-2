/**
 * Before you can use a library, you have to install it for node to import it. To install a library, you have to know the name
 * Once you know the name you can say 
 * npm install <library name>
 * for eg you can type the following in terminal: npm install prompt
 */
// use the installed library called prompt
var prompt = require('prompt');

prompt.start();

prompt.get(['num1', 'num2'], function (err, result)  {
    var sum = Number.parseInt(result.num1) + Number.parseInt(result.num2);
    var difference = Number.parseInt(result.num1) - Number.parseInt(result.num2);
    var product = Number.parseInt(result.num1) * Number.parseInt(result.num2);
    var quotient = Number.parseInt(result.num1) / Number.parseInt(result.num2);    
    console.log('num1 + num2 = ' + sum);    
    console.log('num1 - num2 = ' + difference); 
    console.log('num1 * num2 = ' + product);
    console.log('num1 / num2 = ' + quotient);  
    
});
// if (1 == 2) {
//     console.log('It is true');
// }else {
//     console.log('It is false');
// }