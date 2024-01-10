import './header.scss';
import header from './index.html'
import htmlToElement from '../utils/htmlToElement';
import './burger.js';

const Header = htmlToElement(header);

export default Header;