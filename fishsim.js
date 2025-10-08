var day = 0;
var ammonia = 0;
var nitrite = 0;
var nitrate = 0;
var gallons = 40;

class fish{
    constructor(name, health=100, satiety=1){
        this.name = name;
        this.health = health;
        this.satiety = satiety; 
    }
}

const myFish = new fish("Sashimi");

var liters = 40 * 3.78541;
var nitratePerFoodGram = 198.4;
var nitratePerFoodDay = nitratePerFoodGram / liters;

document.getElementById('day').innerHTML = day;
document.getElementById('health').innerHTML = myFish.health;
document.getElementById('satiety').innerHTML = myFish.satiety;
document.getElementById('ammonia').innerHTML = ammonia;
document.getElementById('nitrite').innerHTML = nitrite;
document.getElementById('nitrate').innerHTML = nitrate;
document.getElementById('gallons').innerHTML = gallons;
document.getElementById('fishName').innerHTML = myFish.name;

function feed(){
    //increase satiety - limited to once per day
    //feeding increases satiety, disables feed button 
    if(myFish.satiety<3){
        myFish.satiety++;
        document.getElementById('satiety').innerHTML = myFish.satiety;
    }
    //disable
    document.getElementById('feed-btn').disabled = true;
    //adjust water quality: assume 100g (small) goldfish, based on 40 gal
    // 2 mg/L nitrate end of day 
    // 0.45 mg/L immediate ammonia, simplify to 0 by end of day 
    // 0.05 - 0.1 mg/L nitrite brief transient spike - realism 
    nitrate = nitrate + nitratePerFoodDay;
    document.getElementById('nitrate').innerHTML = nitrate.toFixed(2);

}

function waterchange(changed){
    //adjust parameters ammonia, nitrite, nitrate based on tank size, amount changed. too much fluctuation - lower health 
    //ask how many gallons to change
    let gallons = prompt('How many gallons to change?');
}

function forward(){
    //progress day, ammonia, nitrite, nitrate, satiety, health (good cond vs bad)
    day++;
    document.getElementById('day').innerHTML = day;
    //re-enable feed button
    document.getElementById('feed-btn').disabled = false;
}