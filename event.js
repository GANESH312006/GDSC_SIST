document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");

    function showOnScroll() {
        events.forEach(event => {
            const rect = event.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                event.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});
