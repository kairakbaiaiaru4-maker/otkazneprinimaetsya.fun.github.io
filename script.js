const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {

    wrapper.innerHTML = `
    
    <h1>Ск-101 қыздары шын жүректен мерекелеріңмен құттықтайды❤️</h1>

    <div class="card">
        <div class="meme">
            Құрметті біздің группаның ұлдары! Сіздерді 7 мамыр - Отан қорғаушылар күнімен шын жүректен құттықтаймыз.Әрдайым дендерін сау,көңілдерің көтеріңкі болсын.Армандарына жетіп, үлкен жетістікке жете беріндер🫶🏻
Осы мереке сендерге тек қуаныш,шабыт және жаңа жетістіктер әкелсін!💙
        </div>

        <div class="info">🎖 Мерекеге орай сіздерді жылы әрі көңілді кешке шақырамыз✨
Біз бірге уақыт өткізіп, әдемі көңіл-күймен әдемі естеліктер жасаймыз💙
</div>
        <div class="info">📍Өтетін орны: Уақыт жақындағанда айтамыз🤫</div>
        <div class="info">🕰️Уақыты: 13 мамыр 18:00</div>

        <div class="info">💣 Уровень веселья: 100%</div>
        
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







