document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-theme');

    toggleThemeButton.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        toggleThemeButton.textContent = document.body.dataset.theme === 'dark' ? '☀️' : '🌙';
    });

    // Animações suaves para o formulário
    const formFields = document.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        field.addEventListener('focus', () => {
            field.style.transition = 'border-color 0.3s ease-in-out';
        });
    });
});
