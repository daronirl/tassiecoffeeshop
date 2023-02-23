const addItem = document.querySelectorAll('.add-button');
const removeItem = document.querySelector('.remove-button');
const hidden = document.querySelector('.hidden');
const itemDisplay = document.querySelector('.order-complete');

// const lCoffee =  {

//         coffee: 'Large Coffee',
//         price: '$4.00'
//     }


// addItem.addEventListener('click', addItemToList);



// function addItemToList () {
// hidden.classList.remove('hidden');


// }


addItem.forEach(function (btns) {
  btns.addEventListener('click', function() {
   hidden.classList.remove('hidden');

 

  });
});



//  function tassie () { 
// for (let i = 0; i < addItem.length; i++) {
//     addItem[i].addEventListener('click', function() {
//          hidden.classList.remove('hidden');
//          let html = `
//          ${lCoffee.coffee} ${lCoffee.price}

//          `;

         
//          itemDisplay.innerHTML = html;
         

     
//     });
   
//   } 
// }


// tassie();

// function createListItem(item) {
//     const p = document.createElement('p');
//     p.innerHTML = `${item}
//     <span class="price-of-item">$4.00</span> <button class="remove-button">Remove Item</button>
    
//     `

//     document.querySelector('.order-complete').appendChild(p);
    

// }



function createNewItem(item) {

    const p = document.createElement('p');
    p.appendChild(document.createTextNode(item));

    const span = document.createElement('span');
    span.className = 'price-of-item';


    const button = document.createElement('button');
    button.className = 'remove-button';

    p.appendChild(span);
    span.appendChild(button);

  
    
    
    document.querySelector('.order-complete').appendChild(p);
console.log(p.innerHTML);
}


createNewItem('Espresso');
// createListItem('Large Coffee');