const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


const temperature = 28;
const windSpeed = 15;


function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + " °C";
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed);
}

const windchillElement = document.getElementById("windchill");

if (windchillElement) {
    windchillElement.textContent = windChill;
}
