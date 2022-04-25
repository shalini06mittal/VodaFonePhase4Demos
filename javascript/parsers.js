//var no = parseInt(prompt('enter a number', 2));
var no = parseFloat(prompt('enter a number', 2));
console.log(typeof(no));
/**
 * except addition it automatically converts numbers
 * stored in string to number
 * only for + it concatenates
 * NaN , null, undefined
 */
document.write(`<p>${no * 4}</p>`);
document.write(`<p>${no + 4}</p>`);
document.write(`<p>${no / 4}</p>`);
document.write(`<p>${no - 4}</p>`);
// reference error is when a variable is not even declared
var city ="Mumbai";
document.write(`<p>${city}</p>`);

