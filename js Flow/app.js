

var din = document.getElementById("day");
var raat = document.getElementById("night");

var suubha = document.getElementById("subha");
var shhaam = document.getElementById("shaam");


var daay = document.getElementById("din");
var niight = document.getElementById("raat");

var logo = document.getElementById("logo")
var style = document.getElementById("styleLink")

var loogo = document.getElementById("loogo")
var st = document.getElementById("st")


function night(){
    
  style.href = "../styling/night.css"
    logo.src = "../images/logo 1 (2).png";
    raat.style.display = "none"
    din.style.display = "flex"
}
function day(){
    document.body.style.backgroundColor = ""
    document.body.style.color = ""

    logo.src = "../images/logo 1 (1).png";
    style.href = ""
    din.style.display = "none"
    raat.style.display = "flex"
}

// second nav

function raaat(){
    
    logo.src = "../images/logo 1 (2).png";
    style.href = "../styling/night.css"
    niight.style.display = "none"
    daay.style.display = "flex"
}
function diin(){
    document.body.style.backgroundColor = ""
    document.body.style.color = ""

    logo.src = "../images/logo 1 (1).png";
    style.href = ""
    daay.style.display = "none"
    niight.style.display = "flex"
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// third nav
function shaam(){
    
  st.href = "./styling/night.css"
    loogo.src = "./images/logo 1 (2).png";
    shhaam.style.display = "none"
    suubha.style.display = "flex"
}
function subha(){
    document.body.style.backgroundColor = ""
    document.body.style.color = ""

    loogo.src = "./images/logo 1 (1).png";
    st.href = ""
    suubha.style.display = "none"
    shhaam.style.display = "flex"
}


  var navBar = document.getElementById("navBar")
  var secnavBar = document.getElementById("secondNav")
  var sec0 = document.getElementById("zero")
  
 


  
  function remove(){
sec0.style.display= "none";
  }
  function NavBar(){
    secondNav.style.display= "block"; 
  }
  function Bar(){
    secondNav.style.display= "none"; 
  }

  function NumberSir(){
alert("031728xx")
  }

  document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    
    var email = document.getElementById("email").value;    
    
    // Open Gmail compose window with pre-filled email address and message
    window.location.href = "mailto:hj422748@gmail.com?subject=New%20Message&body=Email%20Address:%20" + email;
  });

