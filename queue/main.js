const divScreen = document.querySelector("#screen");
const btnCreateNumbers = document.querySelector("#createNumbers");
const btnCallNumbers = document.querySelector("#callNumbers");
const spanNewNumber = document.querySelector("#newNumbers");
const spanQueue = document.querySelector("#queue");

let n = 0;
let queue = [];
btnCreateNumbers.onclick = () => {
  n += 1;
  queue.push([n]);
  spanNewNumber.innerText = `${n}号`;
  spanQueue.innerText = queue.toString();
};

btnCallNumbers.onclick = () => {
  let m = queue.shift();
  divScreen.innerText = `请${m}就餐`;
  spanQueue.innerText = queue.toString();
};
