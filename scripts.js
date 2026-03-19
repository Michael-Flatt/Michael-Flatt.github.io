const redirectors = document.querySelectorAll('.redirector');

redirectors.forEach(container => {
    container.addEventListener('click', function() {
        const destination = this.getAttribute('data-url');
        if (destination) {
            window.location.href = destination;
        }
    });
});