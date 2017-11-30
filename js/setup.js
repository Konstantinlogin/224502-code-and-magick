'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

Element.prototype.removeClass = function (classname) {
  this.classList.remove(classname);
};

var randomizeNumbers = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var generateSimilarWizardsArray = function (elementsCount) {
  var array = [];
  for (var i = 0; i < elementsCount; i++) {
    array[i] = {
      name: NAMES[randomizeNumbers(0, NAMES.length)] + ' ' + SURNAMES[randomizeNumbers(0, SURNAMES.length)],
      coatColor: COAT_COLORS[randomizeNumbers(0, COAT_COLORS.length)],
      eyesColor: EYES_COLORS[randomizeNumbers(0, EYES_COLORS.length)]
    };
  }
  return array;
};

var similarWizards = generateSimilarWizardsArray(4);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var getTemplateContent = function (template, element) {
  var templateContent;
  if ('content' in document.createElement('template')) {
    templateContent = document.querySelector(template).content.querySelector(element);
  } else {
    templateContent = document.querySelector(template).querySelector(element);
  }
  return templateContent;
};

var similarWizardTemplate = getTemplateContent('#similar-wizard-template', '.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var appendWizards = function (element) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < similarWizards.length; i++) {
    fragment.appendChild(renderWizard(similarWizards[i]));
  }
  element.appendChild(fragment);
};

appendWizards(similarListElement);

userDialog.querySelector('.setup-similar').removeClass('hidden');
