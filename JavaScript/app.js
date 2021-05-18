const hamb = document.getElementsByClassName("hamb-icon")[0];
const nav = document.querySelector("nav");
const home = document.querySelector("header nav ul li");
const navUl = document.querySelector("header nav ul");
const cameraPara = document.querySelector("#camera .description-container p");
const micPara = document.querySelector("#microphone .description-container p");
const aboutP = document.querySelector("#about p");
const footerP = document.querySelector("footer .information-container address p");
var navDisplay;

function toggleNav() {

    navDisplay = window.getComputedStyle(nav, null).getPropertyValue("display");

    if (navDisplay == "none") {
        nav.style.display = "block";
        hamb.classList.add("cross-hamb-icon");
    }

    else {
        nav.style.display = "none";
        hamb.classList.remove("cross-hamb-icon");
    }
}

document.querySelector("header nav .under-slider").style.width = window.getComputedStyle(home, null).getPropertyValue("width");

$("header nav ul li").hover(

    function(){
        
        var widths = 0;
        var i = 0;
        var children = navUl.children;

        while (children[i].id != this.id) {
            widths += children[i].offsetWidth;
            i++;
        }

        var leftDist = (((55 * this.id) + widths).toString()) + "px";
        $(".under-slider").css("width", $(this).width());
        $(".under-slider").css("left", leftDist);
    }   
);

// window.onscroll = function() {
//     if (cameraPara.getAttribute("data-scroll")==="in") {
//         cameraPara.style.animation = "myAnim 1s linear 1 forwards";
//         document.querySelector("#camera .image-container .photo").style.animation = "myAnim 1s linear 1 forwards";
//         document.querySelector("#camera .description-container h2").style.animation = "myAnim 1s linear 1 forwards";
//     }

//     if (micPara.getAttribute("data-scroll")==="in") {
//         micPara.style.animation = "myAnim 1s linear 1 forwards";
//         document.querySelector("#microphone .image-container .photo").style.animation = "myAnim 1s linear 1 forwards";
//         document.querySelector("#camera .description-container h2").style.animation = "myAnim 1s linear 1 forwards";
//     }

    
//  }

