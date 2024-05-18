export const scrollBlur = () => {
    const el: Element = document.querySelector(".menu-container");

    if (!el) return;


    window.addEventListener("scroll", function (event) {
        const scrollDistance: number = window.scrollY || 0;


        if (scrollDistance > 0) {
            el.classList.add("blurry");
        } else {
            el.classList.remove("blurry");
        }
    });
};