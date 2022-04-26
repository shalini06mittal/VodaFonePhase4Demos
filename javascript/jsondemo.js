//https://code-boxx.com/create-table-from-array-javascript/
var employee = `{
    "name":"shalini",
    "city":"Mumbai",
    "country":"India"
}`;
// convert string to json
employee = JSON.parse(employee);
var pele = document.getElementById('p1');
pele.innerHTML = `<p>${employee.name} : ${employee['city']}</p>`;

employee.city = "Delhi";
pele.innerHTML += `<p>${employee.name} : ${employee['city']}</p>`;
employee.phone = "213123323";
// convert json to string
pele.innerHTML += `<p>${JSON.stringify(employee)}</p>`;

var mytable  = `<table border='1'><tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Country</th>
                    </tr><tr>`;

Object.keys(employee).forEach(key=>mytable += `<td>${employee[key]}</td>`)
   
mytable +='</tr></table>';

pele.innerHTML = mytable;


var employees =[
    {
        "name":"shalini",
        "city":"Mumbai",
        "country":"India"
    },
    {
        "name":"maria",
        "city":"Sinagpore",
        "country":"Singapore"
    },
    {
        "name":"Sia",
        "city":"Delhi",
        "country":"India"
    },
    {
        "name":"Roma",
        "city":"Pune",
        "country":"India"
    }
];

var mytable  = `<table border='1'><tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                    </tr>`;
for(var employee of employees)
{
    mytable+="<tr>";
    Object.keys(employee).forEach(key=>mytable += `<td>${employee[key]}</td>`);
    mytable+="</tr>";
}
mytable +='</tr></table>';
pele.innerHTML = mytable;




var books = [
    {
        title: 'The Stranger',
        author: 'Albert Camus',
        alreadyRead: true
    },
    {
        title: 'Binging with Babish',
        author: 'Andrew Rea',
        alreadyRead: true
    },
    {
        title: 'You Suck at Cooking: ',
        author: 'You Suck at Cooking',
        alreadyRead: false
    }];
function createTable() {

    var headers = ["Title", "Author", "Read?"];
    var table = document.createElement("TABLE");  //makes a table element for the page
        
    for(var i = 0; i < books.length; i++) {
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = books[i].title;
        row.insertCell(1).innerHTML = books[i].author;
        row.insertCell(2).innerHTML = books[i].alreadyRead;
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for(var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
    }

    document.body.append(table);
}
createTable();