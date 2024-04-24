const imageContainer = document.getElementById('imageContainer');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');

const images = [
	{ path: 'images/smallerimages/gutta business 2.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/gutta fathers milk.jpg',credit: 'Ihne Pedersen'},
	{ path: 'images/smallerimages/gutta in bed 1.jpg',credit: 'Ingeborg Bjerke Styve'},
  { path: 'images/smallerimages/gutta in grass.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/gutta kink 1.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/gutta laughing government.jpg',credit: 'Ihne Pedersen'},
	{ path: 'images/smallerimages/gutta laughing kink 2.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/gutta laughing.jpg',credit: 'Ihne Pedersen / BLIKK'},
	{ path: 'images/smallerimages/gutta photoshoot.jpg',credit: 'BLIKK'},
	{ path: 'images/smallerimages/gutta posing w skulls.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/Larry kink.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/Larry red.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/larry sunshine.jpg',credit: 'Ingeborg Bjerke Styve'},
  { path: 'images/smallerimages/Lavrans in dress.jpg',credit: 'Karina Rønning'},
  { path: 'images/smallerimages/Lavrans kink.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/Lavrans red.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/Lavrans sailor.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/lavrans.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/Portrait Larry.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/Portrait RichHard.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/PORTRAIT ROBIN.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/Portrett Lavrans 1 “Lavrans like Jesus, makes water into wine.” - A theatre director.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/pride 1.png',credit: 'Victoria Finstad / Avisa Nordland'},
	{ path: 'images/smallerimages/pride 2.png',credit: 'Victoria Finstad / Avisa Nordland'},
	{ path: 'images/smallerimages/pride 3.jpg',credit: 'Eirik Dyrøy Lotsberg'},
	{ path: 'images/smallerimages/pride 4.jpg',credit: 'Eirik Dyrøy Lotsberg'},
	{ path: 'images/smallerimages/pride 5.jpg',credit: 'Eirik Dyrøy Lotsberg'},
	{ path: 'images/smallerimages/pride 6.jpg',credit: 'Eirik Dyrøy Lotsberg'},
	{ path: 'images/smallerimages/pride 7.jpg',credit: 'Eirik Dyrøy Lotsberg'},
	{ path: 'images/smallerimages/pride 8.jpg',credit: 'Eirik Dyrøy Lotsberg'},
	{ path: 'images/smallerimages/pride 9.jpg',credit: 'Eirik Dyrøy Lotsberg'},
	{ path: 'images/smallerimages/pride 10.jpg',credit: 'Eirik Dyrøy Lotsberg'},
	{ path: 'images/smallerimages/richhard audience.jpg',credit: 'Eirik Dyrøy Lotsberg'},
	{ path: 'images/smallerimages/richhard kink.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/richhard red.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/richhard.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/robin _ Lavrans cake.jpeg',credit: 'Elin Osjord'},
	{ path: 'images/smallerimages/robin asshole.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/robin audience.jpeg',credit: 'Arne Hauge'},
	{ path: 'images/smallerimages/robin on toilet.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/robin red.jpg',credit: 'Ingeborg Bjerke Styve'},
	{ path: 'images/smallerimages/show audience 1.jpg',credit: 'Arne Hauge'},
	{ path: 'images/smallerimages/show audience 2.jpeg',credit: 'Arne Hauge'},
	{ path: 'images/smallerimages/show audience 3.jpg',credit: 'Arne Hauge'},
	{ path: 'images/smallerimages/show audience 4.jpg',credit: 'Arne Hauge'},
	{ path: 'images/smallerimages/show audience pink.jpg',credit: 'Karina Rønning'},
	{ path: 'images/smallerimages/show audience pink(1).jpg',credit: 'Karina Rønning'},
	{ path: 'images/smallerimages/show audience Richard pink.jpg',credit: 'Karina Rønning'},

  // Add more images as needed with 'images/imagename.jpg'
];

let currentImageIndex = 0;

images.forEach((imageData, index) => {
  const img = document.createElement('img');
  img.src = imageData.path;
  img.alt = 'Image';
  img.className = 'grid-image';
  img.addEventListener('click', () => openModal(imageData.path, imageData.credit, index));
  imageContainer.appendChild(img);
});

function openModal(imagePath, imageCredit, index) {
  currentImageIndex = index;
  modal.style.display = 'block';
  modalImage.src = imagePath;
  modalCaption.textContent = 'Photo credit: ' + imageCredit;
}

function closeModal() {
  modal.style.display = 'none';
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  modalImage.src = images[currentImageIndex].path;
  modalCaption.textContent = 'Photo credit: ' + images[currentImageIndex].credit;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  modalImage.src = images[currentImageIndex].path;
  modalCaption.textContent = 'Photo credit: ' + images[currentImageIndex].credit;
}
function openModal(imagePath, imageCredit, index) {
	currentImageIndex = index;
	modal.style.display = 'block';
	modalImage.src = imagePath;
	modalCaption.textContent = 'Photo credit: ' + imageCredit;
  }