// Карта
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
let mapIcon = '';
if (document.querySelector('.section-map_index')) {
  mapIcon = './img/map/location-pin.svg';
} else {
  mapIcon = './../img/map/location-pin.svg';
}
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.9438692, 30.3388486],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 17
  });

  var myPlacemark = new ymaps.Placemark([59.9438692, 30.3388486],
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
      iconImageHref: mapIcon,
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