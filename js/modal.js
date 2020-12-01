var modalBtn = document.querySelector('.modal-btn');
var modal = document.querySelector('.modal-screen');
var modalContent = document.querySelector('.modal-content');
var elCloseBtn = document.querySelector('.close-btn');
var elClBtn = document.querySelector('.cl-btn');




var logKeyCode = function (evt) {
  console.log(evt.code);
  if (evt.code === 'Escape') {
    document.body.removeEventListener('keyup', logKeyCode);
    console.log('yeah');
    modal.classList.remove('modal-open');
  }
};

modalBtn.addEventListener('click', function () {

  modal.classList.add('modal-open');

});

modal.addEventListener('click', function (evt) {
  console.log('salom');

  if (evt.target.matches('.modal-screen')) {
    modal.classList.remove('modal-open');
    console.log('ishladi');
  }

  if (evt.target.matches('.modal-content')) {
    document.body.removeEventListener('keyup', logKeyCode);
    elClBtn.body.removeEventListener('keyup', logKeyCode);
    elCloseBtn.body.removeEventListener('keyup', logKeyCode);
  };

  if (evt.target.matches('.cl-btn')) {
    modal.classList.remove('modal-open');
    console.log('ishladi');
    document.body.removeEventListener('keyup', logKeyCode);
  }

  if (evt.target.matches('.close-btn')) {
    modal.classList.remove('modal-open');
    console.log('ishladi');
    document.body.removeEventListener('keyup', logKeyCode);
  }

})




// elStopListeningBtn.addEventListener('click', function () {
//   document.body.removeEventListener('keyup', logKeyCode);
// });