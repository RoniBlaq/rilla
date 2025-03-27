const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector(".nav-menu");
menuIcon.addEventListener("click", () => {
	if (menuIcon.className === "bx bx-menu-alt-right") {
		menuIcon.className = "bx bx-x";
	} else {
		menuIcon.className = "bx bx-menu-alt-right";
	}
	navMenu.classList.toggle("active");
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
});

const logo = document.querySelector(".logo");
window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		logo.classList.add("scrolled");
	} else {
		logo.classList.remove("scrolled");
	}
});