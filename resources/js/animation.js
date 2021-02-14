const animItems = document.querySelectorAll('.anim-items')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 5

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active')
      } else {
        if (!animItem.classList.contains('no-anim')) {
          animItem.classList.remove('active')
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }

  setTimeout(() => {
    animOnScroll()
  }, 300)
}


// COUNTER
if(document.body.classList.contains('page-template-page-about')) {
  let a = 0;
  $(window).scroll(function() {

    const oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.about-nums__number').each(function() {
        let $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      a = 1;
    }

  });
}


// ARROW UP
const scrollTop = () => {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    arrowUp.style.cssText = "opacity: 1; visibility: visible;";
  } else {
    arrowUp.style.cssText = "opacity: 0; visibility: hidden;";
  }
}

const arrowUp = document.querySelector('.arrow__up');
arrowUp.addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', scrollTop)

// FRONT PAGE MAIN TITLE
const headerTitle = document.querySelector('.hero__title');

if(document.body.contains(headerTitle)) {
document.addEventListener('DOMContentLoaded', () => {
    headerTitle.classList.add('active');
});
}