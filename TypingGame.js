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
  }
});

// displayContent
let arrayQuote = [];
const displayContent = async () => {
  const content = await getQuote();
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

// small alphabet
// code>65 and code<91
// 188 comma
// 186 ;
// space  32

// 222 '
// dash 189
// / 191
// back space 8
// 190

// keydown

// will handle backspace seperately
window.addEventListener("keydown", (e) => {
  const keyCode = +e.keyCode;
  if (
    (keyCode > 65 && keyCode < 91) ||
    keyCode == 32 ||
    keyCode == 188 ||
    keyCode == 222 ||
    keyCode == 189 ||
    keyCode == 191 ||
    keyCode == 190 ||
    keyCode == 186
  ) {
    if (arrayQuote[currentIndex].toLowerCase() == e.key.toLowerCase()) {
      quoteContainer?.childNodes[currentIndex]?.classList?.add("correct");
      correctStep[currentIndex] = 1;
    } else {
      quoteContainer?.childNodes[currentIndex]?.classList?.add("incorrect");
      correctStep[currentIndex] = -1;
    }
    currentIndex++;
    getWpm();
  }
});

//

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

// Math.round(parseFloat(correctStrokes()) / 5.0 / (parseFloat(Time-Elapsed(sec)) / 60.0));
