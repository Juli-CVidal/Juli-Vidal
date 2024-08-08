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
  navigation: {
    nextEl: ".ri-arrow-drop-right-line",
    prevEl: ".ri-arrow-drop-left-line",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,

});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactMessage = document.getElementById("contact-message"),
  resultMessage = document.getElementById("result-message");
submitButton = document.getElementById("submit");

const sendEmailMessage = () => {
  const serviceID = "service_n5gksoj";
  const templateID = "template_qaxoco5";
  const formSelector = "#contact-form";
  const userID = "XVXoSmc612W-44U7o";

  return emailjs.sendForm(serviceID, templateID, formSelector, userID);
};

const displayErrorMessage = (
  message = "Not all fields have been filled in"
) => {
  resultMessage.classList.remove("color-blue");
  resultMessage.classList.add("color-red");
  resultMessage.innerText = message;
};

const isValidEmail = (email) => {
  return (
    "" !== email &&
    new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$").exec(email)
  );
};

const areEmptyFields = (...values) => {
  return values.some((value) => value === "");
};

const sendEmail = (event) => {
  event.preventDefault();

  const name = contactName.value;
  const email = contactEmail.value;
  const message = contactMessage.value;

  if (areEmptyFields(name, email, message)) {
    displayErrorMessage("Please complete all the fields");
    return;
  }

  if (!isValidEmail(email)) {
    displayErrorMessage(
      "Please enter a valid email (example: name@domain.com)"
    );
    return;
  }

  sendEmailMessage()
    .then(() => {
      displaySuccessMessage();
      resetForm();
    })
    .catch((error) => {
      displayErrorMessage("Something has failed :c -> " + error);
    });
};

const displaySuccessMessage = () => {
  resultMessage.classList.remove("color-red");
  resultMessage.classList.add("color-blue");
  resultMessage.innerText = "Message sent successfully!";

  setTimeout(() => {
    resultMessage.innerText = "";
  }, 5000);
};

const resetForm = () => {
  contactForm.reset();
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  sendEmail(event);
});

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
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false,
});

sr.reveal(".home__title, .home__data, .projects__container, .footer__container");
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

/*=============== INTERCALATION ===============*/
const shouldIntercalate = window.matchMedia('(max-width: 767px)').matches;
const homeInfoElements = document.querySelectorAll('.home__info:nth-child(2) div:nth-child(2n)');
const qualificationContentElements = document.querySelectorAll('.qualification__content:nth-child(1) .qualification__info > div:nth-child(2n)');

const updateTextAlign = () => {
  [...homeInfoElements, ...qualificationContentElements].forEach(element => {
    element.style.textAlign = shouldIntercalate ? 'end' : "";
  });
}

window.addEventListener('resize', updateTextAlign);