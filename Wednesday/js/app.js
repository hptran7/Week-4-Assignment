let startersMenu = dishes.filter((dishes) => dishes.course === "Starters");
let entreesMenu = dishes.filter((dishes) => dishes.course === "Entrees");
let dessertsMenu = dishes.filter((dishes) => dishes.course === "Desserts");

let starters = document.getElementById("starters");
let entrees = document.getElementById("entrees");
let desserts = document.getElementById("desserts");

function display(menu) {
  return `<div class="foodDisplay">
                <div>
                <img src="${menu.imageURL}" class = "foodImage"/>
                </div>
                <div style="margin-left: 10px">
                    <b>${menu.title}</b>
                    <p>${menu.description}<p>
                    <p>Price: ${menu.price}</p>
                </div> 
            </div>`;
}

let postStarter = startersMenu.map(display);              
let postEntrees = entreesMenu.map(display);
let postDessert = dessertsMenu.map(display);

starters.insertAdjacentHTML("beforeend", postStarter.join(" "));
entrees.insertAdjacentHTML("beforeend", postEntrees.join(" "));
desserts.insertAdjacentHTML("beforeend", postDessert.join(" "));

let starterButton = document.getElementById("showStarter");
starterButton.addEventListener("click", function () {
  entrees.style.display = "none";
  desserts.style.display = "none";
  starters.style.display = "block";
});
let entreesButton = document.getElementById("showEntrees");
entreesButton.addEventListener("click", function () {
  starters.style.display = "none";
  desserts.style.display = "none";
  entrees.style.display = "block";
});

let dessertsButton = document.getElementById("showDesserts");
dessertsButton.addEventListener("click", function () {
  starters.style.display = "none";
  entrees.style.display = "none";
  desserts.style.display = "block";
});

let menuButton = document.getElementById("showMenu");
menuButton.addEventListener("click", function () {
  starters.style.display = "block";
  entrees.style.display = "block";
  desserts.style.display = "block";
});
