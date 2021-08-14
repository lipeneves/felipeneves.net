const btnMobile = document.getElementById('btn_menu');

function toggleMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);