
// items.pop();
// items.unshift("cherry");

// console.log(items.indexOf("cherry")+1);

// for(let i=0; i<items.length; i++){
//     console.log(`the ${i+1} item is ${items[i]}`);
// }

// items.sort().reverse();
// for(let item of items){
//     console.log(item);
// }

// // spread operator
// let numbers = [1,2,3,4,5,6,7,8,9];
// max = Math.max(...numbers);
// min = Math.min(...numbers); 
// console.log(max);

//// join
// let names = ["ali", "ahmed", "sara", "mona"];
// users = [...names[0]];
// console.log(users);
// console.log(names.join(" - "));

//// rest operator
// function openFridge(...foods){
//     console.log(foods);
// }

// openFridge("apple", "banana", "cherry", "milk", "juice");

// // use of rest operator in sum function
// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// console.log(`Your total bill is $${sum(1,2,3,4,5)}`);







function roll(){
    const numberDice = document.getElementById("numberDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];
    for(let i=0; i<numberDice; i++){
        let value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png">`);
        }
        diceResult.textContent = `You rolled: ${values.join(", ")}`;
        diceImage.innerHTML = images.join(" ");
}

