document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successAlert = document.getElementById('successAlert');

    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name').value;

            // 1. Tampilkan Alert browser (Syarat tugas)
            alert('Pesan Anda telah terkirim, ' + nameInput + '!');

            // 2. Tampilkan notifikasi di halaman (Sesuai foto referensi)
            if(successAlert) {
                successAlert.classList.remove('d-none');
            }

            // Reset form setelah kirim
            form.reset();
        });
    }
});