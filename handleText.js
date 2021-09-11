const buttonB = document.getElementById('b');
const pExample = document.getElementById('example');
const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const inputColor = document.getElementById('color');
const container = document.getElementById('container');

// container.innerHTML = `<p id="name">Họ tên:</p>
//       <p id="age">Tuổi:</p>`;

function handleOnClick() {
  // pExample.textContent = `<h1>${inputI.value}</h1>`;
  pExample.style.color = inputColor.value;
  // pExample.innerHTML = `<h1>${inputI.value}</h1>`;
  container.style.display = 'flex';
  container.style.width = '100%';
  container.style.justifyContent = 'center';
  container.innerHTML =
    container.innerHTML +
    `<p>Họ tên: ${inputName.value}</p>
      <p>Tuổi: ${inputAge.value}</p>`;
  inputI.value = '';
}

buttonB.onclick = handleOnClick;

// 1. getElementById
// 2. event onClick
// 3. value, textContent, innerHTML
// 4. style

