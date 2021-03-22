import { debounce } from "debounce";

export default function stopScrollEventListener(callback = () => console.log('ЗАКОНЧИЛИ ПРОКРУТКУ' + Date.now()), delay = 250,) {
    console.log('добавляем слушатель на SCROLL');
    window.addEventListener('scroll', debounce(callback, delay));
};