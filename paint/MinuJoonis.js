function kustuta() {
    const pyhi = document.getElementById('pyhi');
    if (pyhi.getContext) {
        const ctx = pyhi.getContext('2d');
        ctx.clearRect(0, 0, 400, 300); // Очистка холста
    }
}

function katus() {
    const canvas = document.getElementById('pyhi');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = 'Nimetu.png';

        img.onload = function () {

            ctx.drawImage(img, 0, 0, 100, 100, 130, 50, 140, 100);
        };
    }
}

function aken() {
    const canvas = document.getElementById('pyhi');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(220, 198, 30, 0, Math.PI * 2, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
}
function maja() {
    const canvas = document.getElementById('pyhi');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = 'Nimetu.png';
        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }
}

