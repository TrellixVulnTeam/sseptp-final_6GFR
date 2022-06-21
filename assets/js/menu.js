'use strict';

// MENU MANIPULATION

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // Show standard menu
    setTimeout(function () {
      document.querySelector('.menu').style.top = '0';
      document.querySelector('.site-links').style.top = '4rem';
      document.querySelector('.navbar').style.height = '8rem';
      document.querySelector('.logo__img').style.width = '15rem';

      // Main menu items settings
      const navbarLinks = document.querySelectorAll('.navigation__item--link');
      for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].style.padding = '3.2rem 0 3.2rem 1.6rem';
      }

      const submenu = document.querySelectorAll('.submenu');
      for (let i = 0; i < submenu.length; i++) {
        submenu[i].style.top = '4.9rem';
      }
    }, 300);
  } else {
    // Show minimal menu
    setTimeout(function () {
      document.querySelector('.menu').style.top = '-4rem';
      document.querySelector('.site-links').style.top = '0';
      document.querySelector('.navbar').style.height = '5rem';
      document.querySelector('.logo__img').style.width = '10rem';

      // Main menu items settings
      const navbarLinks = document.querySelectorAll('.navigation__item--link');
      for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].style.padding = '1.8rem 0 1.8rem 1.6rem';
      }

      const submenu = document.querySelectorAll('.submenu');
      for (let i = 0; i < submenu.length; i++) {
        submenu[i].style.top = '3.4rem';
      }
    }, 300);
  }
  prevScrollpos = currentScrollPos;
};

