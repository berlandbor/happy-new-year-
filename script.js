document.addEventListener('DOMContentLoaded', function() {
  // Установим дату Нового Года
  const newYearDate = new Date('January 1, 2024 00:00:00').getTime();

  // Обновим счетчик каждую секунду
  const countdownElement = document.getElementById('countdown');
  setInterval(function() {
    const now = new Date().getTime();
    const distance = newYearDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
  }, 1000);
});