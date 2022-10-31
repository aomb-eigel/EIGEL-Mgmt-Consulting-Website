var string = document.getElementById("employee-description").innerHTML;
var length = 250;
var trimmedString = string.length > length ? 
                    string.substring(0, length - 3) + "..." : 
                    string;
console.log(trimmedString);

document.getElementById("employee-description").innerHTML = string.replace(document.getElementById("employee-description").innerHTML, trimmedString);