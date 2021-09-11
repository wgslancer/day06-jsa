// Bước 1: gọi toàn bộ các thẻ bên html cần thiết cho bài toán
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const inputC = document.getElementById('c');
const buttonTinh = document.getElementById('button');

// Bước 2: tạo một hàm để có thể tính toán bài toán
function tinhPtBac2() {
  const aValue = Number(inputA.value);
  const bValue = Number(inputB.value);
  const cValue = Number(inputC.value);
  console.log(aValue, bValue, cValue);
  const delta = bValue * bValue - 4 * aValue * cValue;
  if (delta < 0) {
    console.log('Phương trình vô nghiệm!');
    return;
  }
  if (delta === 0) {
    console.log('Phương trình có nghiệm kép');
    const result = -bValue / (2 * aValue);
    console.log(result);
    return;
  }
  console.log('Phương trình có 2 nghiệm phân biệt');
  const x1 = 2;
  const x2 = 4;
  console.log('x1: ', x1, 'x2: ', x2);
}

// Bước 3: gọi event listener onclick
// để có thể gán hàm tính vừa tạo vào khi ta click button
buttonTinh.onclick = tinhPtBac2;
