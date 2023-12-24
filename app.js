// DOM Manipulation

//const title = document.querySelector('#main-heading');

//title.style.color = 'red';
/*
const listItems = document.querySelectorAll('.list-items');


for(i = 0; i < listItems.length; i++){
	listItems[i].style.fontSize = '3rem';
}
*/

// Creating Elements
//
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Element
ul.append(li);

//Modifying the text
//

li.innerText = "X-men";


// Modifying Attributes & classes
//


li.setAttribute('id', 'main-heading');

li.removeAttribute('id');

const title = document.querySelector('#main-heading');

li.classList.add('list-items');

//li.classList.remove('list-items');


console.log(li.classList.contains('list-items'));


// Remove elements
//







