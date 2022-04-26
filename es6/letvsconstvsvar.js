
console.log(no);
var no = 10;


let no1 = 10;
console.log(no1);

if(no%2 == 0)
{
    var x = 20;
}

console.log(x);
// creates scope
if(no%2 == 0)
{
    let x1 = 20;// x1 is accesiible only within if
}

//console.log(x1);

function f1()
{
    let num = 100;
    console.log('num in f1 ',num);
}
f1()
//console.log('num outside f1 ',num);
const speedoflight = 300000000000;
speedoflight = 232;