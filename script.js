const btns = document.querySelectorAll('.btn-sign');
const articleBox = document.querySelectorAll('article');
const activeClass = 'ativo';

articleBox[0].classList.add(activeClass);

function activeForm(index) {
    articleBox.forEach((content) => {
        content.classList.toggle(activeClass);
    });
    articleBox[index].nextElementSibling.classList.add(activeClass);
}

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => { 
        activeForm(index);
    });
});