
const removeItem = document.querySelector('.remove-button');
const hidden = document.querySelector('.hidden');
const itemDisplay = document.querySelector('.order-complete');
const btnCoffee = document.querySelector('.btn-coffee');
const btnEspresso = document.querySelector('.btn-espresso');
const btnBagel = document.querySelector('.btn-bagel');
const btnShake = document.querySelector('.btn-shake');
const priceOfItem = document.querySelector('.price-of-item');

const cost = document.querySelector('#cost');
let total = 0;


// Buttons to add each item to order
btnCoffee.addEventListener('click', addCoffeeOrder);
btnEspresso.addEventListener('click', addEspressoOrder);
btnBagel.addEventListener('click', addBagelOrder);
btnShake.addEventListener('click', addMilkShakeOrder);



function addCoffeeOrder () {
 

    hidden.classList.remove('hidden');
    const p = document.createElement('p');
    p.appendChild(document.createTextNode("Large Coffee:"));
    // const input = document.createElement('input');
    // p.appendChild(input);

  //  p.appendChild(span);

    document.querySelector('.order-complete').appendChild(p);
  
    if (btnCoffee === true){
      total++;
      priceOfItem.innerHTML = total;
      
    }

 

}



function addEspressoOrder () {
  hidden.classList.remove('hidden');
  const p = document.createElement('p');
  p.appendChild(document.createTextNode('Espresso'));
  // const input = document.createElement('input');
  // p.appendChild(input);
  document.querySelector('.order-complete').appendChild(p);


  
}



function addBagelOrder () {
  hidden.classList.remove('hidden');
  const p = document.createElement('p');
  p.appendChild(document.createTextNode('Bagel'));
  // const input = document.createElement('input');
  // p.appendChild(input);
 

  document.querySelector('.order-complete').appendChild(p);
 
}


function addMilkShakeOrder () {
  hidden.classList.remove('hidden');
  const p = document.createElement('p');
  p.appendChild(document.createTextNode('Milkshake'));
  // const input = document.createElement('input');
  // p.appendChild(input);
 

  document.querySelector('.order-complete').appendChild(p);
 
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