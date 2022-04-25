
var data =[1,2,3, true, "hello"];
console.log('**** normal ******');
for(var i=0;i<data.length;i++)
{
    console.log(data[i]);
}
console.log('**** for in  ******');
// for in loop
for(var index in data)
    console.log(data[index]);

    console.log('**** for of ******');
// for - of
for(var val of data)
    console.log(val);

var ulele = document.getElementById('item');
var liele = document.createElement('li');
liele.innerText = `Data : ${data}`;
ulele.appendChild(liele);

data.push(100);
var liele = document.createElement('li');
liele.innerText = `Data After Pushing : ${data}`;
ulele.appendChild(liele);

data.unshift(200);
var liele = document.createElement('li');
liele.innerText = `Data After Unshift: ${data}`;
ulele.appendChild(liele);

data.shift();
var liele = document.createElement('li');
liele.innerText = `Data  After shift: ${data}`;
ulele.appendChild(liele);

var liele = document.createElement('li');
liele.innerText = `Data After join : ${data.join(' ')}`;
ulele.appendChild(liele);

