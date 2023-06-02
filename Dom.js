

const input  =  document.querySelector('.todo-input');

const button = document.querySelector('.todo-button');

const ulList =  document.querySelector('.todo-list');

function addTask (e) {

e.preventDefault();

const todoDiv =  document.createElement('div');

const completeButton = document.createElement('button');
completeButton.classList.add('complete-btn');
completeButton.innerText ='Complete button'
completeButton.addEventListener('click' , completed)

const deleteButton = document.createElement('button');
deleteButton.classList.add('trash-btn');
deleteButton.innerText ='Delete button'
deleteButton.addEventListener('click' , deleted)

const list =  document.createElement('li');
list.classList.add('todo-item');
list.innerText =  input.value;

todoDiv.appendChild(list);
todoDiv.appendChild(completeButton);
todoDiv.appendChild(deleteButton);
ulList.appendChild(todoDiv);
input.value = ""

}

// button event listner
button.addEventListener('click' , addTask)


function completed (e) {
e.target.parentElement.firstChild.classList.toggle('check')
}

function deleted (e) {
e.target.parentElement.remove();
}
