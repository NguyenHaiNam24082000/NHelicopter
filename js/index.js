const bgCanvas= document.getElementById('bg-canvas');
const buttonPlayBefore= document.getElementById('play-btn-before');
const buttonPlayAfter= document.getElementById('play-btn-after');
const buttonBgChange = document.getElementById('button-bg-change-id');
let urlBg="url(../images/background-1.png)";
function changeBg(urlImg)
{
    urlBg=urlImg;
    console.log(urlBg)
}
function playGame()
{
    buttonPlayAfter.style.animation="click-button 1s linear";
    setTimeout(function()
    {
        buttonPlayAfter.style.animation="";
        buttonPlayAfter.style.display="none";
        buttonPlayBefore.style.display="none";
        buttonBgChange.style.display="none";
        bgCanvas.style.animation="bg-run 2s linear infinite"
        bgCanvas.style.background=urlBg;
    },1050)
}