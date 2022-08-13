const cardImages = document.querySelectorAll('.card-image');
const cardTitles = document.querySelectorAll('.card-title');
const cardDescriptions = document.querySelectorAll('.card-description');
const cardMediaIcons = document.querySelectorAll('.card-mediaIcons a');

const cardImgs = document.querySelectorAll('.card-image img');
const cardTitleSpans = document.querySelectorAll('.card-title span');
const cardDescriptionSpans = document.querySelectorAll('.card-description span');
const MediaIcons = document.querySelectorAll('.card-mediaIcons a img');

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

// show the hidden html elements
cardImgs.forEach((cardImg) => {
  cardImg.style.visibility = 'visible';
});
cardTitleSpans.forEach((cardTitleSpan) => {
  cardTitleSpan.style.visibility = 'visible';
});
cardDescriptionSpans.forEach((cardDescriptionSpan) => {
  cardDescriptionSpan.style.visibility = 'visible';
});
MediaIcons.forEach((MediaIcon) => {
  MediaIcon.style.visibility = 'visible';
});

// execute renderCard function on setTimeOut
setTimeout(() => {
  renderCard();
}, 2000);