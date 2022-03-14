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

function enableSubmitExistente(){
  let inputs = document.getElementsByClassName('req');
  let btn = document.getElementById('envio');
  let isValid = true;

  for (var i = 0; i < inputs.length; i++){
      let changedInput = inputs[i];
      if (changedInput.value.trim() === "" || changedInput.value === null){
          isValid = false;
      break;
      }
  }
  btn.disabled = !isValid;
}
