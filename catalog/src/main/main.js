import './main.scss';
import main from './index.html';
import htmlToElement from '../utils/htmlToElement';
import  './catalog.js';


const Main = htmlToElement(main);

export default Main;