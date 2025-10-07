var day = 0;
var health = 100;
var satiety = 1;
var ammonia = 0;
var nitrite = 0;
var nitrate = 0;

document.getElementById('day').innerHTML = day;
document.getElementById('health').innerHTML = health;
document.getElementById('satiety').innerHTML = satiety;
document.getElementById('ammonia').innerHTML = ammonia;
document.getElementById('nitrite').innerHTML = nitrite;
document.getElementById('nitrate').innerHTML = nitrate;

function feed(){
    //increase satiety - limited to once per day
    //feeding increases satiety, disables feed button 
    if(satiety<3){
        satiety++;
        document.getElementById("satiety").innerHTML = satiety;
    }
    //disable
    document.getElementById("feed-btn").disabled = true;

}

function waterchange(changed){
    //adjust parameters ammonia, nitrite, nitrate based on tank size, amount changed
}

function forward(){
    //progress day, ammonia, nitrite, nitrate, satiety, health (good cond vs bad)
    day++;
    document.getElementById('day').innerHTML = day;
    //re-enable feed button
    document.getElementById("feed-btn").disabled = false;
}