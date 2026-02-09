var button_menu_mobile = document.querySelector("#mobile_menu_button");
var menu_mobile = document.querySelector("#menu_mobile");


var contact_btn = document.querySelector("#contact_mobile_btn");
var popup_contact = document.querySelector("#popup_mobile");


var image = document.querySelector("#contact_mobile_btn img");

var humburger_image = document.querySelector("#humburger_image");

var close_image = document.querySelector("#close_image");

button_menu_mobile.onclick = function () {
    if (menu_mobile.style.display === 'block') {
        menu_mobile.style.display = 'none'
        close_image.style.display = 'none';
        humburger_image.style.display = 'block';
        

        

    } 
    else  {
        menu_mobile.style.display = 'block'
        close_image.style.display = 'block';
        humburger_image.style.display = 'none';

        
    }

}



contact_btn.onclick = function (){
    if (popup_contact.style.visibility === 'visible'){
        popup_contact.style.visibility = 'hidden'
        contact_btn.style.color = 'hsl(208, 49%, 24%)'
        image.style.transform = 'rotate(0deg)'
        
    }
    else{
        popup_contact.style.visibility = 'visible'
        
        contact_btn.style.color = 'hsl(207, 13%, 34%)'
        image.style.transform = 'rotate(180deg)'
    }

        

}


