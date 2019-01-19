'use strict';
const inputName = document.querySelector('#name');
const inputLastName = document.querySelector('#last-name');
const inputPhone = document.querySelector('#phone');
const userContein = document.querySelector('#user');

let selectedUser = {
  name: '',
  lastName: '',
  phone: ''
};

let users = [
  {
    name: 'ana',
    lastName: 'Perez',
    phone: '000-000-000'
  },
  {
    name: 'pedro',
    lastName: 'Rodriguez',
    phone: '111-111-111'
  },
  {
    name: 'daniela',
    lastName: 'leon',
    phone: '222-222-222'
  }
];

// Reviso si existe data guardada en el local storage
let savedData = localStorage.getItem('usersData');

// En caso de haber data guardada, igualo mi variable users a lo que esta guardado
if (savedData) {
  users = JSON.parse(savedData);
}

// Llamo a esta funcion en cada cambio de input para actualizar tanto mi variable local users
// como la data que tengo en el localStorage
function updateData(key, value) {
  users[key] = value;
  localStorage.setItem('usersData', JSON.stringify(users));
}

const handleSelectUser = (event) => {

  const selectUser = event.target.value;
  console.log(selectUser);

  if(selectUser === 'Ana'){
    selectedUser = users[0];
  } else if(selectUser === 'pedro') {
    selectedUser = users[1];
  } else if(selectUser === 'daniela') {
    selectedUser = users[2];
  }
  inputName.value = selectedUser.name;
  inputLastName.value = selectedUser.lastName;
  inputPhone.value = selectedUser.phone;
}

/*  updateData('name', inputName.value);
  updateData('LastName', inputLastName.value);
  updateData('Phone', inputPhone.value); */
const handleNameChange = (event) => {
  const newName = event.target.value;

  for (let user of users) {
    if (user.name === selectedUser.name) {
      user.name = newName;
      updateData('name', newName);
    }
  }

}

const handlelastChange = (event) => {}
const handlePhoneChange = (event) => {}


userContein.addEventListener('change', handleSelectUser);
inputName.addEventListener('keyup', handleNameChange);
inputLastName.addEventListener('keyup', handlelastChange);
inputPhone.addEventListener('keyup', handlePhoneChange);


