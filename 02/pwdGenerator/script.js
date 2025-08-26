console.log("hello");
function pwdgen(includedLowerChars, includedUpperChars, includedNumberChars, includedSpecialChars, length) {
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    var allowedchars = "";

    allowedchars += includedLowerChars ? lowerChars : "";
    allowedchars += includedUpperChars ? upperChars : "";
    allowedchars += includedNumberChars ? numberChars : "";
    allowedchars += includedSpecialChars ? specialChars : "";

    if (length < 1) {
        alert("Please select at least one character type.");
        return "";
    }
    if (allowedchars.length === 0) {
        alert("Please select at least one character type.");
        return "";
    }

    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }
    return password;
}

var passwordLength = 12;
var includedLowerChars = true;  
var includedUpperChars = true;
var includedNumberChars = true;
var includedSpecialChars = true;

let password = pwdgen(includedLowerChars, includedUpperChars, includedNumberChars, includedSpecialChars, passwordLength);
console.log("Generated Password: " + password);
console.log("Password Length: " + password.length);
