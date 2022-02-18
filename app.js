//Convert from Pounds to Kilograms 	kg=lb/2.2046
//Convert from Kilograms to Pounds 	lb=kg*2.2046
//Convert from Feet to Meters 	m=ft/3.2808
//Convert from Meters to Feet 	ft=m*3.2808





let meter = document.getElementById('outputMetres')





function setInput(valNum) {
    document.getElementsByClassName("inputNum").innerHTML = valNum;
}


function feetConverter(valNum) {
    meter.innerHTML = valNum / 3.2808;
}

function metreConverter(valNum) {
    document.getElementById('outputFeet').innerHTML = valNum * 3.2808;
}
