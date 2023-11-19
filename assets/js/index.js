!function(){ 
  var sidebar = document.querySelector('.sidebar');
  if(!sidebar) return;
  var buttons = document.querySelectorAll('.right-arrow,.sc-icon');
  var toggleIcons = document.querySelectorAll('.toggle-icon');
  buttons.forEach(function(button){
    button.addEventListener('click',function(){
      sidebar.classList.remove('active');
    })
  })
  toggleIcons.forEach(function(button){
    button.addEventListener('click',function(){
      sidebar.classList.add('active');
    })
  })
}() 
 
// After Loaded Dom Content
document.addEventListener("DOMContentLoaded", function () {
  // Car Services
  new Swiper(".swiper-1 .swiper", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 2,
    draggable: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // When window width is >= 320px
      // 320: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      // When window width is >= 480px
      // 480: {
      //   slidesPerView: 2,
      //   spaceBetween: 30
      // },
      // When window width is >= 768px
      // 768: {
      //   slidesPerView: 3,
      //   spaceBetween: 40
      // }
    },
  });
  // Car Repair
  var swiperCarRepair = new Swiper(".cr-tabs .swiper", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 2,
    draggable: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   hide: true,
    // },
    breakpoints: {
      // When window width is >= 320px
      // 320: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      // When window width is >= 480px
      // 480: {
      //   slidesPerView: 2,
      //   spaceBetween: 30
      // },
      // When window width is >= 768px
      // 768: {
      //   slidesPerView: 3,
      //   spaceBetween: 40
      // }
    },
  });
  // How Egargi Works Tab
  var swiper2 = new Swiper(".hew-tab .swiper", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 2,
    draggable: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   hide: true,
    // },
    breakpoints: {
      // When window width is >= 320px
       
      // When window width is >= 480px
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // 992: {
      //   slidesPerView: 5,
      //   spaceBetween: 40,
      // },
      // When window width is >= 768px
      // 768: {
      //   slidesPerView: 3,
      //   spaceBetween: 40
      // }
    },
  });
});

function CustomTab(container) {
  this.currentIndex = 0;
  this.buttonsWrapper = container.querySelector(".tab__buttons");
  this.buttons = container.querySelectorAll(".tab__button");
  this.tabItems = container.querySelectorAll(".tab__item");
  var length = this.tabItems.length;

  this.showTabContent = function () {
    for (var i = 0; i < length; i++) {
      if (i === +this.currentIndex) {
        this.tabItems[i].classList.add("tab__item--active");
        this.buttons.forEach(
          function (button) {
            console.log(this.currentIndex);
            if (+button.dataset.id === +this.currentIndex) {
              button.classList.add("tab__button--active");
            } else {
              button.classList.remove("tab__button--active");
            }
          }.bind(this)
        );
      } else {
        this.tabItems[i].classList.remove("tab__item--active");
        this.buttons.forEach(
          function (button) {
            if (+button.dataset.id === +this.currentIndex) {
              button.classList.add("tab__button--active");
            } else {
              button.classList.remove("tab__button--active");
            }
          }.bind(this)
        );
      }
    }
  };

  this.reset = function () {
    if (!length) return;
    this.showTabContent();
  };
  this.events = function () {
    console.log(this.buttonsWrapper);
    this.buttonsWrapper.addEventListener(
      "click",
      function (e) {
        if (e.target.nodeName === "BUTTON") {
          this.currentIndex = e.target.dataset.id;
          this.showTabContent();
        }
      }.bind(this)
    );
  };
  this.init = function () {
    this.reset();
    this.events();
  };
  this.init();
}
// Tab Setup
var tabContainers = document.querySelectorAll(".tab-container");
for (var i = 0; i < tabContainers.length; i++) {
  var tab = new CustomTab(tabContainers[i]);
}

// jQuery
if (typeof $ !== "undefined") {
  console.log("Hi");
  $(document).ready(function () {
    // if ($('.video-popup-button').length) {
    //     $('.video-popup-button').magnificPopup({
    //         type: 'iframe',
    //         // other options
    //     });
    // }
    // $('.ajc-items.owl-carousel').owlCarousel({
    //     autoplay: true,
    //     autoplayTimeout: 2200,
    //     loop: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         650: {
    //             items: 2,
    //         },
    //         992: {
    //             items: 3,
    //         },
    //         1200: {
    //             stagePadding: 150
    //         },
    //         1500: {
    //             stagePadding: 220
    //         },
    //     }
    // });
  });
}
