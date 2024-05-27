const form = document.querySelectorAll('.form')
const menuClose = document.querySelector(".menuClose");
const menuOpen = document.querySelector(".menuOpen");
const nav = document.querySelector("nav");

menuOpen.addEventListener("click", () => {
  nav.classList.add("openup");
});
menuClose.addEventListener("click", () => {
  nav.classList.remove("openup");
});


function sendToWhatsapp(){
	let number = "+919871641179";

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;
    let url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
	+ "Message : " +message+ "%0a%0a";


	window.open(url, '_blank').focus();
}

