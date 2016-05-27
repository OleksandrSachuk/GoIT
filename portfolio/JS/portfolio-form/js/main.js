// start only after DOM has already load
window.onload = function() {

	// Looking for changing input value
	document.getElementById('firstName').onchange = function() {

		// Getting input value
		var firstName = document.getElementById('firstName').value;

		// Input value must be no less than 3 symbols and not a number
		if (firstName.length < 3 || !isNaN(parseFloat(firstName)) && isFinite(firstName)) {
			// Mark input border in red color as error
			document.getElementById('firstName').classList.add('error');
		} else {
			// Fill table cell
			document.getElementById('firstNameTable').innerHTML = firstName;
			// Delete input border red color (delete error class)
			document.getElementById('firstName').classList.remove('error');	
		}
	}

	// Looking for changing input value
	document.getElementById('lastName').onchange = function() {
		// Getting input value
		var lastName = document.getElementById('lastName').value;
		// Input value must be no less than 3 symbols and not a number
		if (lastName.length < 3 || !isNaN(parseFloat(lastName)) && isFinite(lastName)) {
			// Mark input border in red color as error
			document.getElementById('lastName').classList.add('error');
		} else {
			// Fill table cell
			document.getElementById('lastNameTable').innerHTML = lastName;
			// Delete input border red color (delete error class)
			document.getElementById('lastName').classList.remove('error');	
		}
	}

	// Looking for changing input value
	document.getElementById('phone').onchange = function() {
		// Getting input value
		var phone = document.getElementById('phone').value;
		// Input value must be only a number
		if (!isNaN(parseFloat(phone)) && isFinite(phone)) {
			// Fill table cell
			document.getElementById('phoneTable').innerHTML = phone;
			// Delete input border red color (delete error class)
			document.getElementById('phone').classList.remove('error');
		} else {
			// Mark input border in red color as error
			document.getElementById('phone').classList.add('error');
		}
	}

	// Looking for changing input value
	document.getElementById('gender').onchange = function() {
		// Getting input value
		var gender = document.getElementById('gender').value;
		// Input value must be only male or female regardless capital letter
		if (gender.toLowerCase() == 'male' || gender.toLowerCase() == 'female') {
			// Fill table cell
			document.getElementById('genderTable').innerHTML = gender.toLowerCase();
			// Delete input border red color (delete error class)
			document.getElementById('gender').classList.remove('error');
		} else {
			// Mark input border in red color as error
			document.getElementById('gender').classList.add('error');
		}
	}

	// Looking for changing input value
	document.getElementById('age').onchange = function() {
		// Getting input value
		var age = document.getElementById('age').value;
		// Input value must be no less than 10 and not more than 125 and only a number
		if (age < 10 || age > 125 || !(!isNaN(parseFloat(age)) && isFinite(age))) {
			// Mark input border in red color as error
			document.getElementById('age').classList.add('error');
		} else {
			// Fill table cell
			document.getElementById('ageTable').innerHTML = age;
			// Delete input border red color (delete error class)
			document.getElementById('age').classList.remove('error');
		}
	}
}
