const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = form.name.value;
	const email = form.email.value;
	const password = form.password.value;
	console.log({ name, email, password });
});
