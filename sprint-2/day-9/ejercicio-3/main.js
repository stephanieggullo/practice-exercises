'use strict';

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const dataRetrieve = document.querySelector('.data-retrieve');

const loginName = document.querySelector('.login-name');
const name = document.querySelector('.name');
const repos = document.querySelector('.repos');
const img = document.querySelector('.avatar');

function fetchUser(userName) {


    fetch('https://api.github.com/users/' + userName)
        .then(response => {
            return response.json();
        })
        .then(data => {
            loginName.innerHTML = data.login;
            name.innerHTML = data.name;
            repos.innerHTML = data.public_repos;
            img.src = data.avatar_url;
        });
};

// fetchGame();
// "login"
// "name"
// "public_repos"
// "avatar_url"

const handleInfoSearch = () => {
    const userSearch = input.value;
    fetchUser(userSearch);
};


btn.addEventListener('click', handleInfoSearch);

