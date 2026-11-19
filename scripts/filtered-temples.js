document.getElementById("currentyear");

const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;


const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("show");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);

    header.classList.toggle("menu-open", isOpen);
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Colombia Bogotá",
    location: "Colombia, Bogotá",
    dedicated: "1999, april, 5",
    area: 11664,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/89b209718a7ed41649a497893e240972b7cfd036/full/500%2C/0/default"
  },
  {
    templeName: "Cordoba Argentina",
    location: "Cordoba, Argentina",
    dedicated: "2015, november, 15",
    area: 25864,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/47f77971f2ad3eb7013b86d2f14e1e491333566c/full/500%2C/0/default"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1950, june, 27",
    area: 58674,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/a3454a8b72b4cc972b3898805ec69cc901a89170/full/500%2C/0/default"
  },
  
];

const templeGrid = document.querySelector("#temple-grid");
const pageHeading = document.querySelector("main h1");

function getDedicatedYear(dedicatedString) {
    return parseInt(dedicatedString.split(",")[0], 10);
}

function renderTemples(templeList) {
    templeGrid.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("article");
        card.classList.add("temple-card");

        const title = document.createElement("h2");
        title.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.append(title, location, dedicated, area, image);
        templeGrid.appendChild(card);
    });
}

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    pageHeading.textContent = "HOME";
    renderTemples(temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();
    pageHeading.textContent = "OLD";
    renderTemples(temples.filter((temple) => getDedicatedYear(temple.dedicated) < 1900));
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();
    pageHeading.textContent = "NEW";
    renderTemples(temples.filter((temple) => getDedicatedYear(temple.dedicated) > 2000));
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();
    pageHeading.textContent = "LARGE";
    renderTemples(temples.filter((temple) => temple.area > 90000));
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();
    pageHeading.textContent = "SMALL";
    renderTemples(temples.filter((temple) => temple.area < 10000));
});

renderTemples(temples);