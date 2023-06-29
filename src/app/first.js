const element = document.querySelector(
  ".project__container__animation__item-elem-request"
);
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

let t1;

export async function startSorts() {

  if (window.Worker) {
    console.log('Start sorting process');
    t1 = performance.now();
    const worker = new Worker(new URL("./worker.js", import.meta.url));
    worker.onmessage = receivedWorkerMessage;

    let arrToSort1 = [];
    for (let i = 0; i < 100000; i++) {
      let randomNum = Math.floor(Math.random() * 100) + 1;
      arrToSort1.push(randomNum);
    }

    worker.postMessage({ array1: arrToSort1 });
  }
}

function receivedWorkerMessage(event) {
  const sortedArrays = event.data;
  const t2 = performance.now();
  console.log(`Sorting process has been finished. It took ${t2 - t1}ms to cope with it.`);
  console.log("Result:", sortedArrays);
}

document.getElementsByClassName("project__btn")[0].addEventListener("click", startSorts);
