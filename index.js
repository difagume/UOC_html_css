const name = '😊'
console.log(`Hi ${name}`)

// Scroll top
window.onscroll = function () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
    document.getElementById('top').style.display = 'block';
  else
    document.getElementById('top').style.display = 'none';
};

// Evento para mostrar imagen en dialogo
$(document).on('click', '.openImgDialog', function () {
  const imgPath = $(this).data('id');
  console.log(`Obteniendo path de img ${imgPath} para mostrar en modal`);
  $('.modal-body #imageModal').attr('src', imgPath);
});