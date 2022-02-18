//Convert from Pounds to Kilograms 	kg=lb/2.2046
//Convert from Kilograms to Pounds 	lb=kg*2.2046
//Convert from Feet to Meters 	m=ft/3.2808
//Convert from Meters to Feet 	ft=m*3.2808



let newInput = document.getElementsByClassName('inputNum')
let meter = document.getElementById('outputMetres')
let feet = document.getElementById('outputFeet')
let pound = document.getElementById('outputPounds')
let kilo = document.getElementById('outputKilo')



function setInput(valNum) {
    for(let i = 0; i < newInput.length; i++) {
        newInput[i].innerHTML = valNum;
    }
    console.log(newInput)
}


function feetConverter(valNum) {
    meter.innerHTML = valNum / 3.2808;
}

function metreConverter(valNum) {
    feet.innerHTML = valNum * 3.2808;
}

function kiloConverter(valNum) {
    pound.innerHTML = valNum * 2.2046;
}

function poundConverter(valNum) {
    kilo.innerHTML = valNum / 2.2046;
}