//console.log("bjvCJc");

var sec=0;
var mins=0;
var hour=0;
var secondcount=0;

start();
function setdate(){

  dNow = new Date();
  hour= (dNow.getHours());
  mins= (dNow.getMinutes());
  sec= (dNow.getSeconds());

  hour=hour*30;
  mins=mins*6;
  secondcount=sec;
  sec=sec*6;

    document.querySelector('#second').style.transform
                      = `rotate(${sec}deg)`;
    document.querySelector('#mins').style.transform
                      = `rotate(${mins}deg)`;
    document.querySelector('#hrs').style.transform
                      = `rotate(${hour}deg)`;
}

function setClockWithCurrentTime() {

  sec=sec+6;

  document.querySelector('#second').style.transform
                         = `rotate(${sec}deg)`;
//  console.log(current);
if(secondcount%60==0 && secondcount!=0)
{
  mins=mins+6;
  document.querySelector('#mins').style.transform
                         = `rotate(${mins}deg)`;
}

if(secondcount%360==0 && secondcount!=0)
{

  hour=hour+6;
  document.querySelector('#hrs').style.transform
                         = `rotate(${hour}deg)`;
}

secondcount++;
}

function start(){
  setdate();
setInterval(setClockWithCurrentTime, 1000);
}
