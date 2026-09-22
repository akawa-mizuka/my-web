document.addEventListener("DOMContentLoaded", () => {
	const tabGroups = document.querySelectorAll(".tab-nav");

	tabGroups.forEach((group) => {
		const detailsList = group.querySelectorAll("details");

		detailsList.forEach((detail) => {
			detail.addEventListener("toggle", () => {
				if (!detail.open) return;

				detailsList.forEach((otherDetail) => {
					if (otherDetail !== detail) {
						otherDetail.removeAttribute("open");
					}
				});
			});
		});
	});
});
