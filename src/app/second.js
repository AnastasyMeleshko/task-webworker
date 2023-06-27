const block = document.querySelector('.project__container__animation__item-elem-timeout');
let position = 0;
let direction = 'right';

const animate = () => {
    if (direction === 'right') {
        position += 5;
        block.style.left = `${position}px`;

        if (position >= 445) {
            direction = 'left';
        }
    } else {
        position -= 5;
        block.style.left = `${position}px`;

        if (position <= 0) {
            direction = 'right';
        }
    }

    setTimeout(animate, 300);
};

animate();
