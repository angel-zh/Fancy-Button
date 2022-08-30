const button = document.querySelector('button');

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function generateGradient() {
  const firstColor = generateRandomColor();
  const secondColor = generateRandomColor();
  const randomGradient = `linear-gradient(to bottom, ${firstColor}, ${secondColor})`
  document.body.style.background = randomGradient;
}

button.addEventListener("click", generateGradient);