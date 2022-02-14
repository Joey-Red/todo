import './style.css';
import Icon from './icon-g1d788bee1_640.png';

const myIcon = new Image();
myIcon.src = Icon;
myIcon.style.maxHeight="150px";

class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  };
};
let newTodoButton = document.createElement("button");
newTodoButton.classList.add("newTodo");
newTodoButton.append(myIcon)
let mainDisplay = document.querySelector('.mainDisplay');
mainDisplay.append(newTodoButton);


newTodoButton.addEventListener("click", function(){
  newTodoButton.disabled = true;
  let disposableInterface = document.createElement("div");
  disposableInterface.classList.add("disposable");
  document.body.append(disposableInterface);
  let title = document.createElement('input');
  title.placeholder="Title";
  disposableInterface.append(title);

  let description = document.createElement('input');
  description.placeholder="Description";
  disposableInterface.append(description);

  let dueDate = document.createElement('input');
  dueDate.placeholder="Due date";
  disposableInterface.append(dueDate);

  let priority = document.createElement('input');
  priority.placeholder="Priority";
  disposableInterface.append(priority);

  let submitBtn = document.createElement('button');
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("submit")
  disposableInterface.append(submitBtn)

  let newTodo = new Todos(title, description, dueDate, priority);

  submitBtn.addEventListener("click", function(){
    let location = document.querySelector(".projectInterface");
    location.append(`Title: ${newTodo.title.value}, Description: ${newTodo.description.value}, Due Date: ${newTodo.dueDate.value}, Priority: ${newTodo.priority.value}`);
    disposableInterface.replaceWith("")
      newTodoButton.disabled = false;

  });

});


