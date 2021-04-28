import $ from 'cash-dom';
import createFadeSlider from 'widok-fade-slider';

if ($('#slider').length > 0) {
  createFadeSlider('#slider', {
    interval: 4000,
  });
}
