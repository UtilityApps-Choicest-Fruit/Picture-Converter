const input = document.getElementById('imageInput');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('convertBtn');
const downloadLink = document.getElementById('downloadLink');
const previewImg = document.getElementById('convertedImg');
const formatSelect = document.getElementById('format');
const dropArea = document.getElementById('dropArea');

// DRAG + DROP FUNCTIONALITY
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.style.background = '#f0e6ff';
});

dropArea.addEventListener('dragleave', () => {
  dropArea.style.background = '#fff';
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.style.background = '#fff';
  input.files = e.dataTransfer.files;
});

// CONVERSION FUNCTION
btn.addEventListener('click', () => {
  const file = input.files[0];
  if (!file) {
    alert('Please select or drop an image.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const selectedFormat = formatSelect.value;
      const mimeType = `image/${selectedFormat}`;
      const dataURL = canvas.toDataURL(mimeType);

      previewImg.src = dataURL;

      downloadLink.href = dataURL;
      downloadLink.download = `converted.${selectedFormat}`;
      downloadLink.style.display = 'inline-block';
    };

    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});
