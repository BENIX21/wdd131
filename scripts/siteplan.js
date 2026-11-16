document.getElementById("currentyear");

const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;