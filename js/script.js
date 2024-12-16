import source from './store.js';

const calendar = document.getElementById('calendar');

// crea caselle per il calendario

for (let i = 1; i <= 25; i++) {
    const column = document.createElement('div');
    column.className = (i === 25) ? 'col-12' : 'col-2';
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = i;

    column.appendChild(box);
    calendar.appendChild(column);
}