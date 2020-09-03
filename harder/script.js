function myFunction() {

	var x, text;
	var y, text;

  	// Get the value of the input field with id="numb"
  	x = document.getElementById("numb").value;
  	y = x.charAt(0).toLowerCase();

 	 // If x is Not a Number or less than one or greater than 10
  	if (y == 'j') {
    	text = "Goodbye " + x;
  	} 
  	else {
    	text = "Hello " + x;
  	}
 	document.getElementById("demo").innerHTML = text;
}

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    console.log("Goodby " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }


}
