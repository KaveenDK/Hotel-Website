console.log("script.js is loaded...");

// Gallery Modal
var galleryModal = document.getElementById("galleryModal");
galleryModal.addEventListener("show.bs.modal", function (event) {
  var button = event.relatedTarget;
  var imgSrc = button.getAttribute("data-bs-img");
  var modalImage = galleryModal.querySelector("#modalImage");
  modalImage.src = imgSrc;
});