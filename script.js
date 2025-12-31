// console.log('Hello script!')
// console.log(x);
// // Hoisting
// // Context 
// //event loop
// var x = 50
// var v = (x="Unknown",y=8) => {
//     console.log("name:",x);

// }   
// v()
// v("Nikhil")
// v('abc',x)
// let n = "ABC"

// let arr = [1,2,3,4,5,6,7,8,8,9];
// // create a function to find sum of all 
// //elements

// function foo(){
//     var g = x1 + 5;
//     console.log(" :22 ~ foo ~ g:", g)
// }

// foo();
// var x1 = 30;

// let a = 90 ;
// {
//     a = 20;
// }
// console.log("Value of a ?",a);


// let b;
// // var a =0;
// (function test(){
//     var c= 16;
//     console.log(c);
//     // let a =20;
// })();


// // console.log(a());
// (function a(){
//     var a =10;
//     console.log(a);
// })()

// console.log(1=='1');
// const factorial = (num) => {
//     console.log(" factorial ~ num:", num)
//     if (num === 0 || num === 1)
//         return num;
//     return num * factorial(num - 1);
// }

// console.log(factorial(5));

// const data = {
//     details: { name: 'ABC', age: 12, id: 1 },
//     address: { name: 'def', age: 18, id: 2 },
//     Contact: { name: 'Ghi', age: 21, id: 3 },
// }
// console.log(typeof data);

// // Print the name of user2.
// console.log(data.user2.name);
// // Print the age of user3.
// console.log(data[key].age);
// // Print the id of user1.
// console.log("Id------>", data['user1'].id);
// // Print all details of user1.
// console.log("USer 1 details: " + data.user1);
// // Count how many users are present in data.
// console.log(Object.keys(data).length);
// console.log(Object.values(data));

// // Loop on Object


// // Use a loop to print all user names.
// for (let key in data) {
//     for(let subKey in data[key]){

//         console.log(data[key][subKey]);
//     }
// }
// for (let value of Object.values(data)) {
//     console.log(value);
// }
// let array2 = Object.values(data).forEach(element => {
//     console.log(" ~ :90 ~ element:", element)
// });
// // console.log(" ~ :92 ~ array:", array)

// // Use a loop to print all user ages.

// // Print name and age of each user.

// // Print user keys (user1, user2, user3).

// // Store all user names in an array.

// // Convert the user object into an array of user objects.
// let userArray = Object.values(data);
// console.log(" ~ :106 ~ userArray:", userArray)

// // Using map(), return an array of only user names.
// const array = Object.values(data).map(element => element.name);
// console.log(" ~ :92 ~ array:", array)

// // Using map(), return an array of user ages.
// const ages = Object.values(data)
//     .map(user => user.age);
// console.log(" ~ :112 ~ ages:", ages)

// // Create an array of user id and name only.
// const cities = ["Nagpur", "Delhi", "Mumbai"]
// const nameId = Object.values(data)
//     .map((user, index) => {
//         return {
//             name: user.name.charAt(0).toUpperCase()
//                 + user.name.slice(1).toLowerCase(),

//             id: user.id + 100,

//             canVote: user.age >= 18,
//             city: cities[index]
//         }
//     });
// console.log(" ~ :123 ~ nameId:", nameId)

// // Convert user names first letter
// //  to uppercase using map().

// //find if there any person can vote in data
// //print true or false

// let canVote 
//  Object.values(data).forEach(user=>{
//     if(user.age>18) return canVote = true;
// }
// )
// canVote = Object.values(data).
//             find(user => user.age>=18)

// canVote = Object.values(data).
//             some(user => user.age>=18)

// canVote =Object.values(data).
//             filter(user => user.age>=18)

const user = {
    details: { name: 'ABC', age: 12, id: 1 },
    address: {
        city: 'Nagpur', zipcode: 441501,
        state: 'Maharastra', country: "India"
    },
    Contact: {
        email: 'Ghi@gmail.com',
        phone: 9876543210
    },
}
const user1 = {
    details: { name: 'ABC', age: 12, id: 1 },
    address: {
        city: 'Nagpur', zipcode: 441501,
        state: 'Maharastra', country: "India"
    },
    Contact: {
        email: 'Ghi@gmail.com',
        phone: 9876543210
    },
}
// const data = [user,user1]
// details -> name -> 'Abc" 
//           age -> 12
for (let key in user) {
    console.log(key, '---->');
    for (let subKey in user[key]) {
        console.log(subKey, '--->',
            user[key][subKey]);
    }

}
import something, { getRandomString } from "./youtube/script.js";
something()
getRandomString
