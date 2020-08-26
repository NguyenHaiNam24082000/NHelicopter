const bgCanvas= document.getElementById('bg-canvas');
const buttonPlayBefore= document.getElementById('play-btn-before');
const buttonPlayAfter= document.getElementById('play-btn-after');
const urlImage = bgCanvas.getAttribute('data-bg-image');
function playGame()
{
    console.log("url("+ urlImage +"-"+(Math.floor(Math.random()*7)+1)+".png)");
    this.addEventListener('click',function()
    {
        buttonPlayAfter.style.animation="click-button 2s";
    });
    setTimeout(function()
    {
        bgCanvas.style.background="url("+ urlImage +"-"+(Math.floor(Math.random()*7)+1)+".png)";
        buttonPlayAfter.style.display="none";
        buttonPlayBefore.style.display="none";
    },2050);
}
