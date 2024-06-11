// Меню навигации
const body = document.querySelector('body');
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top');

navBtn.onclick = () => {
    navIcon.classList.toggle('nav-icon_active');
    nav.classList.toggle('header__top_mobile');
    body.classList.toggle('no-scroll');
}

// Маска для ввода телефона
mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    })
    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
})

// Карта
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.9438692,30.3388486],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });

        var myPlacemark = new ymaps.Placemark([59.9438692,30.3388486], 
            {
                balloonContent:
                `
                <div class="balloon">
                    <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
                    <div class="balloon__contacts">
                        <a href="tel:+78121234567">8 (812) 123-45-67</a>
                    </div>
                </div>
                `
            }, 
            {
            iconLayout: 'default#image',
            iconImageHref: './img/map/location-pin.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40]
        });

        myMap.controls.remove('geolocationControl'); // удаляем геолокацию
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        // myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        // myMap.controls.remove('zoomControl'); // удаляем контроль зумирования
        myMap.controls.remove('rulerControl'); // удаляем контроль правил
        myMap.controls.remove('scrollZoom'); // удаляем скролл карты

        myMap.geoObjects.add(myPlacemark);
        // myPlacemark.balloon.open();
    }
    