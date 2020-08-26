const bgCanvas= document.getElementById('bg-canvas');
const buttonPlayBefore= document.getElementById('play-btn-before');
const buttonPlayAfter= document.getElementById('play-btn-after');
const urlImage = {
    bg1:    "url(../images/background-1.png)",
    bg2:    "url(../images/background-1.png)",
    bg3:    "url(../images/background-1.png)",
    bg4:    "url(../images/background-1.png)",
    bg5:    "url(../images/background-1.png)",
    bg6:    "url(../images/background-1.png)",
    bg7:    "url(../images/background-1.png)",
};
function playGame()
{
    console.log(urlImage["bg"+Math.floor(Math.random()*7+1)]);
    this.addEventListener('click',function()
    {
        buttonPlayAfter.style.animation="click-button 2s";
    });
    setTimeout(function()
    {
        bgCanvas.style.background=urlImage["bg"+Math.floor(Math.random()*7+1)];
        buttonPlayAfter.style.display="none";
        buttonPlayBefore.style.display="none";
    },2050);
}
