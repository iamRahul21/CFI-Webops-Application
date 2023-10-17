const unsplashAPIKey = 'UEjQ32hScHQBUhEA2-yqBbJzQAL4j5CK_QMdp-Ag0Vo';

const backgroundContainer = document.querySelector('.background-container');

function getRandomImage() {
  fetch(`https://api.unsplash.com/photos/random/?client_id=${unsplashAPIKey}`)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.urls.full;
      backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
      // backgroundContainer.style.filter = 'grayscale(100%)';//make b&w bg
    })
    .catch((error) => {
      console.error('Failed to fetch image from Unsplash:', error);
    });
}

function setRandomBackground() {
  getRandomImage();
}

setRandomBackground();

const refreshButton = document.querySelector('button');

refreshButton.addEventListener('click', function() {
    setRandomBackground(); 
    location.reload(); // Reload the page
});
