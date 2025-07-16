async function convertToPDF() {
    const fileInput = document.getElementById('textFile');
    const file = fileInput.files[0];

    if (!file) {
      alert('Please select a text file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
      const textContent = event.target.result;

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF();
      pdf.text(textContent, 10, 10);
      pdf.save('converted.pdf');
    };
    reader.readAsText(file);
  }