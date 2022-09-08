export function currentDate(){
    const date = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()]+', '+date.toLocaleString('default', { month: 'long' })+' '+date.toLocaleString('default',{day: 'numeric'})+', '+' '+date.getFullYear();
}
export function timestampDate(unixTimestamp){
    const date = new Date(unixTimestamp);
    return (date.toLocaleString('default',{day: 'numeric'})+' '+date.toLocaleString('default', { month: 'long' })+' '+date.getFullYear()+' - '+addZero(date.getHours())+date.getHours()+"."+date.getMinutes()+((date.getHours() >= 12) ? " PM" : " AM"))
}
export function timestampOnlyDate(unixTimestamp){
    const date = new Date(unixTimestamp);
    return (date.toLocaleString('default',{day: 'numeric'})+' '+date.toLocaleString('default', { month: 'long' })+' '+date.getFullYear())
}
export function timestampTime(unixTimestamp){
    const date = new Date(unixTimestamp);
    return (addZero(date.getHours())+date.getHours()+"."+date.getMinutes()+((date.getHours() >= 12) ? " PM" : " AM"))
}
export function timestampDate1(unixTimestamp){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(unixTimestamp);
    return (days[date.getDay()]+' - '+addZero(date.getHours())+date.getHours()+"."+date.getMinutes()+((date.getHours() >= 12) ? " PM" : " AM"))
}
export function addZero(i) {
    if (i < 10) {
      i = "0";
    }else{
      i="";
    }
    return i;
}
export function get_time(start_time,end_time){
    var countDownDate = new Date(end_time).getTime();
    // Update the count down every 1 second
    // Get today's date and time
    var now = new Date(start_time).getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    //document.getElementById("countdown").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
    var current_time=days + "D " + hours + "H " + minutes + "M " + seconds + "S ";  
    return current_time; 
}
export function get_full_time(start_time,end_time){
    var countDownDate = new Date(end_time).getTime();
    // Update the count down every 1 second
    // Get today's date and time
    var now = new Date(start_time).getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    //document.getElementById("countdown").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
    var current_time=days + ":" + hours + ":" + minutes + ":" + seconds + "";  
    return current_time; 
}