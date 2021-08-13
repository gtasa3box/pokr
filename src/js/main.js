/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
window.onload= function() {
      document.getElementById('burgerlink').onclick = function() {
      toogleclass(this);
      opennav('nav', this);
      return false;
  };
};

function opennav(id, click_burger) {
const div = document.getElementById(id);
if(div.style.display == 'flex') {
    div.style.display = 'none';
}
else {
    div.style.display = 'flex';
}
};

function toogleclass(click_burger) {
if (click_burger.classList.contains('active')) {
    click_burger.classList.remove('active');
}
else {
    click_burger.classList.add('active');
}
};
