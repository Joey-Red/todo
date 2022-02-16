import './style.css';
import Icon from './icon-g1d788bee1_640.png';

const myIcon = new Image();
myIcon.src = Icon;
myIcon.style.maxHeight = '150px';

class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
const newTodoButton = document.createElement('button');
newTodoButton.classList.add('newTodo');
newTodoButton.append(myIcon);
const mainDisplay = document.querySelector('.mainDisplay');
mainDisplay.append(newTodoButton);

newTodoButton.addEventListener('click', () => {
  newTodoButton.disabled = true;
  const disposableInterface = document.createElement('div');
  disposableInterface.classList.add('disposable');
  document.body.append(disposableInterface);
  const title = document.createElement('input');
  title.placeholder = 'Title';
  disposableInterface.append(title);

  const description = document.createElement('input');
  description.placeholder = 'Description';
  disposableInterface.append(description);

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'date');
  dueDate.setAttribute('value', '2022-02-15');
  disposableInterface.append(dueDate);

  const prioArray = ['Priority', '!', '!!', '!!!'];
  const priority = document.createElement('select');
  priority.classList.add('prioritySelectList');
  for (let i = 0; i < prioArray.length; i += 1) {
    const option = document.createElement('option');
    option.value = prioArray[i];
    option.text = prioArray[i];
    priority.appendChild(option);
  }
  disposableInterface.append(priority);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.classList.add('submit');
  disposableInterface.append(submitBtn);

  const newTodo = new Todos(title, description, dueDate, priority);

  submitBtn.addEventListener('click', () => {
    const location = document.querySelector('.todoContainers');
    const dataDiv = document.createElement('div');
    if (priority.value === 'Priority' || priority === '!') {
      dataDiv.style.background = 'white';
    } else if (priority.value === '!!') {
      dataDiv.style.background = 'rgb(255, 255, 159)';
    } else if (priority.value === '!!!') {
      dataDiv.style.background = 'rgb(246, 71, 71)';
    }
    dataDiv.classList.add('dataDiv');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteProject');
    const expandButton = document.createElement('button');
    expandButton.classList.add('expandProject');
    dataDiv.innerText = `Title: ${newTodo.title.value} \n Description: ${newTodo.description.value} \n Due Date: ${newTodo.dueDate.value} \n Priority: ${newTodo.priority.value}`;
    location.append(dataDiv);
    dataDiv.append(expandButton);
    dataDiv.append(deleteButton);
    disposableInterface.replaceWith('');
    newTodoButton.disabled = false;
    deleteButton.addEventListener('click', () => {
      location.removeChild(dataDiv);
    });
    expandButton.addEventListener('click', () => {
      dataDiv.classList.toggle('expanded');
    });
  });
});
