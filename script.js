// function ValidateEmail(input) {
// 	validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// 	if (input.value.match(validRegex)) {
// 		alert('Valid email address!');
// 		document.form1.text1.focus();
// 		return true;
// 	} else {
// 		alert('Invalid email address!');
// 		document.form1.text1.focus();
// 		return false;
// 	}
// }

const inputField = document.querySelector('.form__input');
const button = document.querySelector('.form__button');

button.addEventListener('submit', () => {
	if ((inputField.value = '')) {
		inputField.getAttribute('placeholder') = 'Enter your email';
	}
});
