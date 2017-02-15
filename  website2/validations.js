function createuser() {

	if (onchangesubmit()) {
		alert("HELLO");
		document.getElementById("registerid").disabled = false;
		var last = document.getElementById("dashboard");
		var span = document.createElement('span');
		var linkText = document.createTextNode(firstname + " " + lastname);
		span.appendChild(linkText);
		span.title = email;
		span.className = "dashboard_new"
		last.appendChild(span);
	} else {
		document.getElementById("registerid").disabled = true;
	}

}

function CheckFirstname() {
	var firstname = document.getElementById("first_name").value;
	var firstname_reg = /[a-zA-Z].{3,}/;
	if (firstname === "") {
		alert("Enter First Name");
		return false;
	}
	if (!firstname_reg.test(firstname)) {
		alert("First Name is Invalid");
		return false;
	}
}

function CheckAddressp() {
	var addressp = document.getElementById("addressp").value;
	if (addressp === "") {
		alert("Enter the permenent address");
		return false;
	}
}

function CheckAddressc() {
	var addressc = document.getElementById("addressc").value;
	if (addressc === "") {
		alert("Enter the current address");
		return false;
	}
}

function CheckEmail() {
	var email = document.getElementById("email").value;
	var email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email === "") {
		alert("Enter the email id");
		return false;
	}
	if (!email_reg.test(email)) {
		alert("Email ID Invalid");
		return false;
	}
}

function CheckPhone() {
	var phone = document.getElementById("phone").value;
	var phone_reg = /^(\+91|\+91-|0)?\d{10}$/;
	if (phone === "") {
		alert("Enter the contact number");
		return false;
	}
	if (!phone_reg.test(phone)) {
		alert("Enter 10 digit number");
		return false;
	}
}

function CheckPassword() {
	var password = document.getElementById("password").value;
	if (password === "") {
		alert("Enter the password");
		return false;
	}
}

function CheckConfirmpassword() {
	var password = document.getElementById("password").value;
	if (password === "") {
		alert("Enter the password");
		return false;
	}

	var confirmpassword = document.getElementById("confirmpassword").value;
	if (confirmpassword === "") {
		alert("Please confirm password")
		return false;
	}
	if (password != confirmpassword) {
		alert("Password did not matched");
		return false;
	}
}

function onchangesubmit() {
	console.log('text');
	var firstname = document.getElementById("first_name").value;
	var firstname_reg = /[a-zA-Z].{3,}/;
	var lastname = document.getElementById("last_name").value;
	var addressp = document.getElementById("addressp").value;
	var addressc = document.getElementById("addressc").value;
	var email = document.getElementById("email").value;
	var email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var phone = document.getElementById("phone").value;
	var phone_reg = /^(\+91|\+91-|0)?\d{10}$/;
	var password = document.getElementById("password").value;
	var confirmpassword = document.getElementById("confirmpassword").value;

	if (firstname === "") {
		alert("Enter First Name");
		return false;
	}
	if (!firstname_reg.test(firstname)) {
		alert("First Name is Invalid");
		return false;
	}

	if (addressp === "") {
		alert("Enter the permenent address");
		return false;
	}

	if (addressc === "") {
		alert("Enter the current address");
		return false;
	}

	if (email === "") {
		alert("Enter the email id");
		return false;
	}
	if (!email_reg.test(email)) {
		alert("Email ID Invalid");
		return false;
	}

	if (phone === "") {
		alert("Enter the contact number");
		return false;
	}
	if (!phone_reg.test(phone)) {
		alert("Enter 10 digit number");
		return false;
	}

	if (password === "") {
		alert("Enter the password");
		return false;
	}

	if (confirmpassword === "") {
		alert("Please confirm password")
		return false;
	}
	if (password != confirmpassword) {
		alert("Password did not matched");
		return false;
	}

}



function checkAddress(checkbox) {
	if (document.getElementById("checkbox").checked) {
		var addressC = document.getElementById("addressc");
		addressC.value = document.getElementById("addressp").value;
		document.getElementById('addressc').readOnly = true;
	} else {
		document.getElementById('addressc').readOnly = false;
	}
}

function reset() {
	document.getElementById("checkbox").checked = false;
	document.getElementById("first_name").value = "";
	document.getElementById("last_name").value = "";
	document.getElementById("addressp").value = "";
	document.getElementById("addressc").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("password").value = "";
	document.getElementById("confirmpassword").value = "";
}

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var d = 0; d < dropdowns.length; d++) {
			var openDropdown = dropdowns[d];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}