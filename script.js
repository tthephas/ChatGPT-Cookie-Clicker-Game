// Game variables
let score = 0;
let level = 1;
let clicksWorth = 1;

// DOM variables
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const cookie = document.getElementById('cookie');
const extraClicksBtn = document.getElementById('extra-clicks-btn');

function cookieClick() {
  score += clicksWorth;
  updateScore();
  levelUp();
  cookie.classList.remove('active');
  setTimeout(() => {
    cookie.classList.add('active');
  }, 100);
}

cookie.addEventListener('click', cookieClick);

function levelUp() {
  const nextLevel = Math.floor(score / 25) + 1;
  if (nextLevel > level) {
    level = nextLevel;
    clicksWorth = level + 1;
    updateLevel();
  }
}

const clicksWorthDisplay = document.getElementById('clicks-worth');

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

function updateScore() {
  scoreDisplay.innerHTML = `Score: ${score}`;
}

function updateClicksWorth() {
  clicksWorthDisplay.innerHTML = `Clicks worth: ${clicksWorth}`;
}

function updateLevel() {
  levelDisplay.innerHTML = `Level: ${level}`;
}
