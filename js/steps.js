// Шаги в оформлении ипотеки
const tabsBtn = document.querySelectorAll('.mortgage-steps__btn');
const tabsItem = document.querySelectorAll('.mortgage-steps__item');

tabsBtn.forEach((element) => {
  element.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach((btn) => {
      btn.classList.remove('mortgage-steps__btn_active')
    });
    e.currentTarget.classList.add('mortgage-steps__btn_active');

    tabsItem.forEach((element) => {
      element.classList.remove('mortgage-steps__item_active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('mortgage-steps__item_active');
  })
})