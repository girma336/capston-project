const speakerData = [
  {
    name: 'Ryan.S',
    title: 'Reknown inspirational speaker',
    image: './images/Ryan.png',
    alt: 'Image of speake 1',
    description: 'This is the market value site of Criciúma Esporte Clube player Rayan which shows the market value development of the player in his career. ',
  },
  {
    name: 'Peniah.B',
    title: 'Reknown inspirational speaker',
    image: './images/Peniah.jpg',
    alt: 'Image of speake 2',
    description: 'This is the market value site of Criciúma Esporte Clube player Rayan which shows the market value development of the player in his career. ',
  },
  {
    name: 'Lila.R',
    title: 'Reknown inspirational speaker',
    image: './images/Lila.png',
    alt: 'Image of speake 3',
    newClass: 'disNone',
    description: 'This is the market value site of Criciúma Esporte Clube player Rayan which shows the market value development of the player in his career. ',
  },
  {
    name: 'Yochai Benkler',
    title: 'Brekman Professor of Enterpreneur legal Studies of harvard School',
    image: './images/Yochai.png',
    alt: 'Image of speake 4',
    newClass: 'disNone',
    description: 'This is the market value site of Criciúma Esporte Clube player Rayan which shows the market value development of the player in his career. ',
  },
  {
    name: 'SohYeong Noh',
    title: 'Dirctor of Art Center and a cc korea',
    image: './images/SohYeong Noh.png',
    alt: 'Image of speake 5',
    newClass: 'disNone',
    description: 'This is the market value site of Criciúma Esporte Clube player Rayan which shows the market value development of the player in his career.',
  },
  {
    name: 'Kilnam.S',
    title: 'Reknown inspirational speaker',
    image: './images/Kilnam.png',
    alt: 'Image of speake 6',
    newClass: 'disNone',
    description: 'This is the market value site of Criciúma Esporte Clube player Rayan which shows the market value development of the player in his career. ',
  },
];

const featureRow = document.querySelector('.feature-row');
function loadSpeaker() {
  for (let i = 0; i < speakerData.length; i += 1) {
    featureRow.innerHTML += `
        <div class="col-sm-6 ${speakerData[i].newClass}">
        <div class"image-row>
        <img src="${speakerData[i].image}" alt="${speakerData[i].alt}">
        </div>
        <div class="description-feature">
        <h5 class="f-name">${speakerData[i].name}</h5>
        <h6 class="title-name">${speakerData[i].title}</h6>
        <div class="black-bar"></div>
        <p class="who-man">${speakerData[i].description}</p>
        </div>
        </div>
        `;
  }
}

window.addEventListener('load', () => {
  loadSpeaker();
  const showsMore = document.getElementById('textButton');
  showsMore.addEventListener('click', () => {
    const showLess = document.querySelectorAll('.disNone');
    showLess.forEach((item) => {
      if (item.style.display === 'none') {
        item.style.display = 'flex';
        showsMore.innerHTML = 'Show Less';
      } else {
        item.style.display = 'none';
        showsMore.innerHTML = 'Show More';
      }
    });
  });
});

const mobileBtn = document.getElementById('menu-bar');
const exitBtn = document.getElementById('close-menu');
const nav = document.querySelector('nav');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});

function display() {
  nav.classList.remove('menu-btn');
}
exitBtn.addEventListener('click', display);
