// INTERACTIVE THEME & ACCORDION JAVASCRIPT

// Light / Dark Mode Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const themeBtnIcon = document.getElementById("themeBtnIcon");
const themeBtnText = document.getElementById("themeBtnText");

themeToggle.addEventListener("click", () => {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	if (currentTheme === "dark") {
		document.documentElement.removeAttribute("data-theme");
		themeBtnIcon.textContent = "🌙";
		themeBtnText.textContent = "Dark Mode";
		localStorage.setItem("theme", "light");
	} else {
		document.documentElement.setAttribute("data-theme", "dark");
		themeBtnIcon.textContent = "☀️";
		themeBtnText.textContent = "Light Mode";
		localStorage.setItem("theme", "dark");
	}
});

// Initialize user preferred theme from local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
	document.documentElement.setAttribute("data-theme", "dark");
	themeBtnIcon.textContent = "☀️";
	themeBtnText.textContent = "Light Mode";
}
