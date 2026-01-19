let numberInput = document.getElementById("ip");
let startBtn = document.getElementById("btn");
let output = document.getElementById("output");

startBtn.addEventListener("click", () => {
  let value = parseFloat(numberInput.value);

  if (isNaN(value)) {
    output.innerText = "Please enter a valid number";
    return;
  }

  function promise1(num) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num), 2000);
    });
  }

  function promise2(num) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num * 2), 2000);
    });
  }

  function promise3(num) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num - 3), 1000);
    });
  }

  function promise4(num) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num / 2), 1000);
    });
  }

  function promise5(num) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num + 10), 1000);
    });
  }

  promise1(value)
    .then((num) => {
      output.innerText = `Result: ${num}`;
      return promise2(num);
    })
    .then((num) => {
      output.innerText = `Result: ${num}`;
      return promise3(num);
    })
    .then((num) => {
      output.innerText = `Result: ${num}`;
      return promise4(num);
    })
    .then((num) => {
      output.innerText = `Result: ${num}`;
      return promise5(num);
    })
    .then((num) => {
      output.innerText = `Final Result: ${num}`;
    })
    .catch(() => {
      output.innerText = "Error occurred";
    });
});
