
const removeItem = document.querySelector('#remove-button');
const hidden = document.querySelector('.hidden');
const itemDisplay = document.querySelector('.order-complete');
const btnCoffee = document.querySelector('#btn-coffee');
const btnEspresso = document.querySelector('#btn-espresso');
const btnBagel = document.querySelector('#btn-bagel');
const btnShake = document.querySelector('#btn-shake');
const priceOfItem = document.querySelector('.price-of-item');



const cost = document.querySelector('#cost');




let quantity = 0; 
let clickCount = 0;


// FUNCTIONS TO CREATE ELEMENTS FOR NEW ORDERS
function addCoffeeOrder () {
    hidden.classList.remove('hidden');
    
    clickCount++
    if  (clickCount === 5) {
        btnCoffee.disabled = true;
    }


 quantity++
 if (quantity === 1) {
  const p = document.createElement('p');
  const button = document.createElement('button');
  const span = document.createElement('span');
  const spanPrice = document.createElement('span');

  p.appendChild(document.createTextNode('Large Coffee'));
  span.appendChild(document.createTextNode(' $4.00'));
  button.appendChild(document.createTextNode('Remove'));
  

  button.id = 'remove-button';
  spanPrice.id = 'myQuantity';
  p.appendChild(span);
  span.appendChild(button);
  span.appendChild(spanPrice);
  document.querySelector('.order-complete').appendChild(p);

  
 } else {
  let spanPrice = document.querySelector('#myQuantity');
  spanPrice.textContent = quantity;
  
 }





}


function addEspressoOrder () {
    hidden.classList.remove('hidden');

    quantity++
    const markup = `
    
    <p>${tassieCoffee[1].lgEspresso} - <span class="price-of-item">${tassieCoffee[1].priceCoffee}</span> - ${quantity} <button class="remove-button">Remove</button></p>
    
    `;

    document.querySelector('.order-complete').innerHTML = markup;

 
  
  
}


function addBagelOrder () {

  // hidden.classList.remove('hidden');
  // const p = document.createElement('p');
  // p.appendChild(document.createTextNode('Bagel'));

 

  // document.querySelector('.order-complete').appendChild(p);


    hidden.classList.remove('hidden');
    const markup = `
    
    <p>${tassieCoffee[2].lgBagel} - <span class="price-of-item">${tassieCoffee[2].priceCoffee}</span> <button class="remove-button">Remove</button></p>
    
    `;

    document.querySelector('.order-complete').innerHTML = markup;



  
 
}


function addMilkShakeOrder () {
  // hidden.classList.remove('hidden');
  // const p = document.createElement('p');
  // p.appendChild(document.createTextNode('Milkshake'));


  // document.querySelector('.order-complete').appendChild(p);


    hidden.classList.remove('hidden');
    const markup = `
    
    <p>${tassieCoffee[3].lgMilk} - <span class="price-of-item">${tassieCoffee[3].priceCoffee}</span> <button class="remove-button">Remove</button></p>
    
    `;

    document.querySelector('.order-complete').innerHTML += markup;



  
 
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

function tassie () {
  console.log('hehe');
}


// Buttons to add each item to order
btnCoffee.addEventListener('click', addCoffeeOrder);
btnEspresso.addEventListener('click', addEspressoOrder);
btnBagel.addEventListener('click', addBagelOrder);
btnShake.addEventListener('click', addMilkShakeOrder);

// Remove item from order
removeItem.addEventListener('click', tassie);