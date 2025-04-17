const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

//Water control
if (temperature > 80) {
    console.log('Watering on');
}  else { 
    console.log('Watering off')
}


// Light control
if (timeOfDay === 'evening') {
    console.log('Lights on')
}  else if   (timeOfDay === 'night') {
    console.log('Lights off')
}  else { 
   console.log('Lights off')
}

//soil control
while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);
}