// Evento para mostrar imagen en dialogo
$(document).on('click', '.openImgDialog', e => {
  const imgSrc = e.target.src;
  console.log(`Obteniendo path de img ${imgSrc} para mostrar en modal`);
  $('.modal-body #imageModal').attr('src', imgSrc);
});