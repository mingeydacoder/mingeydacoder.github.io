const para = document.querySelector('li.special');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('更改文字');
  para.textContent = name;
}
