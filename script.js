let navbar = document.getElementById('navbar');
let reqSecRow = document.getElementById('req-secondrow')
let footer3 = document.getElementById('footer3')

const x = window.matchMedia("(max-width: 480px)")
const y = window.matchMedia("(max-width: 768px)")
const z = window.matchMedia("(max-width: 1024px)")

let originCity = document.getElementById('o-city');
let destinationCity = document.getElementById('d-city');
let cityChange = document.getElementById('city-change');

function myFunction(x) {
  if (x.matches) {
    navbar.innerHTML = `
    <nav class="navbar bg-body-tertiary sticky-top" style="direction: rtl; color: orange;">
     <div class="container-fluid">
       <a class="navbar-brand mx-auto" href="#">
        <img src="./assets/pictures/Capture.PNG" alt="">
       </a>
       <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
         <div class="offcanvas-header">
           <h5 class="offcanvas-title" id="offcanvasNavbarLabel">علی بابا</h5>
           <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div class="offcanvas-body">
           <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
            <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path
             d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>ورود یا ثبت نام</a>
            </li>
            <li class="nav-item">
             <a class="nav-link" href="https://www.alibaba.ir/login?redirect=/profile/orders"><svg
             xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist"
             viewBox="0 0 16 16">
             <path
               d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
             <path
               d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
             </svg> پیگیری خرید</a>
             </li>
             <li class="nav-item">
             <a class="nav-link" href="https://www.alibaba.ir/help-center"><svg
             xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-exclamation-circle" viewBox="0 0 16 16">
             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
             <path
               d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
               </svg>
               <span>مرکز پشتیبانی آنلاین</span>
               </a>
             </li>
             <hr>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 بلیط
               </a>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/">پرواز داخلی</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/iranout">پرواز خارجی</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/train-ticket">قطار</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/bus-ticket">اتوبوس</a></li>
                 <li>
               </ul>
             </li>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 اقامت
               </a>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/hotel">هتل</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/accommodation">ویلا و اقامتگاه</a></li>
                 <li>
               </ul>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="https://www.alibaba.ir/tour">تور</a>
             </li>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 بیشتر
               </a>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/plus">علی بابا پلاس</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/mag/?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Maghttps://www.alibaba.ir/mag?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Mag">مجله علی بابا</a></li>
                 <hr class="dropdown-divider">
                 <li><a class="dropdown-item" href="https://www.alibaba.ir/insurance">بیمه مسافرتی</a></li>
                 <li>
               </ul>
             </li>
           </ul>
         </div>
       </div>
     </div>
    </nav>`
  }
}

// !!!!!!!!!! این فانکشن را نوشتم تا وقتی سایز صفحه بزرگ می شود نوبار را از حالت همبرگر خارج کند اما اجرا نمی شود
function largeNav(z) {
  if(z.matches){
    navbar.innerHTML = `
    <div class="d-lg-flex justify-content-lg-end align-items-lg-center">
      <ul class="nav nav-pills" id="ul-btn">
        <li class="nav-item">
          <button id="login-btn" data-bs-toggle="modal" data-bs-target="#loginModal">
            <a class="nav-link" href="#">ورود یا ثبت نام <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg></a>
          </button>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.alibaba.ir/login?redirect=/profile/orders">پیگیری خرید <svg
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist"
              viewBox="0 0 16 16">
              <path
                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path
                d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
            </svg></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.alibaba.ir/help-center">مرکز پشتیبانی آنلاین <svg
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-exclamation-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </svg></a>
        </li>
      </ul>
      <ul class="nav nav-pills" id="ul-dropdown">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
            aria-expanded="false">بیشتر</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://www.alibaba.ir/plus">علی بابا پلاس</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item"
                href="https://www.alibaba.ir/mag/?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Maghttps://www.alibaba.ir/mag?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Mag">مجله
                علی بابا</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="https://www.alibaba.ir/insurance">بیمه مسافرتی</a></li>
          </ul>
        </li>
        <div class="d-flex" style="height: 40px;">
          <div class="vr"></div>
        </div>
        <li class="nav-item">
          <a class="nav-link" href="https://www.alibaba.ir/tour">تور</a>
        </li>
        <div class="d-flex" style="height: 40px;">
          <div class="vr"></div>
        </div>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
            aria-expanded="false">اقامت</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://www.alibaba.ir/hotel">هتل</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="https://www.alibaba.ir/accommodation">ویلا و اقامتگاه</a></li>
          </ul>
        </li>
        <div class="d-flex" style="height: 40px;">
          <div class="vr"></div>
        </div>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
            aria-expanded="false">بلیط</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://www.alibaba.ir/">پرواز داخلی</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="https://www.alibaba.ir/iranout">پرواز خارجی</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="https://www.alibaba.ir/train-ticket">قطار</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="https://www.alibaba.ir/bus-ticket">اتوبوس</a></li>
          </ul>
        </li>
      </ul>
      <ul class="nav nav-pills" id="nav-icon">
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center justify-content-end" href="https://www.alibaba.ir/" id="nav-icon">
            <div>Alibaba.ir <br> خرید بلیط، هتل، تور</div> <img src="./assets/pictures/Capture.PNG" alt="">
          </a>
        </li>
      </ul>
      </ul>
    </div>`
  }
}


function reqSocond(a){
  if(a.matches){
    reqSecRow.style.display = 'none'
  }
}

function footerDis(b) {
  if(b.matches){
    footer3.style.display = 'none'
  }
}


x.addEventListener('change', myFunction)
myFunction('navbar')
y.addEventListener('change', myFunction)
myFunction('navbar')

x.addEventListener('change', reqSocond)
reqSocond('reqSecRow')

x.addEventListener('change', footerDis)
footerDis('footer3')

// z.addEventListener('change', largeNav)
// largeNav('navbar')

cityChange.addEventListener('click', () => {
  const startCity = originCity.value;
  const targetCity = destinationCity.value;
  originCity.value = targetCity;
  destinationCity.value = startCity;
})