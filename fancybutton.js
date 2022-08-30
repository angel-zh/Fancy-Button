const button = document.querySelector('button');

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", function () {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
})