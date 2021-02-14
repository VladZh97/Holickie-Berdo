import "../scss/style.scss";
import mapImage from "../../assets/img/contact/map.png"
import "./animation"
import "./cookies"




// LOADER
const loader = document.querySelector('.spinner__container');
const html = document.querySelector('html');

window.addEventListener('load', function() {
  loader.parentElement.removeChild(loader);
  html.style.overflowY = 'auto';
})



// Burger menu
const menuBtn = document.querySelector('.menu-btn');
const menuTop = document.querySelector('.header__top')
const menuNavs = document.querySelectorAll('.menu-item a')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuTop.classList.add('active');
        menuOpen = true;
        if(window.innerWidth < 576) {
            html.style.overflow = 'hidden';
        }
    } else {
        menuBtn.classList.remove('open');
        menuTop.classList.remove('active');
        menuOpen = false;
        html.style.overflowY = "auto";
    }
});

if(window.innerWidth <=1200 && window.innerWidth >=576) {

  window.addEventListener('mouseup', function(event){
    if (event.target != menuTop && 
      event.target.parentNode != menuTop){
      menuBtn.classList.remove('open');
      menuTop.classList.remove('active');
      menuOpen = false;
      html.style.overflowY = "auto";
    }
    

  });
  menuNavs.forEach(menuNav => {
    menuNav.addEventListener('click', function() {
      menuBtn.classList.add('open');
      menuTop.classList.add('active');
      menuOpen = true;
    })
  })

}

// 404 PAGE
if(document.body.classList.contains('error404')) {

    function randomNum()
    {
        "use strict";
        return Math.floor(Math.random() * 9)+1;
    }
        let loop1,loop2,loop3,time=30, i=0, number, selector3 = document.querySelector('.thirdDigit'), 
            selector2 = document.querySelector('.secondDigit'),
            selector1 = document.querySelector('.firstDigit');
        loop3 = setInterval(function() {
          "use strict";
            if(i > 40)
            {
                clearInterval(loop3);
                selector3.textContent = 4;
            }else
            {
                selector3.textContent = randomNum();
                i++;
            }
        }, time);
        loop2 = setInterval(function() {
          "use strict";
            if(i > 80)
            {
                clearInterval(loop2);
                selector2.textContent = 0;
            }else
            {
                selector2.textContent = randomNum();
                i++;
            }
        }, time);
        loop1 = setInterval(function() {
          "use strict";
            if(i > 100)
            {
                clearInterval(loop1);
                selector1.textContent = 4;
            }else
            {
                selector1.textContent = randomNum();
                i++;
            }
        }, time);


        const headerTitle = document.querySelector('.header__title');
        headerTitle.textContent = ":("
    
}


  // MAP
  if(document.body.contains(document.querySelector('#map'))) {
  let mapCenter;

  if(window.innerWidth >=992) {
    mapCenter = [22.235915556384226, 49.54922297941143];
  } else {
    mapCenter = [22.18250249829024, 49.56533725862005];
  }
  
  mapboxgl.accessToken = 'pk.eyJ1IjoidmxhZHpoIiwiYSI6ImNrZzBxcHpoMDB1ZmsydG9iMHE0YnJ6NDYifQ._kSahmQ3wNJverVwR7NxgA';
  const map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/vladzh/ckl0mp6tf0ov317nrx246t0ux',
  center: mapCenter,
  zoom: 12
  });
  
  map.addControl(new mapboxgl.NavigationControl());
  map.scrollZoom.disable();
  map.boxZoom.disable();
  map.dragRotate.disable();
  map.keyboard.disable();
  map.doubleClickZoom.disable();
  map.touchZoomRotate.disable();
  
  const point = document.createElement("div");
  point.className = "marker";
  point.innerHTML = `<img src="${mapImage}" alt="Map marker">`;
  
  const marker = new mapboxgl.Marker(point)
      .setLngLat([22.18250249829024, 49.56533725862005])
      .addTo(map);

  }



  if($('.opinion__list').length > 0) {

    $(".opinion__list").owlCarousel({
      items: 3,
      margin: 5,
      loop: true,
      nav: false,
      dots: false,
      smartSpeed: 1500,
      autoplay: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 8000,
      responsive : {
        0: {
          items: 1,
        },
        768: {
          items: 2
        },
        1400: {
          items: 3
        },
      }
    })
}

  if($('.header__blog').length > 0) {

  $(".header__blog").owlCarousel({
    items: 3,
    margin: 60,
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 1500,
    
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 4000,
    responsive : {
      0: {
        items: 1,
        margin: 0,
      },
        576: {
        items: 2,
        stagePadding: 5,

      },
      768 : {
        items: 1,
        stagePadding: 0,
      },
      992: {
        items: 2,
      },
      1550: {
        items: 3
      }
    }
  })

  $(".offer__items").owlCarousel({
    items: 4,
    margin: 15,
    loop: true,
    nav: true,
    navContainer: '#customNavOffer',
    stagePadding: 10,
    dots: false,
    smartSpeed: 1500,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 8000,
    responsive : {
      0: {
        items: 1,
        stagePadding: 0,
      },
        768: {
        items: 2,
        stagePadding: 10,
        margin: 15,
      },
      1200 : {
        items: 3,
      },
      1650: {
        items: 4
      }
    }
  })


  $('.hero__list').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').html( `<div class="move__num">0${carousel.relative(carousel.current()) + 1}/</div><span>0${carousel.items().length}</span>`);
  }).owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true,
    navContainer: '#customNav',
    smartSpeed: 1500,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 8000,
  });



  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true,
    'showImageNumberLabel': false,
  })
}

// CHANGE NAME FOR SINGLE POST MAIN TITLE
  if(document.body.classList.contains('single')) {
    const headerTitle = document.querySelector('.header__title');
    headerTitle.textContent = "Blog"
  }



// SHOW MORE POSTS BUTTON
const moreButton = document.querySelector('#more');
if(document.body.contains(moreButton)){

    $(document).ready(function(){
      let numToShow;

      if(window.innerWidth >=1650 ){
        numToShow = 8;
      } else {
        numToShow = 6;
      }

      const list = $(".blog__item");
      const button = $("#more");
      const numInList = list.length;
      list.hide();
      if (numInList > numToShow) {
        button.show();
      }
      list.slice(0, numToShow).show();

      button.click(function(e){
        e.preventDefault();
          var showing = list.filter(':visible').length;
          list.slice(showing - 1, showing + numToShow).fadeIn();
          var nowShowing = list.filter(':visible').length;
          if (nowShowing >= numInList) {
            button.hide();
          }
      });

});
    
}