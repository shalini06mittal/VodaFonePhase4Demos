let sports = ['cricket','basketball','tennis','football'];
sports.push('swimming') // modfies the original array
console.log(sports)
// pure functions => do not modify the state but returns a new state everytime
let newsports = sports;
newsports.push('badminton');
console.log(sports)
console.log(newsports)

let newsports1 = [...sports, 'golf'];
//newsports1.push('golf');
console.log(sports)
console.log(newsports1)

let nos =[1,2,3,4,5];
//nos.pop()
// slice returns a new array
let nos1 = nos.slice(0, nos.length-1)
console.log(nos);
console.log(nos1);
// splice modifies the original array and is used for insertion in the array
//nos.splice(1, 2, 100,200);
//nos.splice(2, 0, 100,200);

// spread and slice
let newnos = [...nos.slice(0,1), 4,500, ...nos.slice(4)]
console.log(nos);
console.log(newnos)