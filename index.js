const form = document.querySelector('form');

const input = document.querySelector('#to-do-list');

const body = document.querySelector('body');

const p = document.querySelector('p');

function generateLiHandler() {
	const ul = document.querySelector('ul');
	const liSection = document.createElement('section');
	const newLi = document.createElement('li');
	const btnDeleteLi = document.createElement('button');

	if (!input.value) {
		throw 'Please enter a valid input.';
	}

	newLi.textContent = input.value;

	btnDeleteLi.textContent = 'Delete';
	btnDeleteLi.setAttribute('class', 'btn-delete');

	ul.append(liSection);
	liSection.append(newLi);
	liSection.append(btnDeleteLi);

	p.textContent = '';

	newLi.addEventListener('click', generateLiHandler);
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	try {
		generateLiHandler();
	} catch (error) {
		p.textContent = error;
		console.error('InputError: ', error);
	}
	form.reset();
});

const ul = document.querySelector('ul');
const li = document.querySelector('li');
const section = document.querySelector('section');
const btnDeleteLi = document.querySelectorAll('.btn-button');

ul.addEventListener('click', (event) => {
	if (event.target === li) {
		console.log(event.target);
	}
	console.log(event.target);
});
