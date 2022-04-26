let book ={
    "title":"Twilight",
    "author":"Sydney Sheldon",
    "price":567.89,
    "id":1
};

//let title = book.title;
let {title:booktitle, author, pr} = book;
console.log(booktitle, author, pr);

let employee = {
    "id":1,
    "ename":"shalini",
    "city":"Mumbai",
    "country":"India", 
    "company":"Vodafone"
};

let ename, city, country;
// if declared before and initialized later , wrap around ()
({ename, city, country, company="Simplilearn"} = employee);
console.log(ename, city, country,company);

let prop = 'company';
let {[prop]:data} = employee;
console.log('DATA ',data);

let user = {
    "id":1,
    "uname":"shalini",
    "place":{
        "city":"Mumbai",
        "country":"India"
    },
    "company":"Vodafone"
};
let {uname, place:{country:country1}} = user;
console.log(uname, country1);
