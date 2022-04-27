/**
 * js is by default a single threaded application
 * event based 
 * <img  class='img1'/> => html page
 * 
 * java thread?
 */
// var img1 = document.querySelector('.img1');
// img1.addEventListener('load', function(){})
// img1.addEventListener('error', function(){})
// img1.ready()
// .then ()
// .error()

/**
 * Promises are like event listeners but they are a bit different as follows:
 * 
 * 1) it can only succed or fail once and cannot switch between success or failure
 * 2) if a promise succedds , respective callback will be called
 */

//setInterval(()=>{}, 1000)

/**
 * Promises can be in one of the following states:
 * 1) fulfilled : promise is a success
 * 2) rejected : it is a failure
 * 3) pending : nether fulfilled nor rejected
 * 4) settled or completed : done => success or failure
 * 
 * promis constructore takes 1 argument which is a callback function with
 * 2 parameters resolve and reject
 * 
 * promises are eager . as soon as the constructor is created
 * it starts executing the task assigned
 */

//if()
// var isDataRecieved = true;
// var promise = new Promise( (resolve, reject ) =>{
//     setTimeout(()=>{
//         console.log('time up')
//         if(isDataRecieved)
//             resolve('{"name":"shalini"}')
//          else
//             reject('some error');
//     }, 2000);
    
// });
// console.log('starting....');

// promise.then(resp => JSON.parse(resp))
// .then(data => console.log(data.name))
// .catch(err => console.log(err));

// console.log('after promise reolve or reject....');

// var p1 = new Promise(resolve=>setTimeout(() => {
//     resolve('p1')
// }, 1000) )
// var p2 = new Promise(resolve=>setTimeout(() => {
//     resolve('p1')
// }, 5000) )

// Promise.all([p1, p2])
// .then(res => console.log(res));

// Promise.race([p1, p2])
// .then(res => console.log(res));

function getUser(user){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('user data')
        }, 2000);
    });
}
function showUSer()
{
    return getUser().then(info => {
        console.log('user info ',info);
        return true;
    });
}
function showSpinner()
{
    console.log('wait loading...');
}
function waittime(delay, result){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(result);
        }, delay);
    })
}
Promise.race([showUSer(), waittime(300)])
.then(res=>{
    if(!res) showSpinner();
})


const products = [
    { id: 1,  productName: "Burger", price: 3.5 },
    { id: 2,  productName: "Coke", price: 1.5 },
    { id: 3,  productName: "Cheesecake", price: 2.5 },
    { id: 4,  productName: "Donut", price: 3.0 },
  ];
  
function getProductById(id)
{
    //return the product with the id passed
}
function addProduct(product)
{
    // add product in the array
}
function updateProduct(product){}
function display(){// display all the products}