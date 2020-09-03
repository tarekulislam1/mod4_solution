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
