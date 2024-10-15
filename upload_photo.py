from flask import Flask, request, redirect, render_template
import os

app = Flask(__name__)

# Tạo thư mục 'uploads' nếu chưa có
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Route để hiển thị giao diện tải ảnh
@app.route('/')
def index():
    return render_template('index.html')

# Route xử lý upload ảnh
@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return 'No file part'
    
    file = request.files['image']
    if file.filename == '':
        return 'No selected file'
    
    if file:
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)
        return f'Image uploaded successfully: {filepath}'

if __name__ == '__main__':
    app.run(debug=True)
