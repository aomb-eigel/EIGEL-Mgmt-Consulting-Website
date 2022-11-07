var stringCollection = document.getElementsByClassName("employee-description");
var length = 250;
var trimmedString;

for (var i = 0; i < stringCollection.length; i++) {
    trimmedString = stringCollection[i].innerHTML.length > length ? stringCollection[i].innerHTML.substring(0, length - 3) + "..." : stringCollection[i].innerHTML;
    stringCollection[i].innerHTML = stringCollection[i].innerHTML.replace(stringCollection[i].innerHTML, trimmedString);
}