const boxes = document.querySelectorAll(".accordionBox");

boxes.forEach(box => {
  box.querySelector(".accordionTitle").addEventListener("click", function () {
    const block = box.closest(".accordionBlock");
    block.classList.toggle("active");
  });
});
