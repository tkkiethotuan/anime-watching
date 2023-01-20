var setHours = setInterval(function(){
    var getTime = new Date()
    var get_hours = getTime.getHours()
    var get_hours_box = document.querySelector(".hours")
    get_hours_box.innerText = get_hours
}, 1000)

var getTime = new Date()

var setMinutes = setInterval(function(){
    var getTime = new Date()
    var get_minutes = getTime.getMinutes()
    var get_minutes_box = document.querySelector(".minutes")
    get_minutes_box.innerText = get_minutes
}, 1000)

var setSeconds = setInterval(function(){
    var getTime = new Date()
    var get_seconds = getTime.getSeconds()
    var get_seconds_box = document.querySelector(".seconds")
    get_seconds_box.innerText = get_seconds
}, 1000)