const btnUpEl = document.getElementById("btnUp");

btnUpEl.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
