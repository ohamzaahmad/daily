const temp = document.getElementById("temperatureInput");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

const  submit = document.getElementById("submit");
let result = document.getElementById("result");

function convert(){
    if(celsius.checked){
        celsius = temp.value;
        fahrenheit = (celsius * 9/5) + 32;
        result.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
        
    } else if(fahrenheit.checked){
        let fahrenheit = temp.value;
        let celsius = (fahrenheit - 32) * 5/9;
        result.textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
    } else {
        result.textContent = "Please select a unit to convert to.";
    }
    temp.value = "";
    celsius.checked = false;
    fahrenheit.checked = false;
}
