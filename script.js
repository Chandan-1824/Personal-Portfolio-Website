const menuButtons = document.querySelector("#menubar");
const menuBarItems = document.querySelector(".options");


menuButtons.addEventListener('click', ()=>{
    if( menuBarItems.style.right == '-300px'){
        menuBarItems.style.right = '0';
    }
    else{
        menuBarItems.style.right = '-300px'
    }
})

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");


function openTab(tabname){
    for( tabLink of tabLinks){
        tabLink.classList.remove("active");
    }
    for( tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}