console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted successfully.")
	// console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



// const imgComp = document.querySelector("img")
// imgComp.onmouseoever = function() {
// 	imgComp.style.display = 'block'
// }

// // sayHelloButton.addEventListener("mouseover", () => {
//     sayHelloButton.style.backgroundColor = "black";
//     sayHelloButton.style.color = "white";
// // })