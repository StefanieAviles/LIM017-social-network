import { LogIn } from './LogIn.js';
import { Register } from './Register.js';
import { ResetPassword } from './ResetPassword.js';
import { Posts } from './Posts.js';
import { Profile } from './Profile.js';

const pageOne = document.getElementById('containerPageOne');
export const routes = {
  '': LogIn,
  '#/': LogIn,
  '#/register': Register,
  '#/resetpassword': ResetPassword,
  '#/home': Posts,
  '#/profile': Profile,
};
// Funcion que relaciona rutas con pathnames
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  pageOne.innerHTML = routes[pathname]();
};

export const changeView = (route) => {
  pageOne.innerHTML = '';
  switch (route) {
    case '':
      pageOne.innerHTML = routes['']();
      break;
    case '#/':
      pageOne.innerHTML = routes['#/register']();
      break;
    case '#/register':
      pageOne.innerHTML = routes['#/register']();
      break;
    case '#/resetpassword':
      pageOne.innerHTML = routes['#/resetpassword']();
      break;
    case '#/home':
      pageOne.innerHTML = routes['#/home']();
      break;
    case '#/profile':
      pageOne.innerHTML = routes['#/profile']();
      break;
    default:
      break;
  }
  // console.log(route)
};
