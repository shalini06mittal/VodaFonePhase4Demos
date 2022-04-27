class Customer{
    constructor(name, email)
    {
       console.log('parent constructor')
       this.name = name;
       this.email = email;
    }
    show()
    {
        console.log(this.name+" "+this.email);
    }
}

let cust1 = new Customer('shalini','shalini@mail.com');
cust1.show();

class RegularCustomer extends Customer{
    
    constructor()
    {
        super('sheela','sheela@test.com');
        console.log('Regular customer class')
    }
    show()
    {
        console.log('Name ' +this.name+" "+this.email);
    }
    pay()
    {
        console.log('pay cash on delivery');
    }
}

let r1 = new RegularCustomer();
r1.pay();
r1.show();