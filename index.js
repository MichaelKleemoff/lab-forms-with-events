const form = document.querySelector('form');
const input = document.querySelector('#to-do-list');
const body = document.querySelector('body');
const p = document.createElement('p');

function generateLiHandler() {
	const ul = document.querySelector('ul');
	const newLi = document.createElement('li');

	if (!input.value) {
		throw 'Please enter a valid input.';
	}

	newLi.textContent = input.value;
	ul.append(newLi);
	newLi.addEventListener('click', generateLiHandler);
}

const lis = document.querySelectorAll('li');
for (const li of lis) {
	if (li) {
		li.addEventListener('click', () => {
			console.log(li);
			li.style.textDecoration = 'line-through';
		});
	}
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	try {
		generateLiHandler();
		if (p) {
			p.remove();
		}
	} catch (error) {
		p.textContent = error;
		body.append(p);
	}

	form.reset();
});
