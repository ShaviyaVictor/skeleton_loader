const cardImages = document.querySelectorAll('.card-image');
const cardTitles = document.querySelectorAll('.card-title');
const cardDescriptions = document.querySelectorAll('.card-description');
const cardMediaIcons = document.querySelectorAll('.card-mediaIcons a');

const cardImgs = document.querySelectorAll('.card-image img');
const cardTitleSpan = document.querySelectorAll('.card-title span');
const cardDescriptionSpan = document.querySelectorAll('.card-description span');
const MediaIcon = document.querySelectorAll('.card-mediaIcons a img');

const renderCard = () => {
  // removing the skeleton loading effect
  cardImages.forEach((cardImage) => {
    cardImage.classList.remove('loading');
  });
  cardTitles.forEach((cardTitle) => {
    cardTitle.classList.remove('loading');
  });
  cardDescriptions.forEach((cardDescription) => {
    cardDescription.classList.remove('loading');
  });
  cardMediaIcons.forEach((cardMediaIcon) => {
    cardMediaIcon.classList.remove('loading');
  });
}

// execute renderCard function on setTimeOut
setTimeout(() => {
  renderCard();
}, 4000);