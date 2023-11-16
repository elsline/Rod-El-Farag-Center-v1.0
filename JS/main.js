let megaIcon = document.querySelector(".mega-icon");
let megaMenu = document.querySelector(".mega-menu");
let closeIcon = document.querySelector(".close-icon");
let mainContent = document.querySelector("main");

megaIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  megaMenu.classList.toggle("active");
});
closeIcon.addEventListener("click", function () {
  megaMenu.classList.remove("active");
});
mainContent.addEventListener("click", function () {
  megaMenu.classList.remove("active");
});

let header = document.querySelector("header");

// Function to check if the element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  var hiddenElement = document.querySelector("header");

  if (isInViewport(hiddenElement)) {
    // If the hidden element is in the viewport, add the 'reveal' class
    hiddenElement.classList.toggle("reveal", window.scrollY > 50);
  }
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);
////////////
// create a function that make All fade animation
document.addEventListener("DOMContentLoaded", function () {
  const fadeUpElements = document.querySelectorAll(".fade-up");
});
document.addEventListener("DOMContentLoaded", function () {
  const fadeDownElements = document.querySelectorAll(".fade-down");
});
document.addEventListener("DOMContentLoaded", function () {
  const fadeLeftElements = document.querySelectorAll(".fade-left");
  const fadeRightElements = document.querySelectorAll(".fade-right");
});
document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");
});
////////////

// Function to add active class when click on a link // Start

let sections = document.querySelectorAll("section");
let navUl = document.querySelectorAll("nav a");

// Function to add active class when click on a link // End

///////////////////////////////////////////////////////////////////////////

// Function to Active Nav Link on Scroll// Start
window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 50;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navUl.forEach((li) => {
        li.classList.remove("active");
        let activeLink = document.querySelector(`nav a[href*="${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    }
  });
};
// navUl.forEach((a) => {
//   a.addEventListener("click", () => {
//     navUl.forEach((li) => {
//       li.classList.remove("active");
//     });
//     this.classList.toggle("active");
//   });
// });
// Function to Active Nav Link on Scroll// End

function sendEmaill() {
  let emailAddress = "a@os.com";
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;

  var emailSubject = "";
  var emailBody =
    "Name: " +
    name +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Message: " +
    message +
    "\n\n" +
    "";

  var mailtoUrl =
    "mailto:" +
    emailAddress +
    "?subject=" +
    encodeURIComponent(emailSubject) +
    "&body=" +
    encodeURIComponent(emailBody);

  // Attempt to open the default email application
  var emailWindow = window.open(mailtoUrl, "_blank");
}

function makeCall() {
  // Specify the phone number you want to call
  var phoneNumber = "+20000000"; // Replace with the actual phone number

  // Use the "tel" URI scheme to open the call app
  window.location.href = "tel:" + phoneNumber;
}


function sendEmail() {
  // Specify the email address you want to send an email to
  var emailAddress = "a@os.com"; // Replace with the actual email address

  // Use the "mailto" URI scheme to open the default email client
  window.location.href = "mailto:" + emailAddress;
}