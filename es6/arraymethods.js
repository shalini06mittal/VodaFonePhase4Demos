var colors = ["Red", "Black", "Green","Blue","Grey","Rose","Brown"];

// var ulele = document.getElementById('item');
// colors.forEach(color=>{
//     //console.log(color);
//     var liele = document.createElement('li');
//     liele.innerText = `${color.toUpperCase()}`;
//     ulele.appendChild(liele);
// });

// var colorsupdated = colors.map(color=> color.concat(' is a color'))
// var pele = document.getElementById('p1');


// var bcolors = colors.filter(color=> color.startsWith('B'));
// pele.innerHTML =`<b>${colorsupdated}</b>
//                 <br><b>${colors}</b>
//                 <br><b>${bcolors}</b>`;

var price = [100,200,300,400,500];
var total = 0;
for(var p of price)
    total += p; // p=100, total = 100
console.log(total);

var total = price.reduce((sum, p) => sum+p, 0);
console.log(total);

console.log('Color found ',colors.find(color=>color === 'yellow'))


var employees =[
    {
        "id":1,
        "name":"shalini",
        "city":"Mumbai",
        "country":"India"
    },
    {
        "id":2,
        "name":"maria",
        "city":"Sinagpore",
        "country":"Singapore"
    },
    {
        "id":3,
        "name":"Sia",
        "city":"Delhi",
        "country":"India"
    },
    {
        "id":4,
        "name":"Roma",
        "city":"Pune",
        "country":"India"
    }
];
console.log('employee with id 1 found ', employees.find(emp=> emp.id===1))
console.log('employee with id 10 found ', employees.find(emp=> emp.id===10))

console.log(employees.every(()=> typeof(Object)))
var price = [100,2000,3000,4000,5000];
console.log(price.every((p)=> p>1000 ));
console.log(price.some((p)=> p>10000 ));