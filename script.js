//your JS code here. If required.
function submit(event){
	 event.preventDefault(); 
	let firstName = document.getElementById('firstName').value;
	let lastName = document.getElementById('lastName').value;
	let phoneNumber = document.getElementById('PhoneNumber').value;
	let email = document.getElementById('email').value;

	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`);
}
