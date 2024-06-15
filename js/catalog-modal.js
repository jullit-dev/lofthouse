const catalogBtn = document.querySelectorAll('.card__btn');
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal__box');
const modalBtnClose = document.querySelector('.modal__btn-close');
const modalTitle = document.querySelector('.modal__title');
const modalDescr = document.querySelector('.modal__descr');

// Открыть модальное окно с карточкой
const openModal = (e) => {
    let cadrTitle = '';
    let cardItemUrl = '';
    let cardText = '';

    modal.classList.add('open');

    if (e.value === '1') {
        cadrTitle = 'Пентхаус “Loft Олимп”';
        cardItemUrl = './../img/apartments/01.jpg';
        cardText = 'Text1';
    } else if (e.value === '2') {
        cadrTitle = 'Апартаменты “Nice Loft”';
        cardItemUrl = './../img/apartments/02.jpg';
        cardText = 'Text2';
    } else if (e.value === '3') {
        cadrTitle = 'Апартаменты “Loft Studio”';
        cardItemUrl = './../img/apartments/03.jpg';
        cardText = 'Text3';
    } else if (e.value === '4') {
        cadrTitle = 'Loft квартира “Престиж”';
        cardItemUrl = './../img/apartments/04.jpg';
        cardText = 'Text4';
    };

    modalTitle.textContent = cadrTitle;
    modalDescr.innerHTML = `
            <div class="modal__imgs">
                <img src="${cardItemUrl}" alt="${cadrTitle}">
            </div>
            <div class="modal__text">
                ${cardText}            
            </div>
    `;
}

// Закрыть модальное окно с карточкой
const closeModal = () => {
    modal.classList.remove('open');
}


// Открыть модально окно с карточкой
catalogBtn.forEach((e) => {
    e.addEventListener('click', () => {
        openModal(e)
    })
})

// Закрыть модальное окно с карточкой 
modalBtnClose.addEventListener('click', () => {
    closeModal()
})

document.querySelector("#modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    closeModal()
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeModal()
    }
});

