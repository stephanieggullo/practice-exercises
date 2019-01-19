'use strict';

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const dataRetrieve = document.querySelector('.data-retrieve');

const listOrgs = document.querySelector('.list-orgs');



const fetchUser = (orgname) => {

    fetch('https://api.github.com/orgs/' + orgname)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const reposUrl = data.repos_url;

            fetch(reposUrl)
                .then(response => { 
                    return response.json();
                })
                .then ( data => {
                    console.log(data);
                    const repos = data;
                    let ulContent = '';
                    for (const repo of repos) {
                        const listContent = `<li>${repo.name}</li>`;
                        ulContent += listContent;
                    }
                    listOrgs.innerHTML = ulContent;
                })
         

        });
};
//.catch(error => console.log(`Ha sucedido un error: ${error}`));


const handleInfoSearch = () => {
    const orgsSearch = input.value;
    console.log(orgsSearch);
    fetchUser(orgsSearch);
};


btn.addEventListener('click', handleInfoSearch);

