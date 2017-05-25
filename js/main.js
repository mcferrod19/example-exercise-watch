function showWatch(){
var digital= new Date();
var hours= digital.getHours();
var minutes= digital.getMinutes();
var secons= digital.getSeconds();

c_secons = new String (secons);
if(c_secons.length==1){
secons ="0" + secons;
}

c_minutes = new String (minutes);
if(c_minutes.length==1){
minutes ="0" + minutes;
}

c_hours = new String (hours);
if(c_hours.length==1){
  hours = "0" + hours;
}

printHour: hours + " : " + minutes + " : " + secons;
document.form_watch.watch.value = printHour;

cl.innerHTML = printHour;

setTimeout("showWatch()", 1000);
