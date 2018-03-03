{
	const form = document.getElementById('myForm');

	function handleFormSubmit(event) {
		event.preventDefault();

		const inputDate = document.getElementById('date');
		const myDate = new Date(inputDate.value);

		const feedbackDate = inputDate.nextElementSibling;
		if (isNaN(myDate)) {
			inputDate.focus();
			inputDate.value = '';
			feedbackDate.hidden = false;
		}
		else {

			feedbackDate.hidden = true;
		}

		// console.log('Form Submitted', event);
		console.log('Selected Date Information');
		console.log(`myDate : ${myDate}`);

		console.log(`Month: ${myDate.getUTCMonth()}`);
		console.log(`Day: ${myDate.getUTCDay()}`);
		console.log(`Year: ${myDate.getUTCYear()}`);
		console.groupEnd();

		const month = myDate.getUTCMonth();
		const day = myDate.getUTCDay();
		const year = myDate.getUTCYear();
	}

	form.addEventListener('submit', handleFormSubmit, false);
// 	form.addEventListener('change', handleFormSubmit, false); 
}

//return astroSign; at the end of the given function