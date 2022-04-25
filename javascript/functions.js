function greet()
{
    document.write("Hey Good morning");
}

document.write("<br> "+ greet());
// named functions
function add(n1, n2)
{
    console.log(n2)
    console.log(arguments)
    return n1+n2;
}
document.write(`<p>Add(2, 4) : ${add(2,4)}</p>`);
document.write(`<p>Add(2, 4,6,7) : ${add(2,4,6,7)}</p>`);
document.write(`<p>Add(2) : ${add(2)}</p>`);

// functions that take default arguments
function placeOrder(item, drinks ='coke', desert)
{
    document.write(`<p>Item : ${item} , drinks : ${drinks} , Desert : ${desert}</p>`);
}

placeOrder('pizza', 'coke','brownie');
placeOrder('pizza', 'coke');
placeOrder('pizza', 'brownie');

// IIFE => Immediately invoked function expression
// they are invoked only once that is the first time the page loads
// backend calls, caching, pre-processing, basic intialiation

(
    function()
    {
        var no = 100;
        document.write(`<p>No in IIFE: ${no * no}</p>`);
    }
)();

// function expressions
var sub = function(a, b){
    document.write(`<p>Subtract(20,10) : ${a-b}</p>`);
}
console.log(sub);
sub(20,10);

function square(n)
{
    return n*n;
}
function calculate(v, op)// v = 10, op = square
{
    console.log(op);
    document.write(`<p>Operate on v : ${op(v)}</p>`);
}

calculate(10, square);

function outer()
{
    alert('outer function called');
    function inner()
    {
        alert('inner function called');
    }
    function inner1()
    {
        alert('inner 1');
    }
    return {
        "inner":inner,
        "inner1":inner1
    }
    // inner()
    //return inner();
    //return inner;
}
//outer().inner();
// var inn = outer(); // undefined
// console.log(inn());
// console.log(outer()());

var obj = outer();
obj.inner();
obj.inner1();