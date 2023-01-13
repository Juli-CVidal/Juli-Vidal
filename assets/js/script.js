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
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
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
  // Check that the fields are not empty
  if (
    [contactName.value, contactEmail.value, contactMessage.value].some(
      (val) => val === ""
    )
  ) {
    //Change color
    resultMessage.classList.remove("color-blue");
    resultMessage.classList.add("color-red");

    //Show message
    resultMessage.innerText = "Not all fields have been filled in";
  } else {
    //serviceID - templateID -#form - publicKey
    emailjs
      .sendForm(
        "service_n5gksoj",
        "template_qaxoco5",
        "#contact-form",
        "XVXoSmc612W-44U7o"
      )
      .then(() => {
        resultMessage.classList.remove("color-red");
        resultMessage.classList.add("color-blue");
        resultMessage.innerText = "Message sent successfully!";

        setTimeout(() => {
          contactMessage.innerText = "";
        
        },5000)
      },(error)=> {
        alert("Something has failed :c -> ", error)
      });

      contactForm.reset();
  }
};
contactForm.addEventListener("submit", sendEmail);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
