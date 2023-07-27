const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("animated");
    } else {
      element.target.classList.remove("animated");
      element.target.style.opacity = "0";
    }

    element.target.addEventListener("animationstart", (e) => {
      element.target.style.opacity = "1";
    });
  });
});

elements.forEach((el) => {
  observer.observe(el);
});

const footerLinks = Array.from(
  document.querySelector(".footer-links").children
);

footerLinks.forEach((link) => {
  link.classList.add("animate");
  observer.observe(link);
});
