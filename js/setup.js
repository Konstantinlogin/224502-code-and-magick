'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var randomizeArray = function (array, itemsCount) {
  var randomizedItems = [];
  for (var i = 0; i < itemsCount; i++) {
    var randomNumber = Math.floor(Math.random() * array.length);
    randomizedItems.push(array[randomNumber]);
    array.splice(randomNumber, 1);
  }
  return randomizedItems;
};

var similarWizards = [
  {
    name: randomizeArray(NAMES, 1) + ' ' + randomizeArray(SURNAMES, 1),
    coatColor: randomizeArray(COAT_COLORS, 1),
    eyesColor: randomizeArray(EYES_COLORS, 1)
  },
  {
    name: randomizeArray(NAMES, 1) + ' ' + randomizeArray(SURNAMES, 1),
    coatColor: randomizeArray(COAT_COLORS, 1),
    eyesColor: randomizeArray(EYES_COLORS, 1)
  },
  {
    name: randomizeArray(NAMES, 1) + ' ' + randomizeArray(SURNAMES, 1),
    coatColor: randomizeArray(COAT_COLORS, 1),
    eyesColor: randomizeArray(EYES_COLORS, 1)
  },
  {
    name: randomizeArray(NAMES, 1) + ' ' + randomizeArray(SURNAMES, 1),
    coatColor: randomizeArray(COAT_COLORS, 1),
    eyesColor: randomizeArray(EYES_COLORS, 1)
  }
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var insertWizards = function (fromObj, toObj) {
  var fragment = document.createDocumentFragment();
  fragment.appendChild(fromObj);
  toObj.appendChild(fragment);
};

for (var i = 0; i < similarWizards.length; i++) {
  insertWizards(renderWizard(similarWizards[i]), similarListElement);
}

userDialog.querySelector('.setup-similar').classList.remove('hidden');
