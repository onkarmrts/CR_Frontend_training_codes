// let name = "onkar";
// let company = "collegeranker";

// let full_name = `${name} works in ${company}`

// console.log(full_name);




// console.log(4)
//ES5 simple function


// function timesTwo(params){
//     return params * 2
// } 

// timesTwo(43); //86

//ES6 its an arrow function

// var timesTwo = params => params * 2

// timesTwo(4)

// console.log(4)

// var feedTheCat = (cat) => {
//     if(cat === "hungry") {
//         return 'Feed the cat';
//     }else{
//         return "don not feed he cat"
//     }
// } 

// const value = feedTheCat("asdad");

// console.log(value)


// var addValues = (x, y) => {
//     return x + y;
// }

// console.log(addValues(4,6))


//ES5
// var obj = {
//     id: 42,
//     coounter: function counter() {
//         setTimeout(function(){
//             console.log(this.id);
//         }.bind(this), 1000);
//     }
// }


// //ES6

// var obj = {
//     id: 42,
//     counter: function counter() {
//         setTimeout(() => {
//             console.log(this.id)
//         }, 1000)
//     }
// }


// const myTimeout = setTimeout(greet, 5000)

// function greet() {
//     console.log("hello World")
// }

// const employee = {
//     id: 021,
//     name: "james",
//     dept: "cyber"
// }


// //ES5 Object destructuring

// // const id = employee.id;
// // const name = employee.name;

// const {id, name} = employee;

// console.log(id)
// console.log(name)



// const employee = {
//     id: 021,
//     name: "james",
//     dept: {
//         id: '001',
//         name: "spy",
//         address: {
//             street: "30 akurdi chowk",
//             city: "ravet, pune"

//         }

//     }
// }

// const address = employee.dept.address;
// console.log(address)





// const age = employee.age ? employee.age: 21

// console.log(age)

// const {name, age=25} = employee;

// console.log(age)

// const {name, dept, message = `${name} is ${dept}`} = employee

// console.log(message)

// const {dept: department} = employee;
//  console.log(department)
 

// const employee = [
//     {
//         id: 021,
//     name: "james",
//     dept: "cyber"
//     },
//     {
//         id: 023,
//     name: "jhon",
//     dept: "it"
//     },
//     {
//         id: 024,
//     name: "james",
//     dept: "mkt"
//     }
// ]


// for( let {id, name} of employee) {
//     console.log(`${id} is ${name} years old` )
// }


// const user = {
//     'name': 'alex',
//     'adress': '15th park avenue',
//     'age': 21

// }

// const clone = {...user}

// clone === user;
//  console.log(clone)

// const updateUser = {...user, salary: 2146}
// console.log(updateUser)

// const obj1 = {
//     'name': 'alex',
//     'adress': '15th park avenue',
//     'age': 21

// }
// const obj2 = {
//      id: 'alan',
   

// }

// const merge = {...obj1, ...obj2}
// console.log(merge)

// const user = {
//     'name': 'alex',
//     'adress': '15th park avenue',
//     'age': 21

// }

// const {age, ...rest} = user;
// console.log(age, rest)


import {sum, sub} from './calc'

console.log('the sum is', sum(2,3))
console.log('the sub is', sub(2,3))