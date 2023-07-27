let theme = localStorage.getItem("theme");
const body = document.querySelector("body");
const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", (e) => {
  const input = themeToggle.querySelector("input");

  console.log(input.checked);

  if (input.checked) {
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-mode");
    localStorage.removeItem("theme", "light");
  }
});

const input = themeToggle.querySelector("input");

if (theme === "light") {
  input.checked = true;
  body.classList.add("light-mode");
} else {
  body.classList.remove("light-mode");
}
