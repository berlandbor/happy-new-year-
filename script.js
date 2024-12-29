document.addEventListener('DOMContentLoaded', function() {
  // Установим дату Нового Года
  const newYearDate = new Date('January 1, 2025 00:00:00').getTime();

  // Найдём элемент для таймера
  const countdownElement = document.getElementById('countdown');

  if (!countdownElement) {
    console.error('Элемент #countdown не найден.');
    return;
  }

  // Обновляем счетчик каждую секунду
  const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = newYearDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      countdownElement.innerHTML = 'С Новым Годом!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Добавим ведущие нули
    const format = (num) => (num < 10 ? `0${num}` : num);

    countdownElement.innerHTML = `${format(days)}д ${format(hours)}ч ${format(minutes)}м ${format(seconds)}с`;
  }, 1000);
});
