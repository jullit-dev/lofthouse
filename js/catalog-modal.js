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
        cardText = `
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Основные характеристики:
                </h4>
                <ul class="modal__list">
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Площадь:</span>170&nbsp;кв.&nbsp;м</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Этажи:</span>5-й и&nbsp;6-й этажи</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Комнаты:</span>5&nbsp;(просторная гостиная, 3&nbsp;спальни, кабинет)</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Высота потолков:</span>4,5 м</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Вид из окон:</span>панорамный вид на набережную реки Фонтанка и исторический центр города</p>
                    </li>
                </ul>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Интерьер и планировка:
                </h4>
                <p class="modal__item-text">
                    Пентхаус &laquo;Loft Олимп&raquo; отличается открытой планировкой, сочетающей в&nbsp;себе элементы индустриального стиля лофт и&nbsp;современные дизайнерские решения. Высокие потолки и&nbsp;панорамные окна обеспечивают обилие естественного света и&nbsp;создают ощущение простора.
                </p>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Первый этаж:
                </h4>
                <ul class="modal__list">
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Гостиная:</span>просторная зона для приема гостей (40&nbsp;кв.&nbsp;м) с&nbsp;выходом на&nbsp;террасу</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Кухня:</span>открытая кухня (18&nbsp;кв.&nbsp;м) с&nbsp;островом, оснащенная высококачественной бытовой техникой от&nbsp;ведущих мировых производителей (Miele, Siemens)</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Спальня&nbsp;1:</span>уютная спальня (25&nbsp;кв.&nbsp;м) с&nbsp;гардеробной и&nbsp;индивидуальной ванной комнатой (10&nbsp;кв.&nbsp;м)</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Ванная комната:</span>5 кв. м для гостей</p>
                    </li>
                </ul>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Второй этаж:
                </h4>
                <ul class="modal__list">
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Спальня&nbsp;2:</span>уютная спальня (22&nbsp;кв.&nbsp;м) с&nbsp;гардеробной и&nbsp;индивидуальной ванной комнатой (8&nbsp;кв.&nbsp;м)</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Спальня 3:</span>уютная спальня (20&nbsp;кв.&nbsp;м) с&nbsp;гардеробной и&nbsp;индивидуальной ванной комнатой (7&nbsp;кв.&nbsp;м)</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Кабинет:</span>просторный и&nbsp;светлый кабинет (15&nbsp;кв.&nbsp;м), идеально подходящий для работы и&nbsp;отдыха</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Терраса:</span>30&nbsp;кв.&nbsp;м, с&nbsp;зоной для барбекю и&nbsp;лаунж-зоной, откуда открывается захватывающий вид на&nbsp;город</p>
                    </li>
                </ul>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Удобства и&nbsp;технологии:
                </h4>
                <ul class="modal__list">
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Система умного дома:</span>управляйте освещением, климат-контролем и&nbsp;безопасностью прямо со&nbsp;своего смартфона</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Климат-контроль:</span>современные системы вентиляции и&nbsp;кондиционирования обеспечивают комфорт в&nbsp;любое время года</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Безопасность:</span>система видеонаблюдения и&nbsp;круглосуточная охрана</p>
                    </li>
                </ul>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Цена:
                </h4>
                <p class="modal__item-text">150&nbsp;000&nbsp;000&nbsp;рублей</p>
            </div>
        `;
    } else if (e.value === '2') {
        cadrTitle = 'Апартаменты “Nice Loft”';
        cardItemUrl = './../img/apartments/02.jpg';
        cardText = `
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Основные характеристики:
                </h4>
                <ul class="modal__list">
                    <li class="modal__item">
                        <p class="modal__item-text"><span
                                class="modal__item-title">Площадь:</span>85&nbsp;кв.&nbsp;м</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Этажи:</span>3-й этажи</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Комнаты:</span>3&nbsp;(гостиная,
                            2&nbsp;спальни)</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Высота потолков:</span>3,8 м</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Вид из&nbsp;окон:</span>вид на&nbsp;Набережную реки
                                Фонтанка и&nbsp;зеленую зону комплекса</p>
                    </li>
                </ul>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Интерьер и планировка:
                </h4>
                <p class="modal__item-text">
                    Апартаменты &laquo;Nice Loft&raquo; отличаются продуманной планировкой и&nbsp;стильным
                    интерьером, который сочетает индустриальный дизайн и&nbsp;современные решения. Пространство
                    оптимизировано для максимального комфорта и&nbsp;функциональности.
                </p>
                <ul class="modal__list">
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Гостиная:</span>просторная зона
                            для отдыха и&nbsp;приема гостей (30&nbsp;кв.&nbsp;м), соединенная с&nbsp;обеденной зоной
                        </p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Кухня:</span>открытая кухня
                            (12&nbsp;кв.&nbsp;м) с&nbsp;барной стойкой и&nbsp;современной бытовой техникой (Bosch,
                            Electrolux)</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Спальни:</span>
                        <ul>
                            <li>Главная спальня: 20&nbsp;кв.&nbsp;м&nbsp;с&nbsp;гардеробной и&nbsp;отдельной ванной
                                комнатой (6&nbsp;кв.&nbsp;м)</li>
                            <li>Вторая спальня: 15&nbsp;кв.&nbsp;м, идеально подходящая для детской комнаты или
                                кабинета</li>
                        </ul>
                        </p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Ванная
                                комната:</span>7&nbsp;кв.&nbsp;м&nbsp;с&nbsp;современной сантехникой и&nbsp;стильной
                            отделкой</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span
                                class="modal__item-title">Балкон:</span>5&nbsp;кв.&nbsp;м&nbsp;с&nbsp;видом
                            на&nbsp;зеленую зону комплекса, оборудован для комфортного отдыха</p>
                    </li>
                </ul>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Удобства и&nbsp;технологии:
                </h4>
                <ul class="modal__list">
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Система умного
                                дома:</span>управляйте освещением, климат-контролем и&nbsp;безопасностью прямо
                            со&nbsp;своего смартфона</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span
                                class="modal__item-title">Климат-контроль:</span>современные системы вентиляции
                            и&nbsp;кондиционирования обеспечивают комфорт в&nbsp;любое время года</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Безопасность:</span>система
                            видеонаблюдения и&nbsp;круглосуточная охрана</p>
                    </li>
                </ul>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Цена:
                </h4>
                <p class="modal__item-text">35,000,000</p>
            </div>
        `;
    } else if (e.value === '3') {
        cadrTitle = 'Апартаменты “Loft Studio”';
        cardItemUrl = './../img/apartments/03.jpg';
        cardText = `
                <div class="modal__about">
                    <h4 class="modal__about-title">
                        Основные характеристики:
                    </h4>
                    <ul class="modal__list">
                        <li class="modal__item">
                            <p class="modal__item-text"><span
                                    class="modal__item-title">Площадь:</span>45&nbsp;кв.&nbsp;м</p>
                        </li>
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Этажи:</span>2-й этажи</p>
                        </li>
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Комнаты:</span>студия (гостиная,
                                кухня и&nbsp;спальная зона объединены)</p>
                        </li>
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Высота
                                    потолков:</span>4,5&nbsp;м</p>
                        </li>
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Вид из&nbsp;окон:</span>вид
                                на&nbsp;внутренний двор и&nbsp;зелёную зону комплекса</p>
                        </li>
                    </ul>
                </div>
                <div class="modal__about">
                    <h4 class="modal__about-title">
                        Интерьер и планировка:
                    </h4>
                    <p class="modal__item-text">
                        Апартаменты &laquo;Loft Studio&raquo; отличаются открытой планировкой, где гостиная, кухня 
                        и&nbsp;спальная зона объединены в&nbsp;одно просторное и&nbsp;светлое пространство. Интерьер 
                        выполнен в&nbsp;стиле лофт, с&nbsp;акцентом на&nbsp;функциональность и&nbsp;стиль.
                    </p>
                    <ul class="modal__list">
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Гостиная:</span>уютная зона для
                                отдыха и&nbsp;приема гостей, оборудованная современным диваном и&nbsp;мультимедийной
                                системой
                            </p>
                        </li>
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Кухня:</span>компактная кухня
                                площадью 10&nbsp;кв.&nbsp;м&nbsp;с&nbsp;барной стойкой и&nbsp;встроенной бытовой
                                техникой (Bosch, Samsung)</p>
                        </li>
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Спальни:</span>
                                интегрированная в&nbsp;общую площадь студии, с&nbsp;удобной двуспальной кроватью
                                и&nbsp;встроенными шкафами
                            </p>
                        </li>
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Ванная
                                    комната:</span>5&nbsp;кв.&nbsp;м&nbsp;с&nbsp;душевой кабиной, современной
                                сантехникой и&nbsp;стиральной машиной</p>
                        </li>
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Балкон:</span>3&nbsp;кв.&nbsp;м,
                                выходящий во&nbsp;внутренний двор, идеален для утреннего кофе или вечернего отдыха</p>
                        </li>
                    </ul>
                </div>
                <div class="modal__about">
                    <h4 class="modal__about-title">
                        Удобства и&nbsp;технологии:
                    </h4>
                    <ul class="modal__list">
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Система умного
                                    дома:</span>управляйте освещением, климат-контролем и&nbsp;безопасностью прямо
                                со&nbsp;своего смартфона</p>
                        </li>
                        <li class="modal__item">
                            <p class="modal__item-text"><span
                                    class="modal__item-title">Климат-контроль:</span>современные системы вентиляции
                                и&nbsp;кондиционирования обеспечивают комфорт в&nbsp;любое время года</p>
                        </li>
                        <li class="modal__item">
                            <p class="modal__item-text"><span class="modal__item-title">Безопасность:</span>система
                                видеонаблюдения и&nbsp;круглосуточная охрана</p>
                        </li>
                    </ul>
                </div>
                <div class="modal__about">
                    <h4 class="modal__about-title">
                        Цена:
                    </h4>
                    <p class="modal__item-text">15&nbsp;000&nbsp;000&nbsp;рублей</p>
                </div>
        `;
    } else if (e.value === '4') {
        cadrTitle = 'Loft квартира “Престиж”';
        cardItemUrl = './../img/apartments/04.jpg';
        cardText = `
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Основные характеристики:
                </h4>
                <ul class="modal__list">
                    <li class="modal__item">
                        <p class="modal__item-text"><span
                                class="modal__item-title">Площадь:</span>120&nbsp;кв.&nbsp;м</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Этажи:</span>4-й этажи</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Комнаты:</span>4&nbsp;(гостиная,
                            кухня, 2&nbsp;спальни, кабинет)</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Высота
                                потолков:</span>4&nbsp;м</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Вид из&nbsp;окон:</span>вид
                            на&nbsp;Набережную реки Фонтанка и&nbsp;исторический центр города</p>
                    </li>
                </ul>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Интерьер и планировка:
                </h4>
                <p class="modal__item-text">
                    Loft квартира &laquo;Престиж&raquo; спроектирована с&nbsp;учетом всех современных требований
                    к&nbsp;комфорту и&nbsp;функциональности. Интерьер выполнен в&nbsp;стиле лофт с&nbsp;элементами
                    индустриального дизайна, что придает пространству особую атмосферу и&nbsp;уют.
                </p>
                <ul class="modal__list">
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Гостиная:</span>просторная зона
                            для отдыха и&nbsp;приема гостей (40&nbsp;кв.&nbsp;м), объединенная с&nbsp;обеденной
                            зоной
                        </p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Кухня:</span>открытая кухня
                            (15&nbsp;кв.&nbsp;м) с&nbsp;островом и&nbsp;современной бытовой техникой (Miele, Bosch)
                        </p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Спальни:</span>
                        <ul>
                            <li>Главная спальня: 25&nbsp;кв.&nbsp;м&nbsp;с&nbsp;гардеробной и&nbsp;отдельной ванной
                                комнатой (8&nbsp;кв.&nbsp;м)</li>
                            <li>Вторая спальня: 20&nbsp;кв.&nbsp;м, идеально подходящая для детской комнаты или
                                гостевой спальни</li>
                        </ul>
                        </p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span
                                class="modal__item-title">Кабинет:</span>15&nbsp;кв.&nbsp;м, удобный для работы
                            и&nbsp;отдыха</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Ванная
                                комната:</span>10&nbsp;кв.&nbsp;м&nbsp;с&nbsp;современной сантехникой
                            и&nbsp;стильной отделкой</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span
                                class="modal__item-title">Балкон:</span>10&nbsp;кв.&nbsp;м&nbsp;с&nbsp;видом
                            на&nbsp;набережную реки, оборудован для комфортного отдыха</p>
                    </li>
                </ul>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Удобства и&nbsp;технологии:
                </h4>
                <ul class="modal__list">
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Система умного
                                дома:</span>управляйте освещением, климат-контролем и&nbsp;безопасностью прямо
                            со&nbsp;своего смартфона</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span
                                class="modal__item-title">Климат-контроль:</span>современные системы вентиляции
                            и&nbsp;кондиционирования обеспечивают комфорт в&nbsp;любое время года</p>
                    </li>
                    <li class="modal__item">
                        <p class="modal__item-text"><span class="modal__item-title">Безопасность:</span>система
                            видеонаблюдения и&nbsp;круглосуточная охрана</p>
                    </li>
                </ul>
            </div>
            <div class="modal__about">
                <h4 class="modal__about-title">
                    Цена:
                </h4>
                <p class="modal__item-text">75&nbsp;000&nbsp;000&nbsp;рублей</p>
            </div>
        `;
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

