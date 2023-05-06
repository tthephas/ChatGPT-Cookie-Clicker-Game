const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');
let score = 0;

cookie.addEventListener('click', () => {
	score++;
	scoreDisplay.textContent = `Score: ${score}`;
});
