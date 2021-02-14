import { debounce } from "debounce";

export default function stopScrollEventListener(callback = () => console.log('ЗАКОНЧИЛИ ПРОКРУТКУ' + Date.now()), delay = 250,) {
    window.addEventListener('scroll', debounce(callback,delay));  
};