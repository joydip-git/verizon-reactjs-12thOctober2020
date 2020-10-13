import app from './app'

const appElement = app();
const appDivElement = document.getElementById('app')
appDivElement.appendChild(appElement);
