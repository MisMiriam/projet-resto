const closeMenuBtn = document.querySelector('.close-btn');
const openMenuBtn = document.querySelector('.open-btn');
const menu = document.querySelector('.toggle-menu');

openMenuBtn.addEventListener('click', () =>{
    menu.classList.add('show');
    menu.classList.remove('hide');
});
closeMenuBtn.addEventListener('click', () =>{
    menu.classList.add('hide');
    menu.classList.remove('show');
});