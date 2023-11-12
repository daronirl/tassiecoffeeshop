
const removeItem = document.querySelector('.remove-button');
const hidden = document.querySelector('.hidden');
const itemDisplay = document.querySelector('.order-complete');
const btnCoffee = document.querySelector('#btn-coffee');
const btnEspresso = document.querySelector('#btn-espresso');
const btnBagel = document.querySelector('#btn-bagel');
const btnShake = document.querySelector('#btn-shake');
const priceOfItem = document.querySelector('.price-of-item');
const totalEl = document.querySelector('.total p');



let totalPrice = 0;
let clickCount = 0; 
let isTextDisplayed = false;
// FUNCTIONS TO CREATE ELEMENTS FOR NEW ORDERS
function addCoffeeOrder() {
  clickCount++;

  if (clickCount === 5) {
    btnCoffee.disabled = true;
  }

  hidden.classList.remove('hidden');

  // create p element for coffee
  const largeCoffeeEl = document.createElement('p');
  const text = document.createTextNode('Large Coffee');
  largeCoffeeEl.appendChild(text);

  // create span for price of item
  const priceEl = document.createElement('span');
  const textPrice = document.createTextNode(' $4.00 - ');
  priceEl.appendChild(textPrice);
  priceEl.className = 'price-of-item';
  largeCoffeeEl.appendChild(priceEl);

  // create span for quantity
  const quantityEl = document.createElement('span');
  quantityEl.id = 'myQuantity';
  quantityEl.textContent = clickCount;
  largeCoffeeEl.appendChild(quantityEl);

  // using createButton function to create remove button
  const button = createButton('remove-button');
  largeCoffeeEl.appendChild(button);

  let increment = 4;

  button.addEventListener('click', () => {
    largeCoffeeEl.remove(); // Remove the coffee order element from the DOM
    totalPrice -= increment;
    totalEl.textContent = `Total: $${totalPrice.toFixed(2)}`;

    // Decrease the increment by 1
    increment--;

    // Disable the button on the 5th click
    clickCount--;
    if (clickCount < 5) {
      btnCoffee.disabled = false;
    }
  });

  document.querySelector('.order-complete').appendChild(largeCoffeeEl);

  totalPrice += increment; // Add the price of the item to the total
  totalEl.textContent = `Total: $${totalPrice.toFixed(2)}`;

}



 
function addEspressoOrder () {
  hidden.classList.remove('hidden');

    // create p element for espresso
    const espressoEl = document.createElement('p');
    const text = document.createTextNode('Espresso');
    espressoEl.appendChild(text); 


    // create span for price of item
    const priceEl = document.createElement('span');
    const textPrice = document.createTextNode(' $5.00 - ');
    priceEl.appendChild(textPrice);
    priceEl.className = 'price-of-item';
    espressoEl.appendChild(priceEl);

    // using createButton function to create remove button
    const button = createButton('remove-button');
    espressoEl.appendChild(button);

    button.addEventListener('click', () => {
      espressoEl.remove(); // Remove the coffee order element from the DOM
    });
  
   document.querySelector('.order-complete').appendChild(espressoEl);


   
}


function addBagelOrder () {
  hidden.classList.remove('hidden');
    
  // create p element for coffee
  const bagelEl = document.createElement('p');
  const text = document.createTextNode('Bagel');
  bagelEl.appendChild(text); 


  // create span for price of item
  const priceEl = document.createElement('span');
  const textPrice = document.createTextNode(' $2.00 - ');
  priceEl.appendChild(textPrice);
  priceEl.className = 'price-of-item';
  bagelEl.appendChild(priceEl);

  // using createButton function to create remove button
  const button = createButton('remove-button');
  bagelEl.appendChild(button);

  button.addEventListener('click', () => {
    bagelEl.remove(); // Remove the coffee order element from the DOM
  });

 document.querySelector('.order-complete').appendChild(bagelEl);


 
 
}


function addMilkShakeOrder () {
  hidden.classList.remove('hidden');

    // create p element for coffee
    const shakeEl = document.createElement('p');
    const text = document.createTextNode('Milkshakes');
    shakeEl.appendChild(text); 


    // create span for price of item
    const priceEl = document.createElement('span');
    const textPrice = document.createTextNode(' $4.00 - ');
    priceEl.appendChild(textPrice);
    priceEl.className = 'price-of-item';
    shakeEl.appendChild(priceEl);

    // using createButton function to create remove button
    const button = createButton('remove-button');
    shakeEl.appendChild(button);

    button.addEventListener('click', () => {
      shakeEl.remove(); // Remove the coffee order element from the DOM
    });
  
   document.querySelector('.order-complete').appendChild(shakeEl);


   
    

 
}

// create remove button 
function createButton (classes) {
  const button = document.createElement('button');
  const textRemoveButton = document.createTextNode('Remove');
  button.appendChild(textRemoveButton);
  button.className = classes;
  return button;

}



// Buttons to add each item to order
btnCoffee.addEventListener('click', addCoffeeOrder);
btnEspresso.addEventListener('click', addEspressoOrder);
btnBagel.addEventListener('click', addBagelOrder);
btnShake.addEventListener('click', addMilkShakeOrder);
