var cw=document.body.clientWidth;
if(cw < 512 ){
    document.getElementById('img1').style.height="200px";
    document.getElementById('img2').style.height="200px";
    document.getElementById('img3').style.height="200px";
}else if(cw >512 && cw< 1100)
{
    document.getElementById('img1').style.height="350px";
    document.getElementById('img2').style.height="350px";
    document.getElementById('img3').style.height="350px";
}else{
    document.getElementById('img1').style.height="400px";
    document.getElementById('img2').style.height="400px";
    document.getElementById('img3').style.height="400px";
}