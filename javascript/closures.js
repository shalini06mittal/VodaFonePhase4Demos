
// closures => basically creates a wrapper around a variable
function counter()
{
    var c = 0;
    function count()
    {
        c++;
        return c;
    }
    return count;
}

var fn = counter();
// console.log(fn());
// console.log(fn());
// c=10;
// console.log(fn()); // 
function clickMe()
{
    
    var ele = document.getElementById('p1');
    console.log(ele.innerText);

    ele.innerText = `Count : ${fn()}`;
    ele.style.color ='red';
}