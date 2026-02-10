var image = document.querySelector("#contact img");
var navbar = document.querySelector("#popup");
var button = document.querySelector("#contact");

button.onclick = function() {
    if (navbar.style.display === "none"){
        navbar.style.display = 'block'
        image.style.transform = 'rotate(180deg)'
        
    }     
    else{
        navbar.style.display = 'none'
        image.style.transform = 'rotate(0deg)'
        
    }
}