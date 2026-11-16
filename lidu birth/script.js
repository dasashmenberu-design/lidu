const celebrateButton = document.querySelector("#celebrate-button");
const wishHint = document.querySelector("#wish-hint");
const confettiLayer = document.querySelector("#confetti-layer");

const confettiColors = ["#e9829c", "#f5c86c", "#a98abe", "#8cb8c0", "#f3a98b", "#d8a8c2"];
let celebrationStarted = false;

function launchConfetti() {
	if (!confettiLayer) return;

	const fragment = document.createDocumentFragment();
	for (let index = 0; index < 90; index += 1) {
		const piece = document.createElement("span");
		piece.className = "confetti-piece";
		piece.style.left = `${Math.random() * 100}%`;
		piece.style.backgroundColor = confettiColors[index % confettiColors.length];
		piece.style.setProperty("--drift", `${Math.random() * 240 - 120}px`);
		piece.style.setProperty("--fall-time", `${2.3 + Math.random() * 2.2}s`);
		piece.style.animationDelay = `${Math.random() * 0.8}s`;
		fragment.append(piece);
	}

	confettiLayer.replaceChildren(fragment);
	window.setTimeout(() => confettiLayer.replaceChildren(), 5500);
}

celebrateButton?.addEventListener("click", () => {
	launchConfetti();
	celebrateButton.classList.add("is-celebrated");
	celebrateButton.querySelector("span").textContent = "Wish sent!";
	if (wishHint) wishHint.textContent = "May every lovely thing find its way to you, Lidiya ♡";

	if (!celebrationStarted) {
		celebrationStarted = true;
		celebrateButton.setAttribute("aria-label", "Celebrate Lidiya's birthday again");
	}
});
