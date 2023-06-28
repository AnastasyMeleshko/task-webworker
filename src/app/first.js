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


// Bubble sort

function bubbleSort(array) {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Quick sort

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


async function runSortingAlgorithms() {

    //array with 100000 elements filled with random numbers
    let array = [];
    for (let i = 0; i < 100000; i++) {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        array.push(randomNum);
    }

    try {
        console.log('Sorting process started');
        const bubbleSortedArray = await bubbleSort(array);
        console.log('Bubble Sort finished:', bubbleSortedArray);
        const quickSortedArray = await quickSort(array);
        console.log('Quick Sort finished:', quickSortedArray);
    } catch (error) {
        console.error('Error:', error);
    }
}

let btn = document.querySelector(".project__btn");
btn.addEventListener("click", runSortingAlgorithms);




