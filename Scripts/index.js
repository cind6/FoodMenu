"use strict";

console.log("begin index.js");

const categorySelect = document.getElementById("categorySelect");
const availableItemsListbox = document.getElementById("availableItemsListbox");

let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};


window.onload = function () {

    categorySelect.onchange = onCategorySelectChange;

};


function onCategorySelectChange() {
    availableItemsListbox.options.length = 0
    let currentValue = categorySelect.value;
    console.log(currentValue);

    if(currentValue == "drinks"){
        let drinkscount = menu.drinks.length;
        for( let i = 0 ; i < drinkscount ; i++){
            let item = menu.drinks[i]
            let newOption = new Option(item, item);
            availableItemsListbox.appendChild(newOption);
        }
    }
    else if(currentValue == "entrees"){
        for( let item of menu.entrees){
            let newOption = new Option(item, item);
            availableItemsListbox.appendChild(newOption);
        }
    }
    else if(currentValue == "desserts"){
        for( let item of menu.desserts){
            availableItemsListbox.appendChild(new Option(item, item));
        }
    }
    else{

    }

}