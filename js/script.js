window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.scroll-white');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navbarLinks = document.querySelector('.navbar-links')
  const navbarLogo1 = document.querySelector('.navbar-logo img:nth-child(1)')
  const navbarLogo2 = document.querySelector('.navbar-logo img:nth-child(2)')
  const navbarLogoSpan = document.querySelector('.navbar-logo span')
  const navbarLogin1 = document.querySelector('.login-div i:nth-child(1) ')
  const navbarLogin2 = document.querySelector('.login-div a:nth-child(2) ')
  const navbarLogin3 = document.querySelector('.login-div i:nth-child(3) ')
  const navbarLogin4 = document.querySelector('.login-div i:nth-child(4) ')
  const NavbarLogin991px1 = document.querySelector('.navbar-login-991px i:nth-child(1)')
  const NavbarLogin991px2 = document.querySelector('.navbar-login-991px i:nth-child(2)')
  if (scrollTop > 0)
  
  
  //Added //js //jquer //jue //vuejs //jsxx //jsa
  {
    navbar.classList.add('fixed');
    navbarLinks.classList.add('navbar-links-color')
    navbar.style.position = 'fixed'
    navbar.style.width = '100%'
    navbar.style.zIndex = "1000"
    navbarLogo1.style.display = 'none'
    navbarLogo2.style.display = 'block'
    navbarLogoSpan.style.color = 'black'
    navbarLogin1.style.color = 'black'
    navbarLogin2.style.color = 'black'
    navbarLogin3.style.color = 'black'
    navbarLogin4.style.color = 'black'
    NavbarLogin991px1.style.color = 'black'
    NavbarLogin991px2.style.color = 'black'

  } else {
    navbar.classList.remove('fixed');
    navbar.style.zIndex = "auto";
    navbarLinks.classList.remove('navbar-links-color')
    navbarLogo1.style.display = 'block'
    navbarLogo2.style.display = 'none'
    navbarLogoSpan.style.color = 'white'
    navbarLogin1.style.color = 'white'
    navbarLogin2.style.color = 'white'
    navbarLogin3.style.color = 'white'
    navbarLogin4.style.color = 'white'
    NavbarLogin991px1.style.color = 'white'
    NavbarLogin991px2.style.color = 'white'
  }
});

// // ofline start neteework
// const pageContainer = document.querySelector('#page-container');
// const pageofline = document.querySelector('#ofline-div')
// function checkOnlineStatus() {
//   if (navigator.onLine) {
//     pageContainer.style.display = 'block';
//     pageofline.style.display = 'none';
//   } else {
//     pageContainer.style.display = 'none';
//     pageofline.style.display = 'flex'
//   }
// }

// // İnternet bağlantısını kontrol et
// checkOnlineStatus();

// // İnternet bağlantısı durumunu dinle
// window.addEventListener('online', checkOnlineStatus);
// window.addEventListener('offline', checkOnlineStatus);

// ofline end neteework






// bars menu clcik start

const BarsMenuClick = document.getElementById("fa-bars-Click-menu")
const MobileNavbarDisplay = document.querySelector('.header-mobile-navbar')
const bodyElement = document.getElementById('body1')
const htmlElement = document.getElementById('html')

BarsMenuClick.addEventListener('click', function (e) {
  e.preventDefault()
  bodyElement.style.overflowY = 'hidden';
  bodyElement.style.overflowX = 'hidden';
  htmlElement.style.overflow = 'hidden'
  MobileNavbarDisplay.classList.toggle('display-on-menu-bars')

})



const BarsMenuCloseClick = document.getElementById("fa-bars-Close-Click-menu")
const MobileNavbarCloseDisplay = document.querySelector('.header-mobile-navbar')
const SectionHeaderColor = document.querySelector('.section-header-color')
BarsMenuCloseClick.addEventListener('click', function (e) {
  e.preventDefault()
  // bodyElement.style.overflowY = 'visible';
  bodyElement.style.overflowX = 'visible';
  htmlElement.style.overflow = 'auto'
  MobileNavbarCloseDisplay.classList.toggle('display-on-menu-bars')
})

SectionHeaderColor.addEventListener('click', function (e) {
  if (!e.target.matches('#fa-bars-Click-menu')) {
    if (MobileNavbarDisplay.classList.contains('display-on-menu-bars')) {
      MobileNavbarDisplay.classList.remove('display-on-menu-bars')
      // bodyElement.style.overflowY = 'visible';
      bodyElement.style.overflowX = 'visible';
      htmlElement.style.overflow = 'auto'
    }
  }
})

//  basr menu click end
// searcg click start

const SearchClick = document.getElementById('search-Click')
const SeacrInputDispaly = document.querySelector('.serach-navbar')

SearchClick.addEventListener('click', function(e){
  e.preventDefault()

  SeacrInputDispaly.classList.toggle('serach-navbar-diaplay')

})
const SearchClick2 = document.getElementById('search-Click2')
const SeacrInputDispaly2 = document.querySelector('.serach-navbar')

SearchClick2.addEventListener('click', function(e){
  e.preventDefault()

  SeacrInputDispaly2.classList.toggle('serach-navbar-diaplay')

})
const SearchClose = document.getElementById('close-Search')
const SeacrInpuClose = document.querySelector('.serach-navbar')

SearchClose.addEventListener('click', function(e){
  e.preventDefault()

  SeacrInpuClose.classList.toggle('serach-navbar-diaplay')

})

// search click end












/*  Team-Slider-Owl-carousel  */





const offlineDiv = document.getElementById('offline');
const body = document.getElementById('body');

window.addEventListener('online', function() {
 offlineDiv.innerHTML = 'İnternetə yenidən qoşuldu. Uğurlu! </br>İnternete yeniden bağlandı. Başarılı! </br> Reconnected to the internet. Successful! </br> Восстановлено подключение к Интернету. Успешный!' ;
 offlineDiv.style.backgroundColor = 'green';
 offlineDiv.style.display = 'block';
 body.style.transform = 'translateY(-2000vh)';

 // Animasyonlu geçiş için setTimeout kullanabilirsiniz
 setTimeout(function() {
   offlineDiv.style.display = 'none';
   body.style.transform = 'translateY(0vh)';
body.style.transition = 'transform 2s ease';

 }, 2000); // 3 saniye sonra mesaj ve renk değişimi kaybolacak
});

window.addEventListener('offline', function() {
 offlineDiv.innerHTML = 'İnternet bağlantısı yoxdur! </br>İnternet bağlantısı yok! </br> No Internet connection! </br>Нет соединения с интернетом! ' ;
 offlineDiv.style.backgroundColor = '#ff3232';
 offlineDiv.style.display = 'block';
 body.style.transform = 'translateY(-2000vh)';

 setTimeout(function() {
  window.location.href = "/index.html";
}, 10000);
});


if($('.shop_product_slider,.feature_post_slider').length){
  $('.shop_product_slider,.feature_post_slider').owlCarousel({
      loop:true,
      margin:30,
      dots:false,
      nav:true,
      rtl:false,
      autoplayHoverPause:false,
      autoplay: false,
      singleItem: true,
      smartSpeed: 1200,
      navText: [
        '<i class="flaticon-left-arrow"></i>',
        '<i class="flaticon-right-arrow-1"></i>'
      ],
      responsive: {
          0: {
              items: 1,
              center: false
          },
          480:{
              items:1,
              center: false
          },
          520:{
              items:1,
              center: false
          },
          600: {
              items: 2,
              center: false
          },
          768: {
              items: 2
          },
          992: {
              items: 3
          },
          1200: {
              items: 3
          },
          1366: {
              items: 4
          },
          1400: {
              items: 4
          }
      }
  })
}



window.addEventListener("scroll", function() {
  var goTopButton = document.getElementById("goTopButton");
  if (window.pageYOffset > (window.innerHeight / 1)) {
    goTopButton.style.display = "block"; 
  } else {
    goTopButton.style.display = "none"; 
  }
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


var goTopButton = document.getElementById("goTopButton");
goTopButton.addEventListener("click", scrollToTop)