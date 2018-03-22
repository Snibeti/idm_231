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

if (whichMonth == 0 && whichDayOfMonth > 31) {
	window.location = "resetti.html";
}	
else if ((whichMonth == 0 && whichDayOfMonth >= 20) || (whichMonth == 1 && whichDayOfMonth <= 18)) {
  AstroSign = "Tiger";
  window.location = "rowan.html";
}
else if (whichMonth == 1 && whichDayOfMonth > 29) {
	window.location = "resetti.html";
}
else if ((whichMonth == 1 && whichDayOfMonth >= 19 && whichDayOfMonth <= 29) || (whichMonth == 2 && whichDayOfMonth <= 20)) {
  AstroSign = "Rabbit";
  window.location ="bunnie.html";
}
else if (whichMonth == 2 && whichDayOfMonth > 31) {
	window.location = "resetti.html";
}
else if ((whichMonth == 2 && whichDayOfMonth >= 21) || (whichMonth == 3 && whichDayOfMonth <= 19)) {
  AstroSign = "Dragon";
  window.location ="drago.html";
}

else if (whichMonth == 3 && whichDayOfMonth > 30) {
	window.location = "resetti.html";
}

else if ((whichMonth == 3 && whichDayOfMonth >= 20) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
  AstroSign = "Cat";
  window.location ="bob.html";
} 

else if (whichMonth == 4 && whichDayOfMonth > 31) {
	window.location = "resetti.html";
}

 else if ((whichMonth == 4 && whichDayOfMonth >= 21) || (whichMonth == 5 && whichDayOfMonth <= 21)) {
  AstroSign = "Horse";
  window.location ="julian.html";
}

else if (whichMonth == 5 && whichDayOfMonth > 30) {
	window.location = "resetti.html";
}

else if ((whichMonth == 5 && whichDayOfMonth >= 22) || (whichMonth == 6 && whichDayOfMonth <= 22)) {
  AstroSign = "Sheep";
  window.location ="vesta.html";
} 

else if (whichMonth == 6 && whichDayOfMonth > 31) {
	window.location = "resetti.html";
}

else if ((whichMonth == 6 && whichDayOfMonth >= 23) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
  AstroSign = "Monkey";
  window.location ="simon.html";
} 

else if (whichMonth == 7 && whichDayOfMonth > 31) {
	window.location = "resetti.html";
}
else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
  AstroSign = "Rooster";
  window.location = "benedict.html";
}

else if (whichMonth == 8 && whichDayOfMonth > 30) {
	window.location = "resetti.html";
}
else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 23)) {
  AstroSign = "Dog";
  window.location ="daisy.html";
}
else if (whichMonth == 9 && whichDayOfMonth > 31) {
	window.location = "resetti.html";
}
else if ((whichMonth == 9 && whichDayOfMonth >= 24) || (whichMonth == 10 && whichDayOfMonth <= 21)) {
  AstroSign = "Pig";
  window.location ="rasher.html";
}
else if (whichMonth == 10 && whichDayOfMonth > 30) {
	window.location = "resetti.html";
}
else if ((whichMonth == 10 && whichDayOfMonth >= 22) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
  AstroSign = "Mouse";
  window.location = "broccolo.html";
}
else if (whichMonth == 11 && whichDayOfMonth > 31) {
	window.location = "resetti.html";
}
else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 0 && whichDayOfMonth <= 19)) {
  AstroSign = "Ox";
  window.location ="angus.html";
} 

}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("shake");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//return astroSign; at the end of the given function