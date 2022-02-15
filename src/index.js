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
  dueDate.setAttribute("type","date");
  dueDate.setAttribute("value", "2022-02-15");
  disposableInterface.append(dueDate);

  const prioArray = ['Priority','!','!!','!!!'];
  let priority = document.createElement('select');
  priority.classList.add('prioritySelectList');
  for (var i = 0; i < prioArray.length; i++){
    var option = document.createElement("option");
    option.value = prioArray[i];
    option.text = prioArray[i];
    priority.appendChild(option);
  }
  disposableInterface.append(priority);

  let submitBtn = document.createElement('button');
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("submit")
  disposableInterface.append(submitBtn)

  let newTodo = new Todos(title, description, dueDate, priority);

  submitBtn.addEventListener("click", function(){
    let location = document.querySelector(".todoContainers");
    let dataDiv = document.createElement('div');
    if (priority.value == 'Priority' || priority == '!'){
    dataDiv.style.background="white";
  } else if (priority.value == '!!'){
    dataDiv.style.background="rgb(255, 255, 159)";
  } else if (priority.value == '!!!'){
    dataDiv.style.background="rgb(246, 71, 71)";
  }
    dataDiv.classList.add('dataDiv');
    let deleteButton = document.createElement("button");
    deleteButton.classList.add('deleteProject');
    let expandButton = document.createElement("button");
    expandButton.classList.add('expandProject');
    dataDiv.innerText=`Title: ${newTodo.title.value} \n Description: ${newTodo.description.value} \n Due Date: ${newTodo.dueDate.value} \n Priority: ${newTodo.priority.value}`;
    location.append(dataDiv);
    dataDiv.append(expandButton);
    dataDiv.append(deleteButton);
    disposableInterface.replaceWith("")
    newTodoButton.disabled = false;
    deleteButton.addEventListener('click', function (){
      location.removeChild(dataDiv)
    });
    expandButton.addEventListener('click', function(){
      dataDiv.classList.toggle("expanded");
    })
  });
});


