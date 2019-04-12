import { firstForm } from './templates/name-form.js';
import { secondForm } from './templates/email-form.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/form');
  } else if (hash === '#/form' || hash === '#/phone-number') {
    return viewTmp(hash);
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const section = document.getElementById('first-template');
  section.innerHTML = '';
  switch (router) {
  case 'phone-number':
    section.appendChild(secondForm());
    break;
  case 'form':
    section.appendChild(firstForm());
    break;
  default:
    section.appendChild(firstForm());
    break;
  }
};

export const routerRed = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};