// functions that will generate values in demand
/**
 * generators are special functions with * in the function definition
 * they do not return a single value but returns an iterator object
 * with a sequence of values.
 * yield is a keyword which is used in generator functions that pauses 
 * the execution of the generator while maintaining the internal state
 */
function * makeRangeIterator(start = 0, end = 10, step = 1)
{
    let count = 0;

    for(let i=start ; i<end;i++)
    {
        count++;
        yield i;
    }
    return count;
}
let c1 = makeRangeIterator();
console.log(c1)
console.log(typeof(c1))
for (values of c1)
    console.log(values)
    

function f1()
{}

