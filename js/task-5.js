function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector('.widget');
const colorEl = widgetEl.querySelector('.color');

widgetEl.addEventListener('click', onWidgetClick);

function onWidgetClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorEl.textContent = color;
}