const ELEMENTS = document.querySelectorAll(".details");

ELEMENTS.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("closed");
        ELEMENTS.forEach((e) => {
            if (e !== element) {
                e.classList.add("closed");
            }
        });
    });
});