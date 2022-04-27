const book = {
    "title":"core Java",
    "author":["J K Rowling", "Kathy Sierra"],
    "price": 234.56,
    "publisher":"Packt Publishing"
}

console.log(book);
// by default spread operator will not do deep cloning
// we need to explicit clone the nested structure
const newbook = {...book,
     author:[...book.author]
    };
newbook.title ="Core Java Programming";
newbook.year = 2000;

console.log(book)
console.log(newbook)

newbook.author.push('Shalini')
console.log(book)
console.log(newbook)

const players= {
    "name":"Player 1",
    "sport":"Basketball",
    "scores":[
        {"match":"match1" , "score":80},
        {"match":"match2" , "score":90},
        {"match":"match3" , "score":95},
    ]
}

const newplayers = {...players,
    "scores":[...players.scores]
}

newplayers.scores[0].score = 85;
console.log(newplayers);
console.log(players)

const playersobj = JSON.parse(JSON.stringify(players));
playersobj.scores[0].score = 185;
console.log(playersobj);
console.log(players)