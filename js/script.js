// --- Custom Cursor Logic ---
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot moves instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline moves with delay (smooth)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// --- 3D Tilt Effect on Center Content ---
const container = document.getElementById('tilt-container');

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    
    container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// --- Hover Magnetic Effect for Links ---
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(0, 255, 65, 0.1)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// --- Console Egg ---
console.log("%c Welcome to ALI10X.UZ ", "background: #000; color: #00ff41; font-size: 20px; padding: 10px; border: 1px solid #00ff41;");
