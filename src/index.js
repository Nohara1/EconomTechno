import './scss/styles.scss';
import './header/header.js';
import './main/main.js';

import Header  from './header/header.js';
import Main from './main/main.js';

const root = document.querySelector('main');
const head = document.querySelector('header');


head.append(Header);
root.append(Main);

console.log(Main);

