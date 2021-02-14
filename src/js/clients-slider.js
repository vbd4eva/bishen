
import menuItemsHtmlTpl from '../templates/menu-items.hbs';
// import menuItemsHtmlTpl from '../templates/menu-items.hbs';
import db_clients from '../db/db_clients.json';



const clientsEl = menuItemsHtmlTpl(db_clients);
console.log(clientsEl);



// import menuItemsData from '../json/menu.json';

// const jsMenuEl = document.querySelector('.js-menu');
// jsMenuEl.innerHTML = menuItemsHtmlTpl(menuItemsData);