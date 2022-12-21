const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
});
window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(expandClass);
  }
});
// Slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementsByClassName("icon-show")[0].classList.toggle("show");
  window.onclick = function (event) {
    if (!event.target.matches(".let-us-introduce-ourselves-click-dropbtn")) {
      var dropdowns = document.getElementsByClassName(
        "let-us-introduce-ourselves-content"
      );
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
          // document.getElementsByClassName("icon-show")[0].classList.remove("show");
        }
      }
    }
  };

  // var select_item = document.getElementsByClassName("let-us-introduce-ourselves-titles-span")[0].style.display;
  // if(select_item === 'block')
  //   document.getElementsByClassName("let-us-introduce-ourselves-titles-span")[0].style.display="none";
  // else
  //   document.getElementsByClassName("let-us-introduce-ourselves-titles-span")[0].style.display="block";
}


function myTeam() {
  var select_item = document.getElementsByClassName("meet-our-team-click-container")[0].style.display;
  
  if(select_item === 'none')
    document.getElementsByClassName("meet-our-team-click-container")[0].style.display="block";
    
  else
    document.getElementsByClassName("meet-our-team-click-container")[0].style.display="none";
}


function showGreat() {
  var select_item = document.getElementsByClassName("great-west-gourmet-main")[0].style.display;
  document.getElementsByClassName("icon-showTrue")[0].classList.toggle("showTrue");
  if(select_item === 'none')
    document.getElementsByClassName("great-west-gourmet-main")[0].style.display="block";
  else
    document.getElementsByClassName("great-west-gourmet-main")[0].style.display="none";
}
