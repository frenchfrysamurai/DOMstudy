// DOM Manipulation



// GetElementById()


const title = document.getElementById('main-heading');

console.log(title);


// GetElementByClassName()

const listItem = document.getElementsByClassName('list-items');

console.log(listItem);


// GetElementByTagName()

const tagNameList = document.getElementsByTagName('li');

console.log(tagNameList);


// querySelector()


const divContainer = document.querySelector('div');

console.log(divContainer); // only selects first instance of element


// querySelectorAll() : selects all matches of element

const containers = document.querySelectorAll('div');

console.log(container);
