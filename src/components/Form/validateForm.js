export default function validateForm({ name, email, password, confirmPass }) {
	if (!name.trim()) {
		return 'Ime i prezime potrebno';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Email je potreban';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email adresa nije ispravna';
	}
	if (!password) {
		return 'Lozinka je potreban';
	} else if (password.length < 6) {
		return 'Password treba biti 6 znakova ili više';
	}

	if (!confirmPass) {
		return 'Potvrda lozinke je potrebna';
	} else if (confirmPass !== password) {
		return 'Lozinke se ne podudaraju';
	}
	return null;
}
