function hello() {
	console.log("hello homework3");
	return;
}

hello();

function stringToInt(input) {
	var output = parseInt(input);
	return output;
}
function maskNumber(input) {
	var mask_number = "*******"+input.substring(7,11);
	return mask_number; 
}

function getAverage(input_array) {
	var avg=0;
	var sum=0;

	for(var i=0;i<input_array.length;i++){
		sum+=input_array[i];
	}
	avg = sum/(input_array.length);
	return avg; 
}

function isMultipleSeven(input) {
	if(input%7==0)
		return true;
	else
		return false;
}

function operation(input,a,b){
	var output;
	switch(input) {
 		case "add":
 			output = a+b;
			break;
		case "substract":
			output = a-b;
			break;
		case "multiply":
			output = a*b;
			break;
		case "divide":
			output = a/b;
			break;
		default:
			console.log("Not supported")
			break;
	}
	return output;

}

function triangleMtn(input){
	var str="";
	for(var i = 0 ; i < input ; i++){
		for(var j = 0 ; j < i+1 ; j++){
			str+="*";
		}
		str+="\n";
	}
	console.log(str);
}