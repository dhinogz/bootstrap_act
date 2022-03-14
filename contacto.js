const checkbox = document.getElementById('show');

const box = document.getElementById('box');
const email = document.getElementById("email");

checkbox.addEventListener('click', function handleClick() {
  if (checkbox.checked) {
    box.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
});

