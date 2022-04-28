// RestTemplate => to consume API's?
/**
 * front end => Ng/ React/ vue/
 * back end => spring/.net/ python/ php ...
 * database => mysql, sql server, oracle...
 * 
 * web application => DO NOT USE spring MVC
 * WE USE SPRING BOOT REST API => COMMUNICATED WITH THE DATABASE
 * AND EXPOSES DATA OVER A REST API
 */
var ele = document.getElementById('p1');

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data=>{
   displayTodos(data);
})
.catch(err => console.log(err));

function displayTodos(todos)
{
    var str = ''
    for (let todo of todos)
    {
        str += `<p>Title : ${todo.title}</p>`;
        str += `<p>Id : ${todo.id}</p>`;
    }
    ele.innerHTML = str;
}
