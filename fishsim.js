var day = 0;
var nitratePerFoodGram = 198.4;

class tank{
    constructor(gal=40, ammonia=0, nitrite=0, nitrate=0){
        this.gal = gal;
        this.ammonia = ammonia;
        this.nitrite = nitrite;
        this.nitrate = nitrate;
        this.liters = this.gal * 3.78541;
    }
    waterchange(){
    //adjust parameters ammonia, nitrite, nitrate based on tank size, amount changed. too much fluctuation - lower health 
    //ask how many gallons to change
    var galChange = prompt('How many gallons to change?');
    //get proportion remaining, to multiply nitrates by
    if (!isNaN(galChange)){
        var remainProp = 1 - (galChange / this.gal); 
        this.nitrate = remainProp * this.nitrate;
        document.getElementById('nitrate').innerHTML = this.nitrate.toFixed(2);
    }
}
}

class fish{
    constructor(name, health=100, weight=100, satiety=1){
        this.name = name;
        this.health = health;
        this.satiety = satiety; 
        this.fedToday = false;
        this.weight = weight;
        this.foodGrams = weight * .01;
    }
    feed(){
    //increase satiety - limited to once per day
    //feeding increases satiety, disables feed button 
    if(this.satiety<3){
        this.satiety++;
        document.getElementById('satiety').innerHTML = this.satiety;
        this.fedToday = true;
    }
    //disable
    document.getElementById('feed-btn').disabled = true;
    //adjust water quality: assume 100g (small) goldfish, based on 40 gal
    // 2 mg/L nitrate end of day 
    // 0.45 mg/L immediate ammonia, simplify to 0 by end of day 
    // 0.05 - 0.1 mg/L nitrite brief transient spike - realism
    this.waste();
}
    waste(){
        myTank.nitrate = myTank.nitrate + nitratePerFoodDay;
        document.getElementById('nitrate').innerHTML = myTank.nitrate.toFixed(2);
    }
}

const myFish = new fish("Sashimi");
const myTank = new tank();

var nitratePerFoodDay = (nitratePerFoodGram * myFish.foodGrams) / myTank.liters;

document.getElementById('day').innerHTML = day;
document.getElementById('health').innerHTML = myFish.health;
document.getElementById('satiety').innerHTML = myFish.satiety;
document.getElementById('ammonia').innerHTML = myTank.ammonia;
document.getElementById('nitrite').innerHTML = myTank.nitrite;
document.getElementById('nitrate').innerHTML = myTank.nitrate;
document.getElementById('gallons').innerHTML = myTank.gal;
document.getElementById('fishName').innerHTML = myFish.name;

function forward(){
    //progress day, ammonia, nitrite, nitrate, satiety, health (good cond vs bad)
    day++;
    document.getElementById('day').innerHTML = day;
    //re-enable feed button
    document.getElementById('feed-btn').disabled = false;
    //satiety
    if (myFish.fedToday == false){
        myFish.satiety -= 1;
        document.getElementById('satiety').innerHTML = myFish.satiety; 
    }
    myFish.fedToday = false;
}