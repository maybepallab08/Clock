setInterval(function(){
let date = new Date()
let hr=date.getHours()
let min=date.getMinutes()
let sec=date.getSeconds()
let hrmin=hr+(min/60)
let minsec=min+(sec/60)
document.getElementById("hrhand").style.transform="rotate("+(hrmin-3)*30+"deg)";
document.getElementById("minhand").style.transform="rotate("+(minsec-15)*6+"deg)";
document.getElementById("sechand").style.transform="rotate("+(sec-15)*6+"deg)";
},10);
