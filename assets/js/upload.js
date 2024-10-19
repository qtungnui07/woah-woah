const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');


uploadArea.addEventListener('click', () =>{
    fileInput.click();

});



fileInput.addEventListener('change', () =>{
    const file = fileInput.file[0];
    if (file && file.type.startsWith('image/')){
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.scr = e.target.result;
            preview.style.display='block';

        };
        reader.readAsDataURL(file);
    }
});

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#cccccc';
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '#888888';
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#888888';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});