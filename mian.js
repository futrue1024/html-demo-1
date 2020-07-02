let min2 = ([a, b]) => {
  if (a > b) {
    return b;
  } else {
    return a;
  }
};

let min2 = (numbers) => {
  if (numbers[0] > numbers[1]) {
    return numbers[1];
  } else {
    return numbers[0];
  }
};

let min2 = ([a, b]) => {
  a > b ? b : a;
};

let min2 = (numbers) => {
  numbers[0] > numbers[1] ? numbers[1] : numbers[0];
};

let min3 = ([a, b, c]) => {
  return min2([a, min2([b, c])]);
};

let minN = (num) => {
  if (num.length > 2) {
    return minN([num[0], minN(num.slice(1))]);
  } else {
    return Math.min.apply(null, num);
  }
};

let sort2 = ([a, b]) => {
  return a > b ? [b, a] : [a, b];
};

let sort = (numbers) => {
  if (numbers.length > 2) {
    let index = minIdnex(numbers);
    numbers.splice(index, 1);
    return [min].concat(sort(numbers));
  } else {
    return numbers[0] > numbers[1] ? numbers : numbers.reverse();
  }
};

let minIndex = (numbers) => {
  let index = 0;
  for (let a = 1; a < numbers.length; a++) {
    if (numbers[a] < numbers[index]) {
      index = a;
    }
  }
  return index;
};

let minIndex = (numbers) => {
  let index = 0;
  for (let a = 1; a < numbers.length; a++) {
    if (numbers[a] < numbers[index]) {
      index = a;
    }
  }
  return index;
};

//递归排序
let sort = (numbers) => {
  if (numbers.length > 2) {
    let index = minIndex(numbers);
    let min = numbers[index];
    numbers.splice(index, 1);

    return [min].concat(sort(numbers));
  } else {
    return numbers[0] < numbers[1] ? numbers : numbers.reverse();
  }
};

let quickSort = (num) => {
  if (num.length <= 1) {
    return num;
  }
  let index = num.floor(num.length / 2);
  let pivot = num.splice(index, 1)[0];
  let right = [];
  let left = [];
  for (let i = 0; num.length > i; i++) {
    if (num[i] < pivot) {
      return quickSort(right.push(num[i]));
    } else {
      return quickSort(left.push(num[i]));
    }
  }
};

let countSort = (arr) => {
  let hashTable = {},
    max = 0,
    result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in hashTable)) {
      hashTable[arr[i]] = 1;
    } else {
      hashTable[arr[i]] += 1;
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let j = 0; j <= max; j++) {
    if (j in hashTable) {
      for (let a = 0; a < hashTable[j]; a++) {
        result.push(j);
      }
    }
  }
  return result;
};
