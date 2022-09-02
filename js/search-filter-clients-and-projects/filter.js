var input = document.getElementById("filter-project");
input.addEventListener("input", myFunction);

function myFunction(e) {
var filter = e.target.value.toUpperCase();

var list = document.getElementById("articles");
var divs = list.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
        var a = divs[i].getElementsByTagName("a")[0];
        console.log(a)
                    
        if (a) {
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                divs[i].style.display = "";
            } else {
                divs[i].style.display = "none";
            }
        }       
	}

}