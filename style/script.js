// Mengambil elemen input warna dan tombol
const colorInput = document.getElementById('colorInput');
const colorButton = document.getElementById('colorButton');
const container = document.querySelector('.container');
const settingsButton = document.getElementById('settingsButton');
const navbar    =   document.querySelector('.navbar');
// Fungsi untuk mengubah warna latar belakang container
function changeColor() {
  const selectedColor = colorInput.value;
  container.style.backgroundColor = selectedColor;
  container.style.backgroundColor = selectedColor;
}

// Menambahkan event listener pada tombol Change Color
colorButton.addEventListener('click', changeColor);

// Fungsi untuk menampilkan/sembunyikan menu pengaturan
function toggleSettings() {
  const colorPicker = document.querySelector('.color-picker');
  colorPicker.classList.toggle('show');
}

// Menambahkan event listener pada tombol Settings
settingsButton.addEventListener('click', toggleSettings);