let siteLinks = document.querySelector('.menu');
console.log(siteLinks);
siteLinks.innerHTML = `<div class="q-links">
<ul class="q-links__left">
  <li><a href="#">Contact</a></li>
  <li><a href="#">Apply Now</a></li>
</ul>
<ul class="q-links__right">
  <li><a href="#">Calendar</a></li>
  <li><a href="#">Portal</a></li>
  <li><a href="#">Moodle Login</a></li>
  <li><a href="#">Degree Verification</a></li>
</ul>
</div>
<div class="site-links">
<div class="navbar">
  <div class="logo">
  <a href="index.html">
      <img class="logo__img" src="assets/img/sse-logo.svg" alt="" />
    </a>
  </div>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item"><a class="navigation__item--link" href="index.html">Home</a></li>
      <li class="navigation__item">
        <a class="navigation__item--link" href="#">About Us ↓</a>
  
        <ul class="submenu">
          <li class="submenu__item linked">
            <a href="our-heritage.html">Our&nbsp;Heritage </a>
          </li>
          <li class="submenu__item linked">
            <a href="our-vision-mission.html">Vision&nbsp;&&nbsp;Mission</a>
          </li>
          <li class="submenu__item linked">
            <a href="chairman-message.html">Chairman&nbsp;Message</a>
          </li>
          <li class="submenu__item linked"><a href="dean-message.html">Dean&nbsp;Message</a></li>
          <li class="submenu__item linked">
            <a href="principal-message.html">Principal&nbsp;Message</a>
          </li>
          <li class="submenu__item linked">
            <a href="secretary-message.html">Secretary&nbsp;Message</a>
          </li>
          <li class="submenu__item linked">
            <a href="industry-interface.html">Industry&nbsp;Interface</a>
          </li>
          <li class="submenu__item linked alert">
            <a href="recognition-affiliation.html">Affiliation&nbsp;&&nbsp;Recognition </a>
          </li>
          <li class="submenu__item linked alert">
            <a href="governing-body.html">Governing&nbsp;Body</a>
          </li>
          <li class="submenu__item linked alert"><a href="rise.html">RISE</a></li>
        </ul>
      </li>
  
      <li class="navigation__item">
        <a class="navigation__item--link" href="#">Academics ↓</a>
        <ul class="submenu">
          <li class="submenu__item linked">
            <a href="courses.html">Courses »</a>
            <ul class="submenu-2">
              <li class="linked">
                <a href="computer-science.html"
                  >Computer Science & Engineering (SOSO)</a
                >
              </li>
              <li class="linked">
                <a href="electronics-communication.html"
                  >Electronics & Communication Engineering (SLICE)</a
                >
              </li>
              <li class="linked">
                <a href="electrical-electronics.html">Electrical & Electronics Engineering (PPP)</a>
              </li>
              <li class="linked">
                <a href="mechanical-engineering.html">Mechanical Engineering (SMILE)</a>
              </li>
              <li class="linked">
                <a href="civil-engineering.html">Civil Engineering (FORCE)</a>
              </li>
              <li class="linked">
                <a href="humanities-science.html">Humanities and Science</a>
              </li>
            </ul>
          </li>
          <li class="submenu__item linked">
            <a href="sse-faculty.html">Faculty</a>
          </li>
          <li class="submenu__item linked">
            <a href="value-added-courses.html">Certification&nbsp;Courses</a>
          </li>
          <li class="submenu__item linked alert"><a href="examinations.html">Examinations</a></li>
          <li class="submenu__item linked alert">
            <a href="syllabus.html">Syllabus</a>
          </li>
          <li class="submenu__item linked alert">
            <a href="e-resources.html">Fee Structure</a>
          </li>
        </ul>
      </li>
  
      <li class="navigation__item linked">
        <a class="navigation__item--link" href="placements.html">Placements</a>
        <!-- <ul class="submenu">
          <li class="submenu__item">
            <a href="#">Vision&nbsp;&&nbsp;Mission</a>
          </li>
          <li class="submenu__item">
            <a href="#">Modus&nbsp;Operandi</a>
          </li>
          <li class="submenu__item">
            <a href="#">Placements&nbsp;Team</a>
          </li>
          <li class="submenu__item">
            <a href="#">Our&nbsp;Recruiters</a>
          </li>
          <li class="submenu__item">
            <a href="#">Recruitment&nbsp;details</a>
          </li>
        </ul> -->
      </li>
  
      <li class="navigation__item">
        <a class="navigation__item--link" href="#">IQAC ↓</a>
        <ul class="submenu">
          <li class="submenu__item">
            <a href="#">Members</a>
          </li>
          <li class="submenu__item">
            <a href="#">SSE&nbsp;Best&nbsp;Practices</a>
          </li>
          <li class="submenu__item">
            <a href="#">Annual&nbsp;Reports</a>
          </li>
        </ul>
      </li>
  
      </li>
      <li class="navigation__item">
        <a class="navigation__item--link" href="committees.html">Committies</a>
      </li>
      <li class="navigation__item">
        <a class="navigation__item--link" href="#">Facilities</a>
        <ul class="submenu">
          <li class="submenu__item">
            <a href="#">Campus</a>
          </li>
          <li class="submenu__item">
            <a href="#">Library</a>
          </li>
          <li class="submenu__item">
            <a href="#">IT&nbsp;Infrastructure</a>
          </li>
          <li class="submenu__item">
            <a href="#">Sports&nbsp;Ground</a>
          </li>
          <li class="submenu__item">
            <a href="#">Residential&nbsp;Faclities</a>
          </li>
          <li class="submenu__item">
            <a href="#">Transport</a>
          </li>
        </ul>
      </li>
      <li class="navigation__item">
        <a class="navigation__item--link" href="#">SSE Media</a>
        <ul class="submenu">
          <li class="submenu__item">
            <a href="#">Newsletters</a>
          </li>
          <li class="submenu__item">
            <a href="#">Brochures</a>
          </li>
          <li class="submenu__item">
            <a href="#">SSE&nbsp;Newspaper Articles</a>
          </li>
        </ul>
      </li>
      <li class="navigation__item">
        <a class="navigation__item--link" href="#">Mandataries</a>
      </li>
      <li class="navigation__item">
        <a class="navigation__item--link" href="#">Alumni</a>
      </li>
    </ul>
  </nav>
</div>
</div>`;
