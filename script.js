// Game variables
let score = 0;
let level = 1;
let clicksWorth = 1;

// DOM variables
const scoreDisplay = document.getElementById('score-display');
const levelDisplay = document.getElementById('level-display');
const clicksWorthDisplay = document.getElementById('clicks-worth-display');
const extraInfoDisplay = document.getElementById('extra-box-display');
const cookie = document.getElementById('cookie');
const extraClicksBtn = document.getElementById('extra-clicks-btn');

function cookieClick() {
  score += clicksWorth;
  updateScore();
  levelUp();
  animateCookie();
}

cookie.addEventListener('click', cookieClick);

function levelUp() {
  const nextLevel = Math.floor(score / 25) + 1;
  if (nextLevel > level) {
    level = nextLevel;
    clicksWorth = level + 1;
    updateLevel();
    updateClicksWorth();
  }
}

function buyExtraClicks() {
  if (score >= 50) {
    score -= 50;
    clicksWorth += 1;
    updateScore();
    updateClicksWorth();
  } else {
    alert("You don't have enough points to buy extra clicks!");
  }
}

function animateCookie() {
  cookie.classList.remove('active');
  setTimeout(() => {
    cookie.classList.add('active');
  }, 100);
}

function updateScore() {
  scoreDisplay.innerHTML = `${score}`;
}

function updateLevel() {
  levelDisplay.innerHTML = `Level: ${level}`;
}

function updateClicksWorth() {
  clicksWorthDisplay.innerHTML = `Clicks worth: ${clicksWorth}`;
}
