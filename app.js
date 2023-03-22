
const removeItem = document.querySelector('.remove-button');
const hidden = document.querySelector('.hidden');
const itemDisplay = document.querySelector('.order-complete');
const btnCoffee = document.querySelector('#btn-coffee');
const btnEspresso = document.querySelector('#btn-espresso');
const btnBagel = document.querySelector('#btn-bagel');
const btnShake = document.querySelector('#btn-shake');
const priceOfItem = document.querySelector('.price-of-item');




// Define a template for a coffee order
// const coffeeOrderTemplate = `
//   <p>Large Coffee <span class="price"></span> <button class="remove-button">Remove</button></p>
// `;

// function addCoffeeOrder () {
//   hidden.classList.remove('hidden');
  
//   clickCount++;
//   if (clickCount === 1) {
//     btnCoffee.disabled = true;
//   }

//   // Create a new coffee order element using the template
//   const coffeeOrderElement = document.createElement('div');
//   coffeeOrderElement.classList.add('coffee-order');
//   coffeeOrderElement.innerHTML = coffeeOrderTemplate;
  
//   const priceElement = coffeeOrderElement.querySelector('.price');
//   const removeButton = coffeeOrderElement.querySelector('.remove-button');
  
//   priceElement.textContent = '$4.00 - ';
//   priceElement.dataset.quantity = clickCount;
  
//   removeButton.addEventListener('click', function () {
//     coffeeOrderElement.remove();
//     clickCount--;
//     if (clickCount === 0) {
//       btnCoffee.disabled = false;
//       hidden.classList.add('hidden');
//     }
//   });
  
//   document.querySelector('.order-complete').appendChild(coffeeOrderElement);
// }



let clickCount = 0;
// FUNCTIONS TO CREATE ELEMENTS FOR NEW ORDERS
function addCoffeeOrder () {
    hidden.classList.remove('hidden');
    


   
  const p = document.createElement('p');
  const button = document.createElement('button');
  const span = document.createElement('span');
  const spanPrice = document.createElement('span');

  p.appendChild(document.createTextNode('Large Coffee'));
  span.appendChild(document.createTextNode(' $4.00 - '));
  button.appendChild(document.createTextNode('Remove'));
  
  spanPrice.id = 'myQuantity';
  button.id = 'remove-button';
  
  p.appendChild(span);
  span.appendChild(spanPrice);
  span.appendChild(button);
  document.querySelector('.order-complete').appendChild(p);

  const removeItem = p.querySelector('.remove-button');
  removeItem.addEventListener('click', function () {
        p.remove();
        clickCount--;
        if (clickCount === 0) {
          btnCoffee.disabled = false;
          hidden.classList.add('hidden');
        }
      });
  
}





// Define a template for a coffee order
// const espressoOrderTemplate = `
//   <p>Espresso <span class="price"></span> <button class="remove-button">Remove</button></p>
// `;

// function addEspressoOrder () {
//   hidden.classList.remove('hidden');
  
//   clickCount++;
//   if (clickCount === 1) {
//     btnEspresso.disabled = true;
//   }

//   // Create a new coffee order element using the template
//   const espressoOrderElement = document.createElement('div');
//   espressoOrderElement.classList.add('espresso-order');
//   espressoOrderElement.innerHTML = espressoOrderTemplate;
  
//   const priceElement = espressoOrderElement.querySelector('.price');
//   const removeButton = espressoOrderElement.querySelector('.remove-button');
  
//   priceElement.textContent = '$4.00 - ';
//   priceElement.dataset.quantity = clickCount;
  
//   removeButton.addEventListener('click', function () {
//     espressoOrderElement.remove();
//     clickCount--;
//     if (clickCount === 0) {
//       btnEspresso.disabled = false;
//       hidden.classList.add('hidden');
//     }
//   });
  
//   document.querySelector('.order-complete').appendChild(espressoOrderElement);
// }

 
function addEspressoOrder () {
  hidden.classList.remove('hidden');
    


const p = document.createElement('p');
const button = document.createElement('button');
const span = document.createElement('span');
const spanPrice = document.createElement('span');

p.appendChild(document.createTextNode('Espresso'));
span.appendChild(document.createTextNode(' $5.00 - '));
button.appendChild(document.createTextNode('Remove'));

spanPrice.id = 'myQuantity';
button.id = 'remove-button';

p.appendChild(span);
span.appendChild(spanPrice);
span.appendChild(button);
document.querySelector('.order-complete').appendChild(p);





 
  
  
}


function addBagelOrder () {
  hidden.classList.remove('hidden');
    
  clickCount++
  if  (clickCount === 5) {
      btnBagel.disabled = true;
  }


quantity++
if (quantity === 1) {
const p = document.createElement('p');
const button = document.createElement('button');
const span = document.createElement('span');
const spanPrice = document.createElement('span');

p.appendChild(document.createTextNode('Bagel'));
span.appendChild(document.createTextNode(' $2.00 - '));
button.appendChild(document.createTextNode('Remove'));

spanPrice.id = 'myQuantity';
button.id = 'remove-button';

p.appendChild(span);
span.appendChild(spanPrice);
span.appendChild(button);
document.querySelector('.order-complete').appendChild(p);


} else {
let spanPrice = document.querySelector('#myQuantity');
spanPrice.textContent = quantity;

}


 
}


function addMilkShakeOrder () {
  hidden.classList.remove('hidden');
    
  clickCount++
  if  (clickCount === 5) {
      btnShake.disabled = true;
  }


quantity++
if (quantity === 1) {
const p = document.createElement('p');
const button = document.createElement('button');
const span = document.createElement('span');
const spanPrice = document.createElement('span');

p.appendChild(document.createTextNode('Milkshake'));
span.appendChild(document.createTextNode(' $6.00 - '));
button.appendChild(document.createTextNode('Remove'));

spanPrice.id = 'myQuantity';
button.id = 'remove-button';

p.appendChild(span);
span.appendChild(spanPrice);
span.appendChild(button);
document.querySelector('.order-complete').appendChild(p);


} else {
let spanPrice = document.querySelector('#myQuantity');
spanPrice.textContent = quantity;

}




  
 
}






// addItem.addEventListener('click', addItemToList);



// function addItemToList () {
// hidden.classList.remove('hidden');


// // }


// addItem.forEach(function (btns) {
//   btns.addEventListener('click', function() {
//    hidden.classList.remove('hidden');

 

//   });
// });

// function createNewItem(item) {

//     const p = document.createElement('p');
//     p.appendChild(document.createTextNode(item));
//     p.innerText = 'Large Coffee';
    
//     const button = createButton('remove-button');
//     const span = createSpan('price-of-item');
   

//     p.appendChild(span);
//     span.appendChild(button);
   

  
    
    
//     document.querySelector('.order-complete').appendChild(p);
// console.log(p.innerHTML);
// }



// function createButton (classes) {
//     const button = document.createElement('button');
//     button.className = classes;
//     button.innerText = 'Remove Item';
//     return button;
// }

// function createSpan (classes) {
//   const span = document.createElement('span');
//   span.className = classes;
//   span.innerText = '$4.00';
//   return span;
// }


// createNewItem();
// createListItem('Large Coffee');



// Buttons to add each item to order
btnCoffee.addEventListener('click', addCoffeeOrder);
btnEspresso.addEventListener('click', addEspressoOrder);
btnBagel.addEventListener('click', addBagelOrder);
btnShake.addEventListener('click', addMilkShakeOrder);
