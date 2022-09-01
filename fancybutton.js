const button = document.querySelector('button');
const firstColorText = document.getElementById('firstColor');
const secondColorText = document.getElementById('secondColor');

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
  firstColorText.innerText = firstColor;
  firstColorText.style.color = firstColor;
  firstColorText.style.background = "rgba(255,255,255,.7)";
  firstColorText.style.padding = "8px 8px 5px 8px";
  secondColorText.innerText = secondColor;
  secondColorText.style.color = secondColor;
  secondColorText.style.background = "rgba(255,255,255,.7)";
  secondColorText.style.padding = "8px 8px 5px 8px";
}

button.addEventListener("click", generateGradient);