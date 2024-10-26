function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* Modal Functions */

const images = [
  'photo1.png',
  'photo2.png',
  'photo3.png',
  'photo4.png',
  'photo5.png',
  'photo6.png',
  // Add more image paths here
];

const captions = [
  'With High School Friends/Classmates',
  'High School Graduation',
  'With College Friends and Classmates',
  'With Friends and Teacher I',
  'With Friends and Teacher II',
  'With Friends and Teacher III',
  // Add corresponding captions for the images
];

let currentIndex = 0;

function openModal(index) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modal-caption");

  currentIndex = index; // Set the current index based on the clicked image
  modal.style.display = "block";
  modalImage.src = images[currentIndex]; // Show the clicked image
  modalCaption.innerText = captions[currentIndex]; // Set the caption
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  // Loop back to the beginning or end of the array if necessary
  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Go to last image
  } else if (currentIndex >= images.length) {
    currentIndex = 0; // Go to first image
  }

  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modal-caption");
  modalImage.src = images[currentIndex]; // Update the modal image source
  modalCaption.innerText = captions[currentIndex]; // Update the caption
}
