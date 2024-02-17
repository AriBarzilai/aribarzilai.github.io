document.addEventListener("DOMContentLoaded", function () {
    fetch('/content/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
});
