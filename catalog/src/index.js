import '../../scss/styles.scss';
import '../../header//header.js';
import './main/main.js';

import Header  from '../../header/header.js';
import Main from './main/main.js';
import Footer from '../../footer/footer.js';

const root = document.querySelector('main');
const head = document.querySelector('header');
const foot = document.querySelector('footer');

head.append(Header);
root.append(Main);
foot.append(Footer);