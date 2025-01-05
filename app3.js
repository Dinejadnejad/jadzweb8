document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar__links');

    // Tambahkan event listener pada setiap link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Mencegah aksi default (seperti reload)
            const targetPage = link.getAttribute('href'); // Ambil nilai href
            window.location.href = targetPage; // Arahkan pengguna ke halaman target
        });
    });
});
