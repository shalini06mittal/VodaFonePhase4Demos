function Customer(name, email, phone)// class in java
{
    console.log(this);
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.display = function(){
        return "Name "+this.name+" Email "+this.email;
    }
}
var c1 = new Customer('Shalini','shalini@mail.com','234234234')
console.log(c1.email)

// function prototyping

console.log(c1.display())
Customer.prototype.getPhone = function()
{
    console.log('phone '+this.phone);
}

c1.getPhone();

Array.prototype.display = function(){
    console.log('display')
}
var nos =[1,2,3,4,5];
nos.display();

var fruits  =['apple','orange'];
fruits.display()

class Customer{

}
class SubCustomer extends Customer{}