//console.log("bjvCJc");

var seconds=0;
var mins=90;
var hrs=0;
var count=0;
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
setInterval(setClockWithCurrentTime, 1000);
}
