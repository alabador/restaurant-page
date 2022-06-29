import './style.css';
import {nav, hero} from './homepage';

const contentDiv = document.querySelector('#content');


contentDiv.append(nav(), hero());
