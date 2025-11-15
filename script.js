var t = 0;
var speed = 1;
var final = "Λ";

var bits = [
  [[""],[""]],
  [["ω+"],[""]],
  [["ω<sup>2</sup>+"],[""]],
  [["ω<sup>3</sup>+"],[""]],
  [["ω<sup>"],["</sup>"]],
  [["ε<sub>0</sub>+"],[""]],
  [["ε<sub>0</sub>*("],[")"]],
  [["ε<sub>0</sub><sup>"],["</sup>"]],
  [["ε<sub>1</sub>*("],[")"]],
  [["ε<sub>1</sub><sup>"],["</sup>"]],
  [["ε<sub>2</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>0</sub>+"],[""]],
  [["ζ<sub>0</sub>*("],[")"]],
  [["ζ<sub>0</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>1</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>"],["</sub>"]],
  [["η<sub>"],["</sub>"]],
  [["φ<sub>5</sub>("],[")"]],
  [["φ<sub>6</sub>("],[")"]],
  [["φ<sub>"],["</sub>(0)"]],
  [["Γ<sub>0</sub>+"],[""]],
  [["Γ<sub>0</sub><sup>2</sup>+"],[""]],
  [["Γ<sub>0</sub><sup>3</sup>+"],[""]],
  [["Γ<sub>0</sub><sup>"],["</sup>"]],
  [["Γ<sub>1</sub>+"],[""]],
  [["Γ<sub>1</sub><sup>2</sup>+"],[""]],
  [["Γ<sub>1</sub><sup>3</sup>+"],[""]],
  [["Γ<sub>1</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>"],["</sub>"]],
  [["η<sub>"],["</sub>"]],
  [["φ<sub>5</sub>("],[")"]],
  [["φ<sub>6</sub>("],[")"]],
  [["φ<sub>"],["</sub>(0)"]],
  [["Γ<sub>2</sub>+"],[""]],
  [["Γ<sub>2</sub><sup>2</sup>+"],[""]],
  [["Γ<sub>2</sub><sup>3</sup>+"],[""]],
  [["Γ<sub>2</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>"],["</sub>"]],
  [["η<sub>"],["</sub>"]],
  [["φ<sub>5</sub>("],[")"]],
  [["φ<sub>6</sub>("],[")"]],
  [["φ<sub>"],["</sub>(0)"]],
  [["Γ<sub>"],["</sub>"]]
];

var limits = [
  0, 2000, 5000, 10000, 15000, 30000, 40000, 50000, 70000, 80000,
  100000, 120000, 175000, 185000, 195000, 210000, 240000, 250000, 270000, 320000,
  350000, 360000, 365000, 500000, 750000, 1000000, 1250000, 1500000, 1750000, 2000000,
  2250000, 2500000, 2750000, 3000000, 3250000, 3500000, 3750000, 4000000,
  4250000, 4500000, 4750000, 5000000, 5250000, 5500000, 5750000, 6000000, 6250000, 6500000, 6750000
];

var offsets = [
  0,0,0,0,1600,0,2000,2000,1333.3334,2000,
  1333.3334,1500,0,2000,2000,175054.0541,1000,240013.3869,1500,0,
  0,0,1750,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0
];

function findLimit(n){
  var i = 0;
  while(limits[i] <= n){
    i++;
  }
  return Math.min(i-1, bits.length-1);
}

function LRemainder(n){
  var i = 0;
  while(limits[i] <= n){
    i++;
  }
  return ((n-limits[i-1])/(limits[i]-limits[i-1]))*(limits[i]-offsets[i-1])+offsets[i-1];
}

function parse(n){
  if(findLimit(n) == 0){
    return Math.floor(1/(1-(n/2000)))-1;
  } else if(n < limits[limits.length-1]) {
    return bits[findLimit(n)][0] + parse(LRemainder(n)) + bits[findLimit(n)][1];
  } else {
    return final;
  }
}

setInterval(function(){
  t += speed;
  document.getElementById("num").innerHTML = parse(t);
},10);
