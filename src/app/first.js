const element = document.querySelector('.project__container__animation__item-elem-request');
let position = 0;
let isAnimating = true;

function animate() {
    if (isAnimating) {
        position += 1;

        if (position === 450) {
            position = 0;
            element.style.transform = `translateX(${position}px)`;
        }

        element.style.transform = `translateX(${position}px)`;

        requestAnimationFrame(animate);
    }
}

animate();
