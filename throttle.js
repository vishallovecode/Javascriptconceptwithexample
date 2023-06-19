// setTimeout
// setInterval

// action  => callback back functiom
const throttle = (callback, delay) => {
  let waiting = false;
  return (...args) => {
    if (waiting) {
      return;
    }
    callback(...args);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, 5000);
  };
};

const sum = (a, b) => {
  console.log(a + b);
  // calculation
};

const throttlesum = throttle(sum, 1000);

throttlesum(10, 20);

throttlesum(30, 60);
setTimeout(() => {
  throttlesum(40, 60);
}, 5000);
