const container = document.querySelector(".main");

container.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (button) {
    const div = button.nextElementSibling;
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
});