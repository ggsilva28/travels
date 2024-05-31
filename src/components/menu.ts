export const scrollBlur = () => {
	let el: Element = document.querySelector(".menu-container");

	if (!el) return;

	window.addEventListener("scroll", function () {
		const scrollDistance: number = window.scrollY || 0;

		if (scrollDistance > 0) {
			el.classList.add("blurry");
		} else {
			el.classList.remove("blurry");
		}
	});
};

export const toggleMobile = () => {
    const menuContainer: Element = document.querySelector(".menu-container");
	const menuMobile = document.querySelector(".menu-container-mobile");

	menuMobile.classList.toggle("open");
    menuContainer.classList.toggle("menu-mobile-open");
};
