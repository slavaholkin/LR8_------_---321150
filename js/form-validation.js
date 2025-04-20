document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('prodName').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const date = document.getElementById('deliveryDate').value;
  
    let errors = [];
  
    if (name === '') errors.push("Введите название продукта.");
    if (quantity === '' || quantity <= 0) errors.push("Количество должно быть положительным числом.");
    if (!email.includes('@')) errors.push("Неверный email.");
    if (!date) errors.push("Выберите дату доставки.");
  
    const resultBox = document.getElementById('productResult');
  
    if (errors.length > 0) {
      resultBox.style.color = "red";
      resultBox.innerHTML = errors.join('<br>');
    } else {
      resultBox.style.color = "green";
      resultBox.innerHTML = `Заказ принят: ${name}, ${quantity} шт., доставка ${date}`;
    }
  });
  
  // Дополнительный JavaScript для пункта 5 лабораторной
  document.querySelector('.feature-block:nth-child(2)').addEventListener('click', function () {
    this.style.transform = 'rotate(2deg)';
    this.style.backgroundColor = '#fff3cd';
  });
  
  document.querySelector('.header-text h1').addEventListener('mouseover', function () {
    this.style.color = '#22c55e';
  });
  