const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('rotate')
    

})


// Cuando el mouse pasa por encima de algún elemento
window.addEventListener('mouseover', function(evt) {
    // Si elemento tiene la clase `enlace`
    if (evt.target.classList.contains('enlace')) {
      evt.target.classList.add('efecto-text-nav');
      evt.target.classList.remove('nav-item-text');
    }
  });
  
  // Cuando el mouse salga de encima de algún elemento
  window.addEventListener('mouseout', function(evt) {
    // Si elemento tiene la clase `enlace`
    if (evt.target.classList.contains('enlace')) {
        evt.target.classList.remove('efecto-text-nav');
        evt.target.classList.add('nav-item-text');
      }
  });
  