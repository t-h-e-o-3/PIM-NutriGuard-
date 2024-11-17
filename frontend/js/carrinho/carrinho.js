document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');
    
    
    function updateTotal() {
      let newTotal = 0;
  
      cartItems.forEach(item => {
        const checkbox = item.querySelector('.item-checkbox');
        const quantityInput = item.querySelector('.quantity');
        const price = parseFloat(item.querySelector('.item-price').textContent.replace('R$ ', '').replace(',', '.'));
  
        if (checkbox.checked) {
          const quantity = parseInt(quantityInput.value);
          newTotal += quantity * price;
        }
      });
  
      totalPriceElement.textContent = `R$ ${newTotal.toFixed(2)}`;
    }
  
    cartItems.forEach(item => {
      const checkbox = item.querySelector('.item-checkbox');
      const decreaseButton = item.querySelector('.decrease');
      const increaseButton = item.querySelector('.increase');
      const quantityInput = item.querySelector('.quantity');
      const removeButton = item.querySelector('.remove-item');
  
   
      increaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = ++quantity;
        updateTotal();
      });
  
    
      decreaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
          quantityInput.value = --quantity;
          updateTotal();
        }
      });
  
      removeButton.addEventListener('click', () => {
        item.remove();
        updateTotal();
      });
  
      
      checkbox.addEventListener('change', updateTotal);
      
  
      updateTotal();
    });
  });
