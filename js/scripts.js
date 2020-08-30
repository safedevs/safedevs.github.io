let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});


function checkWidth() {
  if ($(window).width() > 800) {
    $('#js-menu').removeClass('active');
  }
}

$(window).resize(checkWidth);
