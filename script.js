// Fungsi untuk memuat halaman tanpa reload
function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Memuat halaman home secara default saat website dibuka
document.addEventListener("DOMContentLoaded", function () {
    loadPage('home');
});
