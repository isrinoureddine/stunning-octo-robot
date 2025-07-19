const switcher = document.getElementById('languageSwitcher');
const allLangElements = document.querySelectorAll('[data-lang]');

switcher.addEventListener('change', (e) => {
  const selected = e.target.value;
  allLangElements.forEach(el => {
    el.style.display = el.getAttribute('data-lang') === selected ? '' : 'none';
  });
});
