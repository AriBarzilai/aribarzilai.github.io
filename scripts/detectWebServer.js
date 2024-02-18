document.addEventListener('DOMContentLoaded', function () {
    if (window.location.protocol === 'file:') {
        document.getElementById('error-message').style.display = 'block';
    }
});