let carousel = document.querySelector('.carousel');
let cells = carousel.querySelectorAll('.carousel__item');
let currentIndex = 0;
let rotateFn = 'rotateX';
let radius, theta;

function rotateCarousel() {
    let angle = theta * currentIndex * -1;
    carousel.style.transform = `translateZ(-${radius}px) ${rotateFn}(${angle}deg)`;
}

function setupCarousel(numberOfCells) {
    theta = 360 / numberOfCells;
    let cellSize = carousel.offsetWidth;
    radius = Math.round((cellSize / 2) / Math.tan(Math.PI / numberOfCells));
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        if (i < numberOfCells) {
            cell.style.opacity = 1;
            let cellAngle = theta * i;
            cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
        } else {
            cell.style.opacity = 0;
            cell.style.transform = 'none';
        }
    }
    rotateCarousel();
}

setupCarousel(5);

setInterval(() => {
    currentIndex++;
    rotateCarousel();
}, 2000);
