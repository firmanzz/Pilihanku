/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var tombolDetailPaslon1 = document.getElementById("tombolDetailPaslon1");
      if (tombolDetailPaslon1) {
        tombolDetailPaslon1.addEventListener("click", function (e) {
          window.location.href = "./detail-calon-1.html";
        });
      }
      
      var tombolDetailPaslon2 = document.getElementById("tombolDetailPaslon2");
      if (tombolDetailPaslon2) {
        tombolDetailPaslon2.addEventListener("click", function (e) {
          window.location.href = "./detail-calon-2.html";
        });
      }
      
      var tombolDetailPaslon3 = document.getElementById("tombolDetailPaslon3");
      if (tombolDetailPaslon3) {
        tombolDetailPaslon3.addEventListener("click", function (e) {
          window.location.href = "./detail-calon-3.html";
        });
      }

      var tombolDetailPaslon3 = document.getElementById("tombolDetailPaslon21");
      if (tombolDetailPaslon3) {
        tombolDetailPaslon3.addEventListener("click", function (e) {
          window.location.href = "./survey.html";
        });
      }

      var tombolDetailPaslon1 = document.getElementById("newsItemsContainer1");
      if (tombolDetailPaslon1) {
        tombolDetailPaslon1.addEventListener("click", function (e) {
          window.location.href = "./berita.html";
        });
      }
      var tombolDetailPaslon1 = document.getElementById("newsItemsContainer2");
      if (tombolDetailPaslon1) {
        tombolDetailPaslon1.addEventListener("click", function (e) {
          window.location.href = "./berita.html";
        });
      }
      var tombolDetailPaslon1 = document.getElementById("newsItemsContainer3");
      if (tombolDetailPaslon1) {
        tombolDetailPaslon1.addEventListener("click", function (e) {
          window.location.href = "./berita.html";
        });
      }
      var tombolDetailPaslon1 = document.getElementById("newsItemsContainer4");
      if (tombolDetailPaslon1) {
        tombolDetailPaslon1.addEventListener("click", function (e) {
          window.location.href = "./berita.html";
        });
      }
      var tombolDetailPaslon1 = document.getElementById("newsItemsContainer5");
      if (tombolDetailPaslon1) {
        tombolDetailPaslon1.addEventListener("click", function (e) {
          window.location.href = "./berita.html";
        });
      }
      var tombolDetailPaslon1 = document.getElementById("newsItemsContainer6");
      if (tombolDetailPaslon1) {
        tombolDetailPaslon1.addEventListener("click", function (e) {
          window.location.href = "./berita.html";
        });
      }