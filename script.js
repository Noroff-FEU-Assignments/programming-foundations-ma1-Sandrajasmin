//TASK ONE

//string value
var mountain = "K2";
console.log("Second highest mountain in the world is" + " " + mountain);

//number value 
var integer = 4020;
console.log("The height is" + " " + integer + "m");

//Boolean value
console.log(mountain < integer);

/*TASK TWO. Declare two variables. 
Assign your first name to one of the variables 
and your last name to the other. 
Concatenate (join) the variables, 
assign them to a third variable and 
console log the value of the third variable.*/


var firstName = "Sandra";
var lastName = "Møller-Sørensen";

var fullName = "Sandra" + " " + "Møller-Sørensen";
console.log(fullName);

var nameType = typeof (fullName);
console.log(typeof (fullName));


/*TASK THREE. Check the type of the value "frog"
 with the typeof operator and assign the result to a variable. 
 Console log the variable value with a label, e.g. 
 “The type of frog is ___”.*/

var animal = "frog";
console.log(typeof (animal));

var animalType = typeof (crazyfrog);
var animalType = "The type of frog is crazyfrog";
console.log(animalType);

/*4. Declare and initialise a variable called orderHasShipped 
with a boolean value. Create an if statement that checks if 
orderHasShipped is true.
If it is true, console log the string value "The order shipped".
 If not, console log the string value "The order did not ship". */

var orderHasShipped = true;

if(orderHasShipped === true) {
    console.log("the order shipped");
}

/*5. Create a for loop that counts from 7 to 13. 
Console log the value of the counter variable inside the loop. */

for(var count = 7; count <= 13; count++) {
    console.log(count);
}



