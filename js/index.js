const bgCanvas= document.getElementById('bg-canvas');
const buttonPlayBefore= document.getElementById('play-btn-before');
const buttonPlayAfter= document.getElementById('play-btn-after');
let randomBg;
const urlImage = {
    bg1:    "url(.././images/background-1.png)",
    bg2:    "url(.././images/background-2.png)",
    bg3:    "url(.././images/background-3.png)",
    bg4:    "url(.././images/background-4.png)",
    bg5:    "url(.././images/background-5.png)",
    bg6:    "url(.././images/background-6.png)",
    bg7:    "url(.././images/background-7.png)",
};
function playGame()
{
    randomBg=Math.floor(Math.random()*7+1);
    console.log(randomBg);
    this.addEventListener('click',function()
    {
        buttonPlayAfter.style.animation="click-button 1s linear";
    });
    bgCanvas.style.background="rgb(91, 188, 147),"+ urlImage["bg"+randomBg];
    setTimeout(function()
    {
        bgCanvas.style.background=urlImage["bg"+randomBg];
        buttonPlayAfter.style.display="none";
        buttonPlayBefore.style.display="none";
    },1050);
}
