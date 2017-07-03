/* eslint-env browser */

import FontFaceObserver from 'fontfaceobserver';

const faktProBlond = new FontFaceObserver('Fakt Pro', {
  weight: 300
});
const faktProNormal = new FontFaceObserver('Fakt Pro', {
  weight: 400
});
const faktProMedium = new FontFaceObserver('Fakt Pro', {
  weight: 500
});

const html = document.documentElement;

html.classList.add('a0sc-fonts--loading');

Promise.all([faktProBlond.load(), faktProNormal.load(), faktProMedium.load()])
  .then(() => {
    html.classList.remove('a0sc-fonts--loading');
    html.classList.add('a0sc-fonts--loaded');
    sessionStorage.a0SCFontsLoaded = true;
  })
  .catch(() => {
    html.classList.remove('a0sc-fonts--loading');
    html.classList.add('a0sc-fonts--failed');
    sessionStorage.a0scFontsLoaded = false;
  });
