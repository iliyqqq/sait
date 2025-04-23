document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const toggleBtn = document.getElementById('toggleBtn');
    let visible = false;
    
    cards.forEach(card => card.classList.add('hidden'));
    
    toggleBtn.addEventListener('click', () => {
        visible = !visible;
        cards.forEach(card => {
            card.classList.toggle('hidden');
        });
        toggleBtn.textContent = visible ? 'Скрыть интересы' : 'Показать интересы';
    });
});
