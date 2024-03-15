let images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
];

let imageBy = [
  'Tropical Tendril Treasure - by Sally Rose Dolak',
  'Pigeons at Bolhao - by Rui Palha',
  '…wingsofvienna… - by *ines_maria',
  'Back to The Future - by Foggy Lens Photography',
  'Boet & Harvey - by Barbara van der Linde',
  'Tropical Tendril Treasure - by Sally Rose Dolak',
];

let i = 0;
let backgroundContainer = document.querySelector('.animated-bg');
// backgroundContainer.style.backgroundImage = `url(${images[0]})`;
// content = imageBy[i].split(' - ');
// imageByContainer.textContent = `${content[0]}<br>${content[1]}`;

let imageByContainer = document.querySelector('.imageby');
setInterval(() => {
  if (i == images.length) {
    i = 0;
  }
  backgroundContainer.style.backgroundImage = `url(${images[i]})`;
  content = imageBy[i].split(' - ');
  imageByContainer.innerHTML = `${content[0]}<br>${content[1]}`;
  backgroundContainer.style.transition = '0.2s';
  i++;
}, 2000);
