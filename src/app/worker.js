self.addEventListener("message", async function(event) {
  const arrToSort1 = event.data.array1;
  const sortedArray1 = await bubbleSort(arrToSort1);
  const sortedArray2 = await quickSort(arrToSort1);
  postMessage({ sortedArray1: sortedArray1, sortedArray2: sortedArray2 });
})

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
