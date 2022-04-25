// lambda in java

// function greet()
// {
//     return "Good Day";
// }
// (<paramter list>) => {body of the function, returns}
// var greet = () => {
//     return "Good Morning";
// };

var greet = () => "Good Morning !!";

console.log(greet());

var greetUser = (uname) => "Welcome "+uname;
console.log(greetUser('Shalini'));
var profitorloss = (cp, sp)=>{
    if(cp > sp)
        return "Loss";
    else
    return "Profit";
}
console.log(profitorloss(100, 80));

function calculate(nos, op)// v = 10, op = square
{
    for(var n of nos)
     document.write(`<p>Operate on v : ${op(n)}</p>`);
}

calculate([1,2,3,4,5], (v) => v*v);
calculate([1,2,3,4,5], (v) => v*v*v);
