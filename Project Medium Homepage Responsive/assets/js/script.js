// animazione delle M, e cambio colore nav bar quando scrolli sotto
document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.getElementById('navb');
    let main = document.getElementById('trending');
    setInterval(animateMPaths, 30000);
    window.addEventListener('scroll', function () {
        var rect = main.getBoundingClientRect();

        if (rect.top <= 0) {
            navbar.classList.add('white-bg');
        } else {
            navbar.classList.remove('white-bg');
        }
    });
});
function animateMPaths() {
    const paths = document.querySelectorAll('g');

    paths.forEach((path) => {
        const delay = Math.random() * 300;
        path.style.animationDelay = `${delay}s`;
    });
}


animateMPaths();