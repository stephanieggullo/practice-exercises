'use stricts';
const list = document.querySelector('.list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: false },
    { name: 'Comprar pilas', completed: false },
    { name: 'Poner una lavadora de blancos', completed: false },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false }
];


function updateTask(key, value) {
   // console.log(key);
    //console.log(value);
    tasks[key] = value;
    localStorage.setItem("datos", JSON.stringify(tasks));
  }

for (let task of tasks) {
    const listInputs = document.createElement('li');
    const inputTask = document.createElement('input');
    inputTask.type = "checkbox";
    inputTask.classList.add('input-checked');
    const labelTask = document.createElement('label');
    const nameTask = task.name;
    labelTask.appendChild(document.createTextNode(nameTask));
    
    listInputs.appendChild(inputTask);
    listInputs.appendChild(labelTask);
    list.appendChild(listInputs);
}

const allInputs = document.querySelectorAll('.input-checked');
const handleChange = (event) => {

    const selected = event.currentTarget;
    const parent = selected.parentElement;
   // console.log(selected);
    parent.classList.toggle('task-class');
    updateTask( nameTask.selected , true);

}

for (let inputCheck of allInputs) {
    inputCheck.addEventListener("click", handleChange);
}