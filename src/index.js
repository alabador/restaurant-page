import './style.css';
import {nav, initialPageLoad} from './pageload';

const contentDiv = document.querySelector('#content')

function clearPage() {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

initialPageLoad();


export {clearPage};
