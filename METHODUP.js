
			// Submit form function
function submitForm(e) {
	e.preventDefault();
	// Get form values
	const currency = document.getElementById("currency").value;

	// Get payment method values
	const cashAppDropdown = document.getElementById("cash-app-dropdown").value;
	const cashAppName = document.getElementById("cash-app-name").value;
	const bitcoinAddress = document.getElementById("bitcoin-address").value;
	const bitcoinAmount = document.getElementById("bitcoin-amount").value;
	const paypalEmail = document.getElementById("paypal-email").value;
	const paypalAmount = document.getElementById("paypal-amount").value;
	const zelleEmail = document.getElementById("zelle-email").value;
	const zelleAmount = document.getElementById("zelle-amount").value;
	const venmoName = document.getElementById("venmo-name").value;
	const venmoAmount = document.getElementById