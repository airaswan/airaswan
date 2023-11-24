const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav= document.getElementById('navbar')

if (bar){

    bar.addEventListener('click',()=>
    {
        nav.classList.add('active')
    });
}

if (close){

    close.addEventListener('click',()=>
    {
        nav.classList.remove('active')
    });
}


function changeColor() {
    var gameTitle = document.getElementById('gameTitle');
    var currentColor = getComputedStyle(gameTitle).color;

    
    var newColor = currentColor === 'rgb(0, 0, 0)' ? '#FF4A96' : 'black';

    gameTitle.style.color = newColor;
}
