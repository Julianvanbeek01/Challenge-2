var deg = 6;
var hr = document.getElementById('hr');
var min = document.getElementById('mn');
var sec = document.getElementById('sc');

setInterval(() => {
    var day = new Date();

    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * deg;
    var ss = day.getSeconds() * deg;
    
    if (day.getHours() >= 22) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    hr.style.transform = 'rotateZ(' + (hh + (mm/12)) +'deg)';
    min.style.transform = 'rotateZ(' + mm +'deg)';
    sec.style.transform = 'rotateZ(' + ss +'deg)';
    
    
    if (day.getHours() >= 0 && day.getHours() <= 5) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("message").innerHTML = "It&#39;s Night, time to go to bed!";
    } else if (day.getHours() >= 6 && day.getHours() <= 11) {
        document.getElementById("message").innerHTML = "It&#39;s Morning, time to wake up!";  
    } else if (day.getHours() >= 12 && day.getHours() <= 17) {
        document.getElementById("message").innerHTML = "It&#39;s Afternoon, enjoy your day!";
        
    } else if (day.getHours() >= 18 && day.getHours() <= 23) {
        document.documentElement.setAttribute('data-theme', 'dark'); 
        document.getElementById("message").innerHTML = "It&#39;s getting dark on earth!";
    }
    
    if (day.getHours() == 23) {
        document.getElementById("alert-message").innerHTML = "<strong>Bed time!</strong> It&#39;s time to go to bed";
        document.getElementById("alert").style.display = "block";
    }    
    
    if (day.getHours() == 8) {
        document.getElementById("alert-message").innerHTML = "<strong>Wake up!</strong> It&#39;s time to get out of bed";
        document.getElementById("alert").style.display = "block";
    }
    
});

var date = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.getElementById("day").innerHTML = date.getDate();
document.getElementById("month").innerHTML = months[date.getMonth()];
document.getElementById("year").innerHTML = date.getFullYear();
