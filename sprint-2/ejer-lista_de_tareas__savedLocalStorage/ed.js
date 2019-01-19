'use stricts';
const list = document.querySelector('.list');

let tasks = [
    { name: 'Recoger setas en el campo', completed: false },
    { name: 'Comprar pilas', completed: false },
    { name: 'Poner una lavadora de blancos', completed: false },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false }
];

const saved = JSON.parse(localStorage.getItem("datos"));
console.log(saved);
if (saved) {
    tasks = saved;
}

const handleChange = (event) => {

    console.log(event.currentTarget);
    const parent = event.currentTarget.parentElement;
    console.log(parent);
    const label = parent.childNodes[1];
    console.log(label);
    const text = label.innerHTML;
    console.log(text);

    for (let task of tasks) {
        if (task.name === text) {
            task.completed = !task.completed;
        }
    }

    fillList();

}

function fillList() {
    list.innerHTML = "";
    for (let task of tasks) {
        const li = document.createElement('li');
        const input = document.createElement('input');
        const label = document.createElement('label');
        input.type = "checkbox";
        input.classList.add('input-checked');
        const name = task.name;
        label.appendChild(document.createTextNode(name));
        li.appendChild(input);
        li.appendChild(label);
        list.appendChild(li);
        console.log(task.completed);
        console.log(li);
        if (task.completed == true) {
            input.setAttribute("checked", true);
            li.classList.add("task-class");
        } else {
            input.removeAttribute("checked");
            li.classList.remove("task-class");
            console.log(li);
        }
    }

    const allInputs = document.querySelectorAll('.input-checked');

    for (let inputCheck of allInputs) {
        inputCheck.addEventListener("click", handleChange);
    }

    localStorage.setItem("datos", JSON.stringify(tasks));
}

fillList();
