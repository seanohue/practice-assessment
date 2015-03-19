/*
ISBN - International Standard Book Number
-----------------------------------------
There are two ISBN standards: ISBN-10 and ISBN-13.

Here are some valid examples of ISBN-13:

ISBN-13:    9780470059029
            978 0 471 48648 0
            978-0596809485
            978-0-13-149505-0
            978-0-262-13472-9

ISBN-13 is made up of 12 digits plus a check digit. Spaces and hyphens may be included in a code, but are not significant. This means that 9780471486480 is equivalent to 978-0-471-48648-0 and 978 0 471 48648 0.

The check digit for ISBN-13 is calculated by multiplying each digit alternately by 1 or 3 (i.e., 1 x 1st digit, 3 x 2nd digit, 1 x 3rd digit, 3 x 4th digit, etc.), summing these products together, taking modulo 10 of the result and subtracting this value from 10, and then taking the modulo 10 of the result again to produce a single digit.

Create a function that takes a string and returns true if that is a valid ISBN-13 and false otherwise.
*/

var isISBN = function(input){

	var isbn = getRidOfCrap(input);
	//console.log(isbn);
	isbn = isbn.split('');
	isbn = makeNumbers(isbn);
	//console.log(isbn);



	if (isbn.length === 13){

		
		var checkDigit = 0;
		//console.log(isbn);
		//console.log(isbn.length);

		//first part of calculating checkdigit
		for(i = 0; i<isbn.length-1; i++){
			if (isEven(i+1)){
				checkDigit+=(isbn[i]*3);
				//console.log("multiplying ="+isbn[i]*3);
				//console.log("digit #"+i+":"+checkDigit);
			}
			else{
				checkDigit+=isbn[i];
				//console.log("digit #"+i+":"+checkDigit);
			}
		}

		//now the modulo part
		checkDigit%=10;
		//console.log(checkDigit);
		checkDigit = (10-checkDigit);
		//console.log(checkDigit);
		checkDigit%=10;
		//console.log(checkDigit);

		//checkin' that digit
		if (checkDigit === isbn[isbn.length-1])
			return true;
	}

	return false;

};

var makeNumbers = function(arr){
	var numbers = [];
	for (i = 0; i < arr.length; i++)
		numbers.push(parseInt(arr[i]));

	return numbers;
}

var getRidOfCrap = function(str){
	var output = str.replace(/\D+|-+/g,'');
	return output;
}

var isEven = function(num){
	if (num%2 === 0)
		return true;
	//console.log('odd');
	return false;
};

console.log(isISBN("978-0-13-149505-0"));


