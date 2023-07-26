import "./scss/main.scss";
import "animate.css";

const body = document.querySelector("body");
const loading = document.querySelector(".loading");
body.style.overflowY = "hidden";

import("./observer").then(() => {
  loading.style.display = "none";
  body.style.overflow = "";
});
