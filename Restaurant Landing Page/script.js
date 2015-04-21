//jquery loaded content
$(document).ready(function() {
   $("#content").append("<img src='http://static.asiawebdirect.com/m/bangkok/hotels/bali-indonesia-com/villa-air-bali/photos/hotelBanner/photos.jpg'/>"); 
    $("#content").append("<h1>SELAMAT DATANG</h1>");
    $("#content").append("<p>We are the premier restaurant in Bali!</p>");
});

//tabs
var tabContainer = document.getElementById("tabs"); //ul 
var tab = tabContainer.querySelector("li") // li
var allContent = document.querySelectorAll(".tabContent");
var allTabs = tabContainer.querySelectorAll("li");
 //1

window.onload = function() {
    var currentTab = tab.id.slice(-1);
    console.log(currentTab); //1

        tab.setAttribute("data-current", currentTab); //<li data-current="1"></li>
        //set current tab with class .activetab
        tab.setAttribute("class", "activetab"); //< li data-current="1" class="activetab">
    
        //hide other tabs
        for(var i = 1; i < allContent.length; i++) {
            allContent[i].style.display="none";
        }
    
        //add click event to tabs
        for(var i = 0; i < allTabs.length; i++) {
            allTabs[i].onclick = displayPage;
        
        }
}

var displayPage = function() {
    //on click of one of tabs
    console.log(currentTab);
    this.removeAttribute("class");
  
    //reset current tab
    var currentTab = this.id.slice(-1);
    //add class activetab
    
    this.setAttribute("class", "activetab");
    this.setAttribute("data-current", currentTab);
    console.log(currentTab);
}