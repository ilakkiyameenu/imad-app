console.log('Loaded!');
//to chnge the text inside the id of main-text
var element=document.getElementById('main-text'
);
element.innerHTML = 'new text';
var img=document.getElementById('madi');
var marginleft=0;
function moveRight()
{
marginLeft+=10;
img.style.marginLeft= marginLeft + 'px';
}

img.onclick = function()
{
    img.style.marginLeft =  '100px';
};
