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

    document.addEventListener('astro:after-swap', () => {
        el = document.querySelector(".menu-container");
    });
};