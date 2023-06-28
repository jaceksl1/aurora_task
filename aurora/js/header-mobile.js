//adding class to header mobile

const headerElement = document.querySelector('.page-header');

function checkScreenWidth() {
if (window.innerWidth < 1024) {
    headerElement.classList.add("mobile");
  } else {
    headerElement.classList.remove('mobile');
  }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);

//mobile navigation

const navMobile = document.querySelector('.mobile-nav'),
openBtn = document.querySelector('.btn-mobile-nav-open'),
closeBtn = document.querySelector('.btn-mobile-nav-close'),
pageWrapper = document.querySelector('.page-wrapper');

openBtn.addEventListener('click', () => {
    navMobile.classList.add('visible');
    pageWrapper.classList.add('gray');
    navMobile.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    navMobile.classList.remove('visible');
    pageWrapper.classList.remove('gray');
    navMobile.classList.add('hidden');
});

