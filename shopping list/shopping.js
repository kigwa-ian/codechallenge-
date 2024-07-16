document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('shopping-form');
    const input = document.getElementById('item-input');
    const list = document.getElementById('shopping-list');
    const clearButton = document.getElementById('clear-button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addItem(input.value);
        input.value = '';
    });

    list.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('purchased');
        }
    });

    clearButton.addEventListener('click', () => {
        list.innerHTML = '';
    });

    function addItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
    }
});
