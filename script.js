var menu = document.getElementById('menu');

var sidebar = document.getElementById('sidebar');


menu.addEventListener('click', (e) => {

    if(sidebar.style.right=='-50%'){
        sidebar.style.right = '0%';
        menu.innerHTML='Close';
    }else{
        sidebar.style.right = '-50%';
        menu.innerHTML='Menu';
    }

    

});