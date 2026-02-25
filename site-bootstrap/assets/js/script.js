document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    const toggleBtn = () => {
      backToTop.style.display = window.scrollY > 250 ? "flex" : "none";
    };

    window.addEventListener("scroll", toggleBtn);
    toggleBtn();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
