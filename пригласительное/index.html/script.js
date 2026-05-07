const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {

    wrapper.innerHTML = `
    
    <h1>🔥 ДОСТУП РАЗРЕШЁН 🔥</h1>

    <div class="card">
        <div class="meme">
            Когда сказали «просто встреча»…<br>
            А это оказывается 7 мая 😳🔥
        </div>

        <div class="info">🎖 Событие: Праздник 7 мая</div>
        <div class="info">📍 Локация: ВСТАВЬ СЮДА</div>
        <div class="info">🕒 Время: ВСТАВЬ СЮДА</div>

        <div class="info">💣 Уровень веселья: 100%</div>
        <div class="info">😂 Мемы: гарантированы</div>

        <button onclick="alert('Ты уже в списке 😎')">
            Принять приглашение
        </button>
    </div>

    `;

});

function moveNoButton() {

    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// ПК — наведение мышкой
noBtn.addEventListener('mouseover', moveNoButton);

// ТЕЛЕФОН — касание
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // чтобы не успевали нажать
    moveNoButton();
});

wrapper.innerHTML = `
<div class="access-screen">

    ТВОЙ КОД ТУТ

</div>
`;








