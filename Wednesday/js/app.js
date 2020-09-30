let startersMenu = dishes.filter(dishes => dishes.course ==="Starters")
let entreesMenu = dishes.filter(dishes => dishes.course ==="Entrees")
let dessertsMenu = dishes.filter(dishes => dishes.course ==="Desserts")


let starters = document.getElementById('starters')
let entrees = document.getElementById('entrees')
let desserts = document.getElementById('desserts')

let postStarter = startersMenu.map(function(startersMenu){
    return `<div class="foodDisplay">
                <div>
                    <img src="${startersMenu.imageURL}" class = "foodImage"/>
                </div>
                <div style="margin-left: 10px">
                    <b>${startersMenu.title}</b>
                    <p>${startersMenu.description}<p>
                    <p>Price: ${startersMenu.price}</p>
                </div> 
            </div>
    `
})
let postEntrees = entreesMenu.map(function(entreesMenu){
    return `<div class="foodDisplay">
            <div>
                <img src="${entreesMenu.imageURL}" class = "foodImage"/>
            </div>
            <div style="margin-left: 10px">
               <b>${entreesMenu.title}</b>
               <p>${entreesMenu.description}<p>
               <p>Price: ${entreesMenu.price}</p>
            </div>
            </div>
    `
})
let postDessert = dessertsMenu.map(function(dessertsMenu){
    return `<div class="foodDisplay">
            <div>
                <img src="${dessertsMenu.imageURL}" class = "foodImage"/>
            </div>
            <div style="margin-left: 10px">    
               <b>${dessertsMenu.title}</b>
               <p>${dessertsMenu.description}<p>
               <p>Price: ${dessertsMenu.price}</p>
            </div>
            </div>
    `
})


starters.insertAdjacentHTML("beforeend",postStarter.join(' '))
entrees.insertAdjacentHTML("beforeend",postEntrees.join(' '))
desserts.insertAdjacentHTML("beforeend",postDessert.join(' '))

let starterButton = document.getElementById("showStarter")
starterButton.addEventListener("click",function(){
    entrees.style.display = "none";
    desserts.style.display = "none";
    starters.style.display ="block"
})
let entreesButton = document.getElementById("showEntrees")
entreesButton.addEventListener("click",function(){
    starters.style.display = "none";
    desserts.style.display = "none";
    entrees.style.display = "block"
})

let dessertsButton = document.getElementById("showDesserts")
dessertsButton.addEventListener("click",function(){
    starters.style.display = "none";
    entrees.style.display = "none";
    desserts.style.display = "block"
})

let menuButton = document.getElementById("showMenu")
menuButton.addEventListener("click",function(){
    starters.style.display = "block";
    entrees.style.display = "block";
    desserts.style.display = "block"
})