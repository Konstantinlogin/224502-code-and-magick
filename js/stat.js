'use strict';

var getMaxElement = function (arr) {
  var max = -1;
  for (var i = 0; i < arr.length; i++) {
    var time = arr[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
};

var getRandom = function (from, to) {
  return Math.random() * (to - from) + from;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var histogramHeight = 150;
  var columnWidth = 40;
  var spaceBetween = 50;
  var initialX = 120;
  var initialY = 100;
  var lineHeight = 20;

  ctx.fillText('Ура вы победили!', initialX, 40);
  ctx.fillText('Список результатов:', initialX, 60);

  var step = histogramHeight / getMaxElement(times) - 0;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + getRandom(0.2, 1) + ')';
    }
    ctx.fillRect(initialX + (columnWidth + spaceBetween) * i, initialY + (histogramHeight - times[i] * step), columnWidth, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + (columnWidth + spaceBetween) * i, histogramHeight + initialY + lineHeight);
    ctx.fillText(Math.round(times[i]), initialX + (columnWidth + spaceBetween) * i, initialY - lineHeight + (histogramHeight - times[i] * step));
  }
};
