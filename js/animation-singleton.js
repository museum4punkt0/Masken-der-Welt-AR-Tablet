AFRAME.registerComponent('animation-singleton', {
  init: function () {
    const clickables = document.querySelectorAll('.clickable');

    clickables.forEach((el) => {
      el.addEventListener('animationbegin', function (evt) {
        if (evt.detail.name === 'animation__pos+') {
          clickables.forEach((el) => el.classList.remove('clickable'));
        }
      });

      el.addEventListener('animationcomplete', function (evt) {
        if (evt.detail.name === 'animation__pos-') {
          clickables.forEach((el) => el.classList.add('clickable'));
        }
      });
    });
  },
});
