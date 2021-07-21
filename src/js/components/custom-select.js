import vars from '../_vars';


if (vars.$customSelect) {
    vars.$customSelect.forEach(el => {
        el.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('custom-select--open');

            if (e.target.classList.contains('custom-select__item')) {
                let text = e.target.textContent;
                e.currentTarget.querySelector('.custom-select__top').textContent = text;
            }
        });
    });
}