// // // // let username = "John Ibrahin";
// // // // console.log(`Hello, ${username}!`); // Template Literals
// // // // console.log(username.replaceAll("o", "0"));// replace o with 0
// // // // console.log(username.padStart(15, "*").padEnd(17, "*"));//add padding for total length of 17

// // // // let firstName = username.slice(0, 4)  // cut first 4 characters
// // // // console.log(firstName);

// // // // console.log(username.charAt(5)); // get character at index 5
// // // // console.log(username.slice(0, 1)); // get first character

// // // const email = "example@gmail.com";
// // // console.log(email.slice(email.indexOf("@")));

// // let username;
// // username = window.prompt("Enter your name");
// // username = username.trim();
// // username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
// // alert(`Hello, ${username}`);
























// let loggedin = false;
// let username;
// let password;

// while (!loggedin) {
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");

//     if (username === "admin" && password === "1234") {
//         loggedin = true;
//         alert("Login successful!");
//     } else {
//         alert("invalid credentials, try again.");
//     }
// }   


// function add(x,y) {
//     return x + y;
// }
// x = window.prompt("Enter first number");
// y = window.prompt("Enter second number");   
// window.alert(add(Number(x), Number(y)));
// console.log("So it's working");

// function isEven(num) {
//     return num % 2 === 0 ? true : false;

// }
// let x = window.prompt("Enter a number?");
// if(isNaN(x)){
//     window.prompt("Enter a valid number");
// }else{
//     window.alert(isEven(Number(x)));
// };

// function isValidEmail(email){
//     if(email.includes("@")){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isValidEmail("hamza@"));


// scope of varaiables

// let x = 0;
// console.log(x);
// func1();
// func2();

// function func1(){
//     let x = 1;
//     console.log(x);
// }

// function func2(){
//     let x = 2;
//     console.log(x);
// }