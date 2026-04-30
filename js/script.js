document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successAlert = document.getElementById('successAlert');

    if(form) {
        form.addEventListener('submit', function(e) {

            e.preventDefault();
            

            const nameInput = document.getElementById('name').value;


            alert('Pesan Anda telah terkirim, ' + nameInput + '!');


            if(successAlert) {
                successAlert.classList.remove('d-none');
            }

            form.reset();
        });
    }
});