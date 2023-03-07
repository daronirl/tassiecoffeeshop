
const removeItem = document.querySelector('.remove-button');
const hidden = document.querySelector('.hidden');
const itemDisplay = document.querySelector('.order-complete');
const btnCoffee = document.querySelector('#btn-coffee');
const btnEspresso = document.querySelector('#btn-espresso');
const btnBagel = document.querySelector('#btn-bagel');
const btnShake = document.querySelector('#btn-shake');
const priceOfItem = document.querySelector('.price-of-item');



const cost = document.querySelector('#cost');


// Buttons to add each item to order
btnCoffee.addEventListener('click', addCoffeeOrder);
btnEspresso.addEventListener('click', addEspressoOrder);
btnBagel.addEventListener('click', addBagelOrder);
btnShake.addEventListener('click', addMilkShakeOrder);



const tassieCoffee = [

{
    lgcoffee: 'Large Coffee',
    priceCoffee: '$4.00',

},

{

    lgEspresso: 'Espresso',
    priceCoffee: '$5.00',

},

{

    lgBagel: 'Bagel',
    priceCoffee: '$2.00',


},

{
    lgMilk: 'Milkshake',
    priceCoffee: '$6.00'


}

]




let quantity = 0; // initialize quantity variable to 0
let clickCount = 0;


// FUNCTIONS TO CREATE ELEMENTS FOR NEW ORDERS
function addCoffeeOrder () {
 
  hidden.classList.remove('hidden');
    

   quantity++
   
   const markup = `
    
    <p>${tassieCoffee[0].lgcoffee} - <span class="price-of-item">${tassieCoffee[0].priceCoffee}</span> - ${quantity} <button class="remove-button">Remove </button></p>
    
    `;

    document.querySelector('.order-complete').innerHTML = markup;



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

    document.querySelector('.order-complete').innerHTML += markup;



  
 
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