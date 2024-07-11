const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(event) {
    drawing = true;
    draw(event); // Start drawing immediately without waiting for mousemove
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath(); // Begin a new path to prevent connecting lines
}

function draw(event) {
    if (!drawing) return;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}
