import stateSliderClients from "../stateSliderClients";

const clientSliderIdList = stateSliderClients.getClientsSlidersIDs();

function getMenuHtml() {
    if (!clientSliderIdList) return "Меню Пустое!";
    
    const listHtml = clientSliderIdList.map(id=>`<li class="clients-in-slider-menu__item"><a href="#${id}" class="js-mobile-menu-close clients-in-slider-menu__link">${id}</a></li>`).join('');
    // console.log(listHtml)
    return `<ul class="clients-in-slider-menu__list">${listHtml}</ul>`;
}

function initMenu() {
    document.querySelector('.clients-in-slider-menu').innerHTML = getMenuHtml();
}

initMenu();