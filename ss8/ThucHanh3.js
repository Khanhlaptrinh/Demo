let imgObj = null;
imgObj = document.getElementById('myImage');
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = 'Opx';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10000 +'px';
}
window.onload = init;