import { getLogo } from './logo/logo.js'
import { getItem } from './nav-item/nav-item.js'

let logo = document.getElementById("logo");
let navBar = document.getElementById("navBar");

let navItemNames = ["work", "contato", "linkedin", "github"];

window.onload = function () {
  logo.innerHTML = getLogo();
  navBar.innerHTML = navItemNames.map(itemName => getItem(itemName)).join("");
};


