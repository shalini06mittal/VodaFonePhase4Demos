console.log('hello');
// document or window
// npm - node package manager
// timer and interval methods
var i = 0;
var nos =[1,2,3,4,5];
nos.display();
var interval = setInterval(function(){
    console.log(++i);
    if(i==10){
        clearInterval(interval);
        clearTimeout(timeour)
    }
},1000);

var timeour = setTimeout(()=>clearInterval(interval), 5000)