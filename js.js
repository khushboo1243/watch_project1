const hour=document.getElementById('hr');
const minut=document.getElementById('mint');
const second1=document.getElementById("second");
setInterval(()=>{
    let data=new Date();
    let hr=data.getHours()*30;
    let mint=data.getMinutes()*6;
    let second=data.getSeconds()*6;
    hour.style.transform=`rotatez(${(hr)+(mint/12)}deg)`;
    minut.style.transform=`rotatez(${mint}deg)`;
    second1.style.transform=`rotatez(${second}deg)`;
})

