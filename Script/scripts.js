const menuToggle = document.getElementById('menu-toggle');
const navigationMenu = document.getElementById('navigation-menu');
menuToggle.addEventListener('click', function(){
 
    if(navigationMenu.style.display == 'none'){
        navigationMenu.style.display = 'block';
}else {
    navigationMenu.style.display = 'none';
}
})
