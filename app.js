const alllis = document.querySelectorAll('li');



const colors = ['red', 'orange','yellow', 'green', 'blue', 'purple'];

alllis.forEach((li, i) =>{
    li.style.color = colors[i];
})