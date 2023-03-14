let currentVal = '';

function addValue(val) {
	currentVal += val;
	document.getElementById('display').value = currentVal;
}

function clearDisplay() {
	currentVal = '';
	document.getElementById('display').value = '';
}

function calculate() {
	let result = eval(currentVal);
	document.getElementById('display').value = result;
	currentVal = result.toString();
}

function squareRoot() {
	let val = document.getElementById('display').value;
	let result = Math.sqrt(val);
	document.getElementById('display').value = result;
	currentVal = result.toString();
}

function reroute() {
	alert("Oops! That website isn't operational yet. Please check back later. Sorry for the inconvenience!");
}
