const imageContainer = document.getElementById('imageContainer');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

const images = [
  'images/smallerimages/gutta business 2.jpg',
  'images/smallerimages/gutta fathers milk.jpg',
  'images/smallerimages/gutta in bed 1.jpg',
	'images/smallerimages/gutta in grass.jpg',
	'images/smallerimages/gutta kink 1.jpg',
	'images/smallerimages/gutta laughing government.jpg',
	'images/smallerimages/gutta laughing kink 2.jpg',
	'images/smallerimages/gutta laughing.jpg',
	'images/smallerimages/gutta photoshoot.jpg',
	'images/smallerimages/gutta posing w skulls.jpg',
	'images/smallerimages/Larry kink.jpg',
	'images/smallerimages/Larry red.jpg',
  'images/smallerimages/larry sunshine.jpg',
  'images/smallerimages/Lavrans in dress.jpg',
	'images/smallerimages/Lavrans kink.jpg',
	'images/smallerimages/Lavrans red.jpg',
	'images/smallerimages/Lavrans sailor.jpg',
	'images/smallerimages/lavrans.jpg',
	'images/smallerimages/Portrait Larry.jpg',
	'images/smallerimages/Portrait RichHard.jpg',
	'images/smallerimages/PORTRAIT ROBIN.jpg',
	'images/smallerimages/Portrett Lavrans 1 “Lavrans like Jesus, makes water into wine.” - A theatre director.jpg',
	'images/smallerimages/pride 1.png',
	'images/smallerimages/pride 2.png',
	'images/smallerimages/pride 3.jpg',
	'images/smallerimages/pride 4.jpg',
	'images/smallerimages/pride 5.jpg',
	'images/smallerimages/pride 6.jpg',
	'images/smallerimages/pride 7.jpg',
	'images/smallerimages/pride 8.jpg',
	'images/smallerimages/pride 9.jpg',
	'images/smallerimages/pride 10.jpg',
	'images/smallerimages/richhard audience.jpg',
	'images/smallerimages/richhard kink.jpg',
	'images/smallerimages/richhard red.jpg',
	'images/smallerimages/richhard.jpg',
	'images/smallerimages/robin _ Lavrans cake.jpeg',
	'images/smallerimages/robin asshole.jpg',
	'images/smallerimages/robin audience.jpeg',
	'images/smallerimages/robin on toilet.jpg',
	'images/smallerimages/robin red.jpg',
	'images/smallerimages/show audience 1.jpg',
	'images/smallerimages/show audience 2.jpeg',
	'images/smallerimages/show audience 3.jpg',
	'images/smallerimages/show audience 4.jpg',
	'images/smallerimages/show audience pink.jpg',
	'images/smallerimages/show audience pink(1).jpg',
	'images/smallerimages/show audience Richard pink.jpg',

  // Add more images as needed with 'images/imagename.jpg'
];

let currentImageIndex = 0;

images.forEach((imagePath, index) => {
  const img = document.createElement('img');
  img.src = imagePath;
  img.alt = 'Image';
  img.className = 'grid-image';
  img.addEventListener('click', () => openModal(imagePath, index));
  imageContainer.appendChild(img);
});

function openModal(imagePath, index) {
  currentImageIndex = index;
  modal.style.display = 'block';
  modalImage.src = imagePath;
}

function closeModal() {
  modal.style.display = 'none';
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  modalImage.src = images[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  modalImage.src = images[currentImageIndex];
}