// setTimeout
// setInterval

// action  => callback back functiom
// hof
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
    }, delay);
  };
};
const sum = (a, b) => {
  console.log(a + b);
};

const sumWhichDelayBy1Second = throttle(sum, 1000);

sumWhichDelayBy1Second(10, 20);

setTimeout(() => {
  sumWhichDelayBy1Second(140, 20, 100, 200); // will execute
}, 5000);

sumWhichDelayBy1Second(40, 60);

// callback = throttle(sum, 1000)
Array.prototype.mymap = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

const func1 = throttle(sum, 1000);

// [1, 2, 3, 5].mymap(throttle(sum, 1000));

// [1, 2, 3, 5].mymap(func1);

const callme123 = (callback) => {
  console.log(callback);
};

callme123(func1); //
callme123(throttle(sum, 1000)); //

const object = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: null,
          },
        },
      },
    },
  },
  f: {
    f1: {
      f2: {
        f3: [124],
      },
    },
  },
  z: {
    z1: {
      z2: {
        z3: 12345,
      },
    },
  },
};

const object1 = { ...object };
object1.a.b.c = 23;
console.log("object", object); //
console.log("object1", object1);

// json.stringgiyf

// const deepCopy = (obj) => {
//   return updatedObj;
// };

// const deepObject = deepCopy(object);
// deepObject.a.b.c = 12;

let result = {};

const flatObject = (obj) => {
  for (let key in obj) {
    if (
      typeof obj[key] != "object" ||
      Array.isArray(obj[key]) ||
      obj[key] === null
    ) {
      console.log(result, "result");
      result[key] = obj[key];
    } else {
      flatObject(obj[key]); // wrong way
    }
  }
  return result;
};

const updatedResult = flatObject(object);
console.log(updatedResult);

const aa = { f: 123 };
const cc = aa; //
cc.name = "raj"; // a object also changed becase line no.108 we are doing reference copy
const bb = { ...aa }; // spread

bb.name = "vishal"; // this will not effect the original object this is deep copy

console.log("aa", aa); //
console.log("bb", bb); //

// protoype ??

const cloneDeep = (obj) => {
  if (obj == null && typeof obj != "object") {
    return obj;
  }
  const result = {};
  for (let key in obj) {
    result[key] = cloneDeep(obj[key]);
  }
  return result;
};

const updatedObject1 = cloneDeep(object);

updatedObject1.college = "Lpu";

console.log(updatedObject1);
console.log(object);
