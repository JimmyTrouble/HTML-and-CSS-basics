const alllis = document.querySelectorAll('li');

const todo = document.querySelector('#todos .todo') 
//selects first todo class inside the todos id el



const colors = ['red', 'orange','yellow', 'green', 'blue', 'purple'];

// alllis.forEach((li, i) =>{
//     li.style.color = colors[i];
// })


// console.log(todo)
// todo.style.color = 'blue';


//add elements
const newImg = document.createElement('img');
newImg.src = 'A000553-R1-20-16.JPG';
newImg.id = 'DP';
document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'FIRESHIP';
newLink.href = 'https://www.youtube.com/watch?v=0fONene3OIA';

const firstP = document.querySelector('p');

firstP.appendChild(newLink);



//create li, put at top of ul
const newLi = document.createElement('li')
newLi.innerHTML = todo.innerHTML;
newLi.classList.add('todo')
newLi.innerText = 'newest li';


const parentUl = document.querySelector('ul');

const firstLi = document.querySelector('li.todo')

const todoLis = document.querySelectorAll('li.todo').length - 1;
const lastLi = document.querySelectorAll('li.todo')[todoLis]

// top
//parentUl.insertBefore(newLi, firstLi)

//bottom
parentUl.insertBefore(newLi, lastLi )


