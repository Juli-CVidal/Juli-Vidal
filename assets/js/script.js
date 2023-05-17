/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactMessage = document.getElementById("contact-message"),
  resultMessage = document.getElementById("result-message");

const sendEmail = (event) => {
  event.preventDefault();
  if (
    [contactName.value, contactEmail.value, contactMessage.value].some(
      (val) => val === ""
    )
  ) {
  
    resultMessage.classList.remove("color-blue");
    resultMessage.classList.add("color-red");
    resultMessage.innerText = "Not all fields have been filled in";
  } else {
    emailjs
      .sendForm(
        "service_n5gksoj",
        "template_qaxoco5",
        "#contact-form",
        "XVXoSmc612W-44U7o"
      )
      .then(
        () => {
          resultMessage.classList.remove("color-red");
          resultMessage.classList.add("color-blue");
          resultMessage.innerText = "Message sent successfully!";

          setTimeout(() => {
            resultMessage.innerText = "";
          }, 5000);
        },
        (error) => {
          alert("Something has failed :c -> ", error);
        }
      );

    contactForm.reset();
  }
};
contactForm.addEventListener("submit", sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});


/* ======== BACKGROUND RELATED ======== */
const flipButton = document.getElementById("flip-button");
flipButton.addEventListener("click", () => {
  document.body.classList.toggle("background-visible");
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false,
});

sr.reveal(".home__data, .projects__container, .footer__container");
sr.reveal(".home__info div", { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(".skills__content:nth-child(1), .contact__content:nth-child(1)", {
  origin: "left",
});
sr.reveal(".skills__content:nth-child(2), .contact__content:nth-child(2)", {
  origin: "right",
});
sr.reveal(".qualification__content, .services__card", { interval: 100 });

/*=============== LOADER ===============*/

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader__area");
  setTimeout(() => {
    preloader.style.opacity = 0;
    setTimeout(() => (preloader.style.display = "none"), 1);
  }, 500);
});
