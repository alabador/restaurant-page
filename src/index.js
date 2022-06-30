import './style.css';
import {hero} from './homepage';
import nav from './pageload';

const contentDiv = document.querySelector('#content');


contentDiv.append(nav(), hero());
