const addItem = document.querySelectorAll('.add-button');
const removeItem = document.querySelector('.remove-button');
const hidden = document.querySelector('.hidden');
const itemDisplay = document.querySelector('.order-complete');
const btnCoffee = document.querySelector('.btn-coffee');
const btnEspresso = document.querySelector('#btn-espresso');
const btnBagel = document.querySelector('#btn-bagel');
const btnShake = document.querySelector('#btn-shake');

// const lCoffee =  {

//         coffee: 'Large Coffee',
//         price: '$4.00'
//     }


btnCoffee.addEventListener('click', () => {
  console.log(btnCoffee);
});

// addItem.addEventListener('click', addItemToList);



// function addItemToList () {
// hidden.classList.remove('hidden');


// // }


// addItem.forEach(function (btns) {
//   btns.addEventListener('click', function() {
//    hidden.classList.remove('hidden');

 

//   });
// });



// //  function tassie () { 
// // for (let i = 0; i < addItem.length; i++) {
// //     addItem[i].addEventListener('click', function() {
// //          hidden.classList.remove('hidden');
// //          let html = `
// //          ${lCoffee.coffee} ${lCoffee.price}

// //          `;

         
// //          itemDisplay.innerHTML = html;
         

     
// //     });
   
// //   } 
// // }


// // tassie();

// // function createListItem(item) {
// //     const p = document.createElement('p');
// //     p.innerHTML = `${item}
// //     <span class="price-of-item">$4.00</span> <button class="remove-button">Remove Item</button>
    
// //     `

// //     document.querySelector('.order-complete').appendChild(p);
    

// // }



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