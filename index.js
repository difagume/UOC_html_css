const name = '😊'
console.log(`Hi ${name}`)

window.onscroll = function () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
    document.getElementById('top').style.display = 'block';
  else
    document.getElementById('top').style.display = 'none';
};