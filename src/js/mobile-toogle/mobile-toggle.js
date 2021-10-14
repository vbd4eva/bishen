export default class MobileToggle {
  constructor(...args) {
    const [dataMark, params] = args;
    this.params = params;
    this._setRefs(dataMark) && this._init();
  }

  _setRefs(dataMark) {
    const containerMark = `[${dataMark}]`;
    const buttonMark = `[${dataMark}-button]`;

    const containerEl = document.querySelector(containerMark);
    const buttonEl = document.querySelector(buttonMark);

    this.refs = { containerEl, buttonEl };

    return this._checkRefs(containerMark);
  }

  _checkRefs(containerMark) {
    if (!this.refs.containerEl || !this.refs.buttonEl) {
      this.error =
        'Ошибка! : переданній єлемент ' + containerMark + ' не найден';
      console.log(this.error);
      return;
    }
    return true;
  }

  _init() {
    this.refs.buttonEl.addEventListener('click', this._toggleMenu.bind(this));

    this.refs.containerEl.addEventListener(
      'click',
      this._containerClickHandler.bind(this),
    );
  }

  _closeAll() {
    this.refs.buttonEl.classList.remove('is-open');

    this.refs.containerEl.classList.remove('is-open');

    this.refs.buttonEl.setAttribute('aria-expanded', false);

    document.documentElement.classList.remove('y-scroll-off');
  }

  _toggleMenu() {
    const expanded =
      this.refs.buttonEl.getAttribute('aria-expanded') === 'true';

    this.refs.buttonEl.classList.toggle('is-open');
    this.refs.buttonEl.setAttribute('aria-expanded', !expanded);

    this.refs.containerEl.classList.toggle('is-open');

    const { bodyScroll } = this?.params || {};
    if (bodyScroll) document.documentElement.classList.toggle('y-scroll-off');
  }

  _containerClickHandler(e) {
    e.stopPropagation();
    if (e.target.classList.contains('js-mobile-menu-close')) this._closeAll();
  }
}
