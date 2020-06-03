//console.log("bjvCJc");

var seconds=0;
var mins=90;
var hrs=0;
var count=0;

function setdate(){

  var dNow = new Date();
  var hour= (dNow.getHours());
  var minutes= (dNow.getMinutes());
  var sec= (dNow.getSeconds());

  hour=hour*30;
  minutes=minutes*6;
  sec=sec*6;

    document.querySelector('#second').style.transform
                      = `rotate(${sec}deg)`;
    document.querySelector('#mins').style.transform
                      = `rotate(${minutes}deg)`;
    document.querySelector('#hrs').style.transform
                      = `rotate(${hour}deg)`;
}

function setClockWithCurrentTime() {

  seconds=seconds+6;

  document.querySelector('#second').style.transform
                         = `rotate(${seconds}deg)`;
//  console.log(current);
if(count%60==0 && count!=0)
{
  mins=mins+6;
  document.querySelector('#mins').style.transform
                         = `rotate(${mins}deg)`;
}

if(count%360==0 && count!=0)
{
  hrs=hrs+6;
  document.querySelector('#hrs').style.transform
                         = `rotate(${hrs}deg)`;
}

count++;
}

function start(){
  setdate();
setInterval(setClockWithCurrentTime, 1000);
}
