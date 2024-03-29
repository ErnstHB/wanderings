/*****************************
Logic-1 -- alarmClock
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we 
are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. 
Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". 
Unless we are on vacation - then on weekdays it should be "10:00" and weekends it should be "off".

Examples

alarmClock(1, false) → 7:00
alarmClock(5, false) → 7:00
alarmClock(0, false) → 10:00
*****************************/

function alarmClock(day, vacation){
  let alarm, time;
  let weekEnd = (day === 0 || day === 6);
  if(vacation){
    if(!weekEnd){
      time = 10;
    }
  } else {
    if(weekEnd){
      time = 10;
    } else {
      time = 07;
    }
  }
  if(time){
    alarm = `${time}:00`;
  } else {
    alarm = 'off';
  }
  return alarm;
}