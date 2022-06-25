import contentData from '../../data/data.json';
import addressTpl from '../../templates/address.hbs';
import clientSliderTpl from '../../templates/clientSlider.hbs';

const { companyInfo, sliderClientList } = contentData;

// <address>   .js-address
companyInfo.tel = companyInfo.tel.map(tel => [tel, tel.replace(/[^0-9]/g, '')]);

const jsAddressEl = document.querySelector('.js-address');
jsAddressEl.innerHTML = addressTpl(companyInfo);
//

const img = `
   <img
     class="client-slider__picture"
     alt=""
//     src="https://bishen.com.ua/data/images/clients/catch/1-catch-768-tablet.jpg"
//     srcset="
//           https://bishen.com.ua/data/images/clients/catch/1-catch-768-tablet.jpg    768w,
//           https://bishen.com.ua/data/images/clients/catch/1-catch-1280-desktop.jpg 1280w,
//           https://bishen.com.ua/data/images/clients/catch/1-catch-1920-full.jpg    1920w,
//           https://bishen.com.ua/data/images/clients/catch/1-catch-2560-basic.jpg   2560w
//         "
     sizes=" (max-width: 767px) 100vw, (max-width: 1279px) 100vw, (max-width: 1919px) 100vw, (min-width: 1920px) 100vw"
     loading="lazy"
   />
`;
const path = 'https://bishen.com.ua/data/images/clients/';
const list = Object.entries(sliderClientList).map(([client, slidesNum]) => {
  const arr = [];
  arr.length = slidesNum;
  arr.fill(null);
  const imgs = arr.map((e, i) => {
    return {
      src: `${path}${client}/${i}-${client}-768-tablet.jpg`,
      srcset: `${path}${client}/${i}-${client}-768-tablet.jpg    768w,
           ${path}${client}/${i}-${client}-1280-desktop.jpg 1280w,
          ${path}${client}/${i}-${client}-1920-full.jpg    1920w,
          ${path}${client}/${i}-${client}-2560-basic.jpg   2560w`,
    };
  });
  return {
    name: client,
    imgs,
  };
});
console.log(list);
const jsSliderClientListEl = document.querySelector('.js-clients');
jsSliderClientListEl.insertAdjacentHTML(
  'afterbegin',
  clientSliderTpl({ path, list }),
);
