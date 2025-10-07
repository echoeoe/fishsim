var day = 0;
var health = 100;
var satiety = 3;
var ammonia = 0;
var nitrite = 0;
var nitrate = 0;

document.getElementById('day').innerHTML = day;

function feed(){
    //increase satiety - limited to once per day
}

function waterchange(changed){
    //adjust parameters ammonia, nitrite, nitrate based on tank size, amount changed
}

function forward(){
    //progress day, ammonia, nitrite, nitrate, satiety, health (good cond vs bad)
}