import {initialPageLoad} from "./initialPageLoad.js";
import {aboutPageLoader} from "./aboutPageLoader.js";
import {menuPageLoader} from "./menuPageLoader.js";
import "./styles.css"; 

initialPageLoad();

document.querySelector(".homeButton").addEventListener("click", ()=>{
    initialPageLoad();
})

document.querySelector(".aboutButton").addEventListener("click", ()=>{
    aboutPageLoader();
})

document.querySelector(".menuButton").addEventListener("click", ()=>{
    menuPageLoader();
})