// Select all our buttons and content wrappers
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content-wrapper");

tabButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const targetId = button.getAttribute("data-target");
		const targetContent = document.getElementById(targetId);

		// Check if the clicked tab is already open
		const isOpen = targetContent.classList.contains("open");

		// 1. Close ALL tabs first (this handles the "auto close others" request)
		tabContents.forEach((content) => content.classList.remove("open"));
		tabButtons.forEach((btn) => btn.classList.remove("active"));

		// 2. If the clicked tab was NOT open, open it now.
		// (If it was open, it just stays closed, completing the toggle effect)
		if (!isOpen) {
			targetContent.classList.add("open");
			button.classList.add("active");
		}
	});
});
