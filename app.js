let result = 0;

// Calculate tip - main function
function calculateTip() {

	var billAmount = document.getElementById("amount").value;
	var option = document.getElementById("dropdown-options").value;
	var nbPeople = document.getElementById("nbpeople").value;

// alert if no input
	if (billAmount === "" || option == 0) {
		alert("Please enter values");
		return;
	}

// check if number of people is empty or less than one
	if (nbPeople === "" || nbPeople <= 1) {
		nbPeople = 1;

	}

// Calculate the tip divided by number of people
	result = (billAmount * option) / nbPeople;
	result = Math.round(result * 100) / 100;
	result = result.toFixed(2);
	console.log(result);

}


// function call when button is clicked
document.getElementById("calculate").onclick = function() {
	calculateTip();
	document.getElementById("tip-result").innerHTML = `The tip is $ ${result} per person`;
};


// function that let appear the option chosen
