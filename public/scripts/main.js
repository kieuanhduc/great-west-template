"use strict";var menuToggle=document.querySelector(".header-toggle"),menuHeader=document.querySelector(".header-menu"),expandClass="is-expand";function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}function myTeam(){var e=document.getElementsByClassName("meet-our-team-click-container")[0].style.display;document.getElementsByClassName("meet-our-team-click-container")[0].style.display="none"===e?"block":"none"}function myTeamTrue(){var e=document.getElementsByClassName("meet-our-team-click-content-true")[0].style.display;document.getElementsByClassName("meet-our-team-click-content-true")[0].style.display="none"===e?"block":"none"}menuToggle.addEventListener("click",function(){menuHeader.classList.add(expandClass)}),window.addEventListener("click",function(e){menuHeader.contains(e.target)||e.target.matches(".header-toggle")||menuHeader.classList.remove(expandClass)}),$(document).ready(function(){$(".quote-container").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})}),window.onclick=function(e){if(!e.target.matches(".let-us-introduce-ourselves-click-dropbtn"))for(var t=document.getElementsByClassName("let-us-introduce-ourselves-content"),n=0;n<t.length;n++){var s=t[n];s.classList.contains("show")&&s.classList.remove("show")}};