// ===========================
// TEMA DEGISTIRME (Dark / Light)
// ===========================

// 1. Butonu sec
const themeButton = document.querySelector('#theme-toggle');

// 2. Butona tiklaninca body'ye "light" class'i ekle/cikar
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
});