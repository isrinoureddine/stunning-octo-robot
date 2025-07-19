// تبديل اللغة حسب الاختيار
document.getElementById("languageSwitcher").addEventListener("change", function () {
  const selectedLang = this.value;
  const allTextBlocks = document.querySelectorAll("[data-lang]");

  allTextBlocks.forEach((el) => {
    el.classList.add("hidden");
    if (el.getAttribute("data-lang") === selectedLang) {
      el.classList.remove("hidden");
    }
  });
});
