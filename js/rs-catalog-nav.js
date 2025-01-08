function toggleClassOnHover(elements, activeClass) {
	elements.forEach((el) => {
		el.addEventListener("mouseenter", () => {
			elements.forEach((item) => item.classList.remove(activeClass));
			el.classList.add(activeClass);
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const items = document.querySelectorAll(".rs-catalog-nav__slide");
	const activeClass = "active";
	toggleClassOnHover(items, activeClass);
});
