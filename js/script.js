const liAll = document.getElementsByTagName('li');
console.log(liAll);

const title = document.getElementsByClassName('header');
console.log(title);

const sectionId= document.getElementById('section-2');
console.log(sectionId);
sectionId.style.color = 'violet';
sectionId.style.backgroundColor = 'red';

const li = document.createElement('li');

li.innerText = 'djskjkaaoakk';
sectionId.appendChild(li);
