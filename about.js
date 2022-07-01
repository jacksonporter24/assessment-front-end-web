// console.log("hello world");



function handleSubmit(evt) {
	alert("Your form has been submitted successfully.")
	evt.preventDefault();
	
	// console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);




let imgComp = document.querySelector("img")


imgComp.addEventListener("mouseover", () => {
	alert("You are great! (This is my final compliment.)")
})
