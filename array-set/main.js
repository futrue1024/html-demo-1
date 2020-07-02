//利用循环push进新的数组，判断是否已在新数组存在。
let array = [1, 5, 2, 3, 4, 2, 3, 1, 3, 4];
let newArray = [];
for (let i = 0; i < array.length; i++) {
  if (newArray.indexOf(array[i]) === -1) {
    newArray.push(array[i]);
  }
}
console.log(newArray);
//数组去重
let array = [1, 5, 2, 3, 4, 2, 3, 1, 3, 4];
let m = new Map(); //变量提升
for (let i = 0; i < array.length; i++) {
  m.set(array[i], array[i]);
  console.log(m.values());
  if (i === array.length - 1) {
    console.log([...m.values()]);
  }
}
document.documentElement;
