// rest operator => parameters of a function
// varargs ? ...
// rest should always be the last parameter in a function and cannot have more than 1 rest parametere
function calculate(a, b, ...nos)
{
    console.log(a,b, nos)
    //console.log(nos.reduce( (s,v) => s+v ));
}

calculate(1,2,3,4,5,6,7);

// spread operator => passing arguments to a function
// expand the array
var nos =[1,2,3,4,5,6,7]
calculate(...nos);


var colors=['red','green','blue','orange'];
var morecolors = ['black','yellow','white', colors];
console.log(morecolors);
var morecolors1 = ['black','yellow','white', ...colors];
console.log(morecolors1);

// var c1 = colors[0]
// var c2 = colors[1]
// var c3 = colors[2]
// var c4 = colors[3]

var [c1,...restofcolors] = colors;
console.log(c1,restofcolors);
