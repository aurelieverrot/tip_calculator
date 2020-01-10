// Calculate tip - main function
function calculateTip() {

	var billAmount = document.getElementById("amount").value;
	var option = document.getElementById("option-value").value;
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
	var result = (billAmount * option) / nbPeople;
	result = Math.round(result * 100) / 100;
	result = result.toFixed(2);
	console.log(result);

}

// Hide the tip amount on load ?????



// function call when button is clicked
document.getElementById("calculate").onclick = function() {
	calculateTip();
};


// function that let appear the option chosen
 