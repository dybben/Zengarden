document.addEventListener('mousemove', (e) => {
    const mask = document.querySelector('.payload-mask');

    if (mask) {
        // Få position og dimensioner af payload-mask
        const maskRect = mask.getBoundingClientRect();

        // Beregn musens relative position i forhold til masken
        const x = ((e.clientX - maskRect.left) / maskRect.width) * 100;
        const y = ((e.clientY - maskRect.top) / maskRect.height) * 100;

        // Tjek, om musen er inden for maskens område
        if (
            e.clientX >= maskRect.left &&
            e.clientX <= maskRect.right &&
            e.clientY >= maskRect.top &&
            e.clientY <= maskRect.bottom
        ) {
            // Opdater maskens position og størrelse
            mask.style.webkitMaskPosition = `${x}% ${y}%`;
            mask.style.maskPosition = `${x}% ${y}%`;
            mask.style.webkitMaskSize = '60% 60%'; // Størrelsen af gradientcirklen
            mask.style.maskSize = '60% 60%';
        } else {
            // Skjul effekten, når musen forlader området
            mask.style.webkitMaskSize = '100% 100%';
            mask.style.maskSize = '100% 100%';
        }
        
    }
});





document.querySelectorAll('.cta').forEach((button) => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link');
        if (link) {
            window.location.href = link; // Naviger til linket
        }
    });
});