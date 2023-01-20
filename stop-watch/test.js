var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
console.log(datetime)

var getTime = currentdate.getHours()
console.log(getTime)
if (getTime < 19) {
  console.log("AM")
}
else if (getTime >= 19) {
  console.log("PM")
}