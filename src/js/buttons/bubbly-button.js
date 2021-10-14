// https://codepen.io/nourabusoud/pen/ypZzMM
var animateButton = function (e) {
  e.preventDefault;
  const button = e.currentTarget;
  //reset animation
  button.classList.remove('animate');

  button.classList.add('animate');
  setTimeout(function () {
    button.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document
  .querySelector('.bubbly-button')
  ?.addEventListener('click', animateButton, false);
