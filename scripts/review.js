let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

numReviews++;

localStorage.setItem("numReviews-ls", numReviews);

document.querySelector("#reviewCount").textContent = numReviews;

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;