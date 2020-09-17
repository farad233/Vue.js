(function () {
    const form = document.querySelector('.add-adress')
    const btn = document.querySelector('.btnn');
    if (btn !== null) {
        btn.addEventListener('click', () => {
            form.classList.toggle('active');
        })
    }
}())
