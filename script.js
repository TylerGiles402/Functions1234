var damageEle = document.body.querySelector(".damage");
var attackEle = document.body.querySelector(".attack");
var numberEle = document.body.querySelector(".number");
var number=0;
numberEle.innerHTML=number;

function damage(){
  number=number+1;
  numberEle.innerHTML=number;
}

function attack(){
  number=number-1;
  numberEle.innerHTML=number;
}

damageEle.addEventListener("click", function(){
  damage();
})
attackEle.addEventListener("click", function(){
  attack();
})

var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  }
]

var wrapperEle = document.body.querySelector(".wrapper");
var nameList = ["Bob", "Mavis", "Morty"];
for(var i = 0; i<nameList.length; i++){
  var ele = document.createElement("div");
  ele.innerHTML=nameList[i];
  if (nameList[i] == "Bob") {
    ele.style.color = "Blue";
  }
  
  if (nameList[i] == "Mavis") {
    ele.style.color = "Red";
  }
  
  if (nameList[i] == "Morty") {
    ele.style.color = "Blue";
  }

  wrapperEle.appendChild(ele);
}








var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying){
    if (youHit === 1){
      totalDamage += damageThisRound;
          if (totalDamage >= 10){
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
            }
  } else {
      }
    slaying = false;
    }