

function openmenu() {
    document.getElementById("menu-container").style.display = 'block';
    document.getElementById("non-menu").style.display = 'none';
    document.getElementById("scrolldowngif").style.display = 'none';
    document.getElementById('html').style.overflow = 'hidden';
}

function closemenu() {
    document.getElementById("menu-container").style.display = 'none';
    document.getElementById("non-menu").style.display = 'block';
    document.getElementById("scrolldowngif").style.display = 'block';
    document.getElementById('html').style.overflow = 'scroll';
    window.scroll(0, 0); 
}
