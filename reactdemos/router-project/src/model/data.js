let invoices = [
    {
        name:'Santa Barabara',
        number:1995,
        amount:'$10,800',
        due:'12/05/1995'
    },
    {
        name:'Roy Fielding',
        number:2000,
        amount:'$20,800',
        due:'12/31/2000'
    },
    {
        name:'Oceanic Weave',
        number:2001,
        amount:'$9,800',
        due:'31/12/2000'
    },
    {
        name:'Tubut Hampur',
        number:2003,
        amount:'$23,456',
        due:'12/05/2003'
    },
    {
        name:'Open Spaces',
        number:1998,
        amount:'$5,300',
        due:'01/09/1998'
    },
]

export function getInvoices()
{
    return invoices;
}

export function getInvoice(invoiceid)
{
    return invoices.find(
        invoice=>invoice.number === invoiceid);
}

export function deleteInvoice(invoiceid){
  invoices = invoices.filter
  (invoice=>invoice.number !== invoiceid)
}
let expenses =[
    {
      "WHO": "Joe",
      "WEEK": [
        {
          "NUMBER": 3,
          "EXPENSE": [
            {
              "WHAT": "Beer",
              "AMOUNT": 18.00
            },
            {
              "WHAT": "Food",
              "AMOUNT": 12.00
            },
            {
              "WHAT": "Food",
              "AMOUNT": 19.00
            },
            {
              "WHAT": "Car",
              "AMOUNT": 20.00
            }
          ]
        },
        {
          "NUMBER": 4,
          "EXPENSE": [
            {
              "WHAT": "Beer",
              "AMOUNT": 19.00
            },
            {
              "WHAT": "Beer",
              "AMOUNT": 16.00
            },
            {
              "WHAT": "Food",
              "AMOUNT": 17.00
            },
            {
              "WHAT": "Food",
              "AMOUNT": 17.00
            },
            {
              "WHAT": "Beer",
              "AMOUNT": 14.00
            }
          ]
        },
        {
          "NUMBER": 5,
          "EXPENSE": [
            {
              "WHAT": "Beer",
              "AMOUNT": 14.00
            },
            {
              "WHAT": "Food",
              "AMOUNT": 12.00
            }
          ]
        }
      ]
    },
    {
      "WHO": "Beth",
      "WEEK": [
        {
          "NUMBER": 3,
          "EXPENSE": [
            {
              "WHAT": "Beer",
              "AMOUNT": 16.00
            }
          ]
        },
        {
          "NUMBER": 4,
          "EXPENSE": [
            {
              "WHAT": "Food",
              "AMOUNT": 17.00
            },
            {
              "WHAT": "Beer",
              "AMOUNT": 15.00
            }
          ]
        },
        {
          "NUMBER": 5,
          "EXPENSE": [
            {
              "WHAT": "Food",
              "AMOUNT": 12.00
            },
            {
              "WHAT": "Beer",
              "AMOUNT": 20.00
            }
          ]
        }
      ]
    },
    {
      "WHO": "Janet",
      "WEEK": [
        {
          "NUMBER": 3,
          "EXPENSE": [
            {
              "WHAT": "Car",
              "AMOUNT": 19.00
            },
            {
              "WHAT": "Food",
              "AMOUNT": 18.00
            },
            {
              "WHAT": "Beer",
              "AMOUNT": 18.00
            }
          ]
        },
        {
          "NUMBER": 4,
          "EXPENSE": [
            {
              "WHAT": "Car",
              "AMOUNT": 17.00
            }
          ]
        },
        {
          "NUMBER": 5,
          "EXPENSE": [
            {
              "WHAT": "Beer",
              "AMOUNT": 14.00
            },
            {
              "WHAT": "Car",
              "AMOUNT": 12.00
            },
            {
              "WHAT": "Beer",
              "AMOUNT": 19.00
            },
            {
              "WHAT": "Food",
              "AMOUNT": 12.00
            }
          ]
        }
      ]
    }
];

export function getExpenses()
{
    return expenses;
}

export function getExpenseDetails(name)
{
    return expenses.find(expense => expense.WHO === name);
}