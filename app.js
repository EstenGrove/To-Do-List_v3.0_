// Create task object
const Task = function (taskText, date, type) {

    this.taskText = document.querySelector('#addItem').value;
    this.date = new Date().toLocaleString();
    this.type = document.querySelector('.filterSelect').value;
}


const addBtn = document.querySelector('.addBtn');



// Add task to DOM
function addTask() {

    const newTask = new Task();
    console.log(newTask.taskText);
    console.log(newTask.date);
    console.log(newTask.type);

    const taskList = document.querySelector('.new-container');

    let addField = document.querySelector('#addItem');
    let input = addField.value;

    const taskItem = document.createElement('div');
    taskItem.className += 'task';

    const svg = 'media/basic_trashcan.svg';


    const a = document.createElement('a');
    a.className += 'a';
    a.innerHTML = input;

    const img = document.createElement('img');
    img.setAttribute('src', svg);
    img.className += 'deleteBtn';

    const arrow = document.createElement('a');
    arrow.textContent = '▼';
    arrow.className += 'dropDown';


    taskItem.appendChild(img);
    img.parentNode.insertBefore(a, img.nextSibling);
    a.parentNode.insertBefore(arrow, a.nextSibling);

    taskList.appendChild(taskItem);

    addField.value = '';

    //Delete taskItem on click
    img.onclick = function (e) {
        taskItem.classList.add('deletion');
        
        taskItem.addEventListener('animationend', function(e) {
            taskItem.classList.remove('deletion');
            taskList.removeChild(taskItem); 
        });
        
        
        
        
        
    }
}



// Add event listener
addBtn.addEventListener('click', addTask);


//Store values in variables
const searchBtn = document.querySelector('.searchBtn');
const input = document.querySelector('#search');


//Filter function
input.addEventListener('keyup', function(e) {
    let anchors = document.querySelectorAll('.a');
   
    const query = input.value.toUpperCase();
    
    for(let i = 0; i < anchors.length; i++) {
        if(anchors[i].innerHTML.toUpperCase().indexOf(query) >= 0) {
            anchors[i].style.display = 'flex'; 
        } else {
            anchors[i].parentElement.style.display = 'none';
        }
    }
    
});




