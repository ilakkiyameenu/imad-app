console.log('Loaded!');
//to chnge the text inside the id of main-text
var element=document.getElementById('ilakkiya anbalagant'
);
element.innerHTML = 'new text';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
marginLeft=marginLeft+1;
img.style.marginLeft= marginLeft + 'px';
}

img.onclick = function()
{
var interval= setInterval(moveRight,10);
};
