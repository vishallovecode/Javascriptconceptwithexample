// calling the api
// for that we should know what is the url
const base_url = `http://api.quotable.io/random`;
// text container
let container = document.getElementById("container");
// timer
let timer = document.getElementById("timer");
// wpm
let wpm = document.getElementById("wpm");
// quote -container
let quoteContainer = document.getElementById("quote-cont");

let currentIndex = 0;

// Get Quote Function
const getQuote = () => {
  return fetch(base_url).then((res) =>
    res.json().then((result) => result.content)
  );
};

// start Timer
let timerId = null;
let isTimerRunning = false;
let currentDate;
let correctStep = [];
const startTimer = () => {
  timer.innerText = 0;
  isTimerRunning = true;
  currentDate = new Date();
  timerId = setInterval(() => {
    timer.innerText = geTime();
  }, 1000);
};

const geTime = () => {
  return Math.floor((new Date() - currentDate) / 1000);
};
// stop timer
const stopTimer = () => {
  timer.innerText = 0;
  clearInterval(timerId);
  isTimerRunning = false;
};

// clicking on container
window.addEventListener("click", (e) => {
  if (container.contains(e.target)) {
    if (!isTimerRunning) {
      startTimer();
    }
  } else {
    stopTimer();
    resetTypingNumber();
    quoteContainer.childNodes.forEach((elem) => {
      elem.className = "";
    });
    currentIndex = 0;
  }
});

// displayContent
let arrayQuote = [];
const displayContent = async () => {
  const content = await getQuote();
  if (isTimerRunning) {
    stopTimer();
    startTimer();
  }
  arrayQuote = content.split("");
  correctStep = new Array(arrayQuote.length);
  correctStep.fill(-1);
  arrayQuote.forEach((key) => {
    const span = document.createElement("span");
    span.innerText = key;
    quoteContainer.appendChild(span);
  });
  currentIndex = 0;
};

displayContent();

window.addEventListener("keydown", (e) => {
  if (isTimerRunning) {
    const keyCode = +e.keyCode;
    if (
      (charCode > 64 && charCode < 91) ||
      (charCode > 96 && charCode < 123) ||
      charCode === 32 ||
      charCode === 188 ||
      charCode === 186 ||
      charCode === 222 ||
      charCode === 190 ||
      charCode === 191 ||
      charCode === 49 ||
      charCode === 189
    ) {
      if (arrayQuote[currentIndex] == e.key) {
        quoteContainer.childNodes[currentIndex].className = "correct";
        correctStep[currentIndex] = 1;
      } else {
        quoteContainer.childNodes[currentIndex].className = "incorrect";
        correctStep[currentIndex] = -1;
      }
      currentIndex++;
      getWpm();

      if (currentIndex == arrayQuote.length) {
        quoteContainer.innerHTML = "";
        currentIndex = 0;
        displayContent();
      }
      // backspace scenario
    } else if (keyCode == 8) {
      if (currentIndex === 0) return;
      currentIndex--;
      quoteContainer.childNodes[currentIndex].className = "";
    } else {
      console.error("Hey error occurred");
    }
  }
});

const getWpm = () => {
  if (geTime() > 0) {
    const wpm1 = Math.round(
      parseFloat(getCorrectTypingNumber()) / 5.0 / (parseFloat(geTime()) / 60.0)
    );
    wpm.innerText = wpm1;
  }
};

function getCorrectTypingNumber() {
  let count = 0;
  correctStep.forEach((item) => {
    if (item == 1) {
      count++;
    }
  });
  return count;
}

function resetTypingNumber() {
  correctStep = new Array(arrayQuote.length);
}
