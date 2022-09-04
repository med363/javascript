let lettres =['a','b']
let numbers = [1,2,3,4,5,0]
const arr=[1,2,3,4]
console.log(lettres.concat(['c']) , //['a','b','c']
console.log(lettres.join(['-'])),  // 'a-b'
console.log(lettres.slice(1)), //['b']
console.log(lettres.indexOf('b')), //1
// ['a','b','b','b'].lastIndexOf('b') //3
console.log(numbers.map(x=> x * 2)), //[2,4,6,8,10,0]
console.log(numbers.sort())) /*[0,1,2,3,4,5]*/
console.log(numbers.reverse()) /*[5,4,3,2,1,0]*/
console.log(numbers.reduce((x,y)=> x *y)); /*0*/
console.log(numbers.length); /*6*/
console.log(numbers.every(x=>x<10)); /*true*/
console.log(numbers.some(x => x < 3)); /*true*/
arr.shift()   //arr=[2,3,4]
console.log(arr);
arr.unshift() 
console.log(arr);
arr.pop() //arr=[2,3]
console.log(arr);
arr.push(5) //[2,3,5]
console.log(arr);
//autre methode comme push ajut un elt 
let arr2= [...arr,6]
console.log(arr2);

//destract.
let [a,b,c]= arr
console.log(a,b,c);