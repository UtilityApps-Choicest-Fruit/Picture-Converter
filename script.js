const input = document.getElementById('imageInput');
const canvas = document.getElementById('imageCanvas');
const btn = document.getElementById('convertBtn');

btn.addEventListener('click', () => {
    const file = input.files[0];
    if (!file) {
        alert('Please select an image file.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        console.log(dataURL);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    });
