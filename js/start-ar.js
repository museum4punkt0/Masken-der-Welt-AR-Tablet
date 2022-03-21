(function () {
  document.addEventListener('DOMContentLoaded', function (event) {
    const startBtn = document.getElementById('start-scene');
    startBtn.addEventListener('click', function () {
      // start A-Frame AR-View
      document.querySelector('a-scene').enterAR();
    });
  });
})();
