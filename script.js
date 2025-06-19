// script.js - DraftingOnly Landing Page
// This file is intentionally left blank for now.
// Add interactivity here if needed in the future

document.addEventListener("DOMContentLoaded", function () {
	// About section animation on scroll
	const aboutSection = document.querySelector(".about");
	const aboutCards = document.querySelectorAll(".about-feature-card");
	if (aboutSection) {
		const observer = new window.IntersectionObserver(
			(entries, obs) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						aboutSection.classList.add("visible");
						aboutCards.forEach((card, i) => {
							setTimeout(() => card.classList.add("visible"), 180 + i * 120);
						});
						obs.disconnect();
					}
				});
			},
			{ threshold: 0.2 }
		);
		observer.observe(aboutSection);
	}
});
