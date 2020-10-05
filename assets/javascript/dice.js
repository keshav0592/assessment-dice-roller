let dieRolls = []
let displayAll = document.querySelector("#displayAll");
let reset = document.querySelector("#reset")
let rollButton = document.querySelector("#rollButton");
rollButton.addEventListener("click", function(){
    let numberOfRolls = document.querySelector("#numRolls").value;
    let rollsSum = 0;
    let displayRoll = document.querySelector("#displayRoll");
    let dieSides = document.querySelector("#dieSides").value;
    let shapes = document.querySelector("#shapes")
    let num = 0;
    dieRolls = [];
    shapes.innerHTML ="";
    while(num < numberOfRolls){
       let x = Math.floor(Math.random()*dieSides) + 1;

        rollsSum += x;
        displayRoll.innerHTML = rollsSum;
        dieRolls.push(x);
        shapes.innerHTML += "<div id='die'>"+dieRolls[num]+"</div>"
        num += 1;
    }
    console.log(dieRolls)
})
   
displayAll.addEventListener("click", function(){
    let displayingAll = document.querySelector("#displayingAll");
    let counter = 0;
    displayingAll.innerHTML = "";
    while(counter < dieRolls.length){
        displayingAll.innerHTML += "<li>"+dieRolls[counter]+"</li>"
        
        counter += 1;
    }
})


reset.addEventListener("click",function(){
    displayingAll.innerHTML = "";
    shapes.innerHTML ="";
    dieRolls = [];
    document.querySelector("#numRolls").value = "";
    document.querySelector("#dieSides").value = "";
    document.querySelector("#displayRoll").innerHTML = "";
})