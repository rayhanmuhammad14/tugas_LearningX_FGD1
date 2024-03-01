menu = document.getElementById('navbar-icon-toggle');
nav = document.querySelector('ul');

menu.addEventListener('click', function(){
    nav.classList.toggle('slide');
})


document.addEventListener('click', function(e){
    if(!menu.contains(e.target)){
        nav.classList.remove('slide');
    }
})