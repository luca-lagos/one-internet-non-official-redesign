window.addEventListener("scroll", () => {
  let plans_title = document.querySelector("#plans h1");
  let plans_para = document.querySelector("#plans .plans-description");
  let plans_element = document.querySelector("#plans .plans-grid");
  let payment_title = document.querySelector("#payment h1");
  let payment_para = document.querySelector("#payment .payment-description");
  let payment_element = document.querySelector("#payment .payment-grid");
  let about_title = document.querySelector("#about h1");
  let about_para = document.querySelector("#about .about-description");
  let about_element = document.querySelector("#about .about-grid");
  let contact_title = document.querySelector("#contact h1");
  let contact_para = document.querySelector("#contact .contact-description");
  let contact_element = document.querySelector("#contact .contact-panel");

  let plans_title_position = plans_title.getBoundingClientRect().top;
  let payment_title_position = payment_title.getBoundingClientRect().top;
  let about_title_position = about_title.getBoundingClientRect().top;
  let contact_title_position = contact_title.getBoundingClientRect().top;

  let display_width = window.innerHeight / 4 + 500;

  if (plans_title_position < display_width) {
    plans_title.classList.add("move-left-title");
    plans_para.classList.add("move-left-paragraph");
    plans_element.classList.add("move-left-element");
  }

  if (payment_title_position < display_width) {
    payment_title.classList.add("move-right-title");
    payment_para.classList.add("move-right-paragraph");
    payment_element.classList.add("move-right-element");
  }

  if (about_title_position < display_width) {
    about_title.classList.add("move-left-title");
    about_para.classList.add("move-left-paragraph");
    about_element.classList.add("move-left-element");
  }

  if (contact_title_position < display_width) {
    contact_title.classList.add("move-right-title");
    contact_para.classList.add("move-right-paragraph");
    contact_element.classList.add("move-right-element");
  }

  let nav = document.querySelector("nav");
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("nav-scrolling-active", windowPosition);
  let scrollbutton = document.querySelector(".arrow-up");
  scrollbutton.classList.toggle("arrow-scrolling-active", windowPosition);
});

let navitem = document.querySelector(".nav-item");
let navtoggle = document.querySelector(".nav-toggle");
let navmenu = document.querySelector(".nav-menu");
let navtoggleicon = document.querySelector(".nav-toggle i");

navtoggle.addEventListener("click", () => {
  navmenu.classList.toggle("nav-menu-visible");
  navtoggleicon.classList.toggle("fa-times");
  if (navmenu.classList.contains("nav-menu-visible")) {
    navtoggle.setAttribute("aria-label", "close-nav-menu");
  } else {
    navtoggle.setAttribute("aria-label", "open-nav-menu");
  }
});

navitem.addEventListener("click", () => {
  navitem.classList.toggle("nav-item-active");
});
