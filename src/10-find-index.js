  let firstValue = 0;
  let lastValue = array.length - 1;
  let pos = -1;
  let foundValue = false;
  let middle;

  while (!foundValue && firstValue <= lastValue) {
    middle = Math.floor((firstValue + lastValue) / 2);
    if (array[middle] === value) {
      foundValue = true;
      pos = middle;
    } else 
      if (array[middle] > value) {
      lastValue = middle - 1;
    } else {
      firstValue = middle + 1;
    }
  }
  return pos;
