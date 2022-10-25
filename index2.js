
  // resposive-nav

  const mobile_navbar = document.querySelector(".mobile-navbar-btn");
  const headerElem = document.querySelector(".header");

  mobile_navbar.addEventListener('click',() =>{
   headerElem.classList.toggle("active");
   });
