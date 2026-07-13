let currentZoom = 0.8; // Sets your default starting zoom
const sheet = document.getElementById("mySheet");

function applyZoomSettings() {
	// 1. Apply the zoom scale
	sheet.style.transform = `scale(${currentZoom})`;

	// 2. Do the math to expand the iframe dimensions to fit the container
	// E.g., If zoomed to 0.5 (50%), the iframe needs to be 200% wide to fill the space
	const dimensionCompensation = (1 / currentZoom) * 100;

	sheet.style.width = `${dimensionCompensation}%`;
	sheet.style.height = `${dimensionCompensation}%`;
}

function changeZoom(amount) {
	currentZoom += amount;

	// Optional: Set limits so you can't zoom into infinity or shrink to a pixel
	if (currentZoom > 1.5) currentZoom = 1.5;
	if (currentZoom < 0.4) currentZoom = 0.4;

	applyZoomSettings();
}

function resetZoom() {
	currentZoom = 0.8; // Back to your default
	applyZoomSettings();
}

// Run once when the page loads to set the initial 0.8 zoom
applyZoomSettings();
