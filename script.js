const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = document.querySelector('.form__input');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-icon');
const button = document.querySelector('.form__button');

button.addEventListener('click', (e) => {
	e.preventDefault();
	checkEmail();
});

const checkEmail = () => {
	if (!regEx.test(email.value)) {
		errorMsg.style.display = 'block';
		errorIcon.style.display = 'block';
	} else {
		errorMsg.style.display = 'none';
		errorIcon.style.display = 'none';
	}
};
