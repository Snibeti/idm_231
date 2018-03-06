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
		console.log(`Day: ${myDate.getUTCDate()}`);
		// console.log(`Year: ${myDate.getUTCYear()}`);
		console.groupEnd();

		const month = myDate.getUTCMonth();
		const day = myDate.getUTCDate();
		// const year = myDate.getUTCYear();

		astro(month, day);
	
	}

	form.addEventListener('submit', handleFormSubmit, false);


}

function astro(whichMonth, whichDayOfMonth) {
if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 0 && whichDayOfMonth <= 19)) {
  AstroSign = "Ox";
} else if ((whichMonth == 10 && whichDayOfMonth >= 22) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
  AstroSign = "Mouse";
  window.location = "broccolo.html";
} else if ((whichMonth == 9 && whichDayOfMonth >= 24) || (whichMonth == 10 && whichDayOfMonth <= 21)) {
  AstroSign = "Pig";
} else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 23)) {
  AstroSign = "Dog";
} else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
  AstroSign = "Rooster";
} else if ((whichMonth == 6 && whichDayOfMonth >= 23) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
  AstroSign = "Monkey";
} else if ((whichMonth == 5 && whichDayOfMonth >= 22) || (whichMonth == 6 && whichDayOfMonth <= 22)) {
  AstroSign = "Sheep";
} else if ((whichMonth == 4 && whichDayOfMonth >= 21) || (whichMonth == 5 && whichDayOfMonth <= 21)) {
  AstroSign = "Horse";
} else if ((whichMonth == 3 && whichDayOfMonth >= 20) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
  AstroSign = "Cat";
} else if ((whichMonth == 2 && whichDayOfMonth >= 21) || (whichMonth == 3 && whichDayOfMonth <= 19)) {
  AstroSign = "Dragon";
} else if ((whichMonth == 1 && whichDayOfMonth >= 19) || (whichMonth == 2 && whichDayOfMonth <= 20)) {
  AstroSign = "Rabbit";
} else if ((whichMonth == 0 && whichDayOfMonth >= 20) || (whichMonth == 1 && whichDayOfMonth <= 18)) {
  AstroSign = "Tiger";
  window.location = "rowan.html";
}

}

//return astroSign; at the end of the given function