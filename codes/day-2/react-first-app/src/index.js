// import app from './app'

// const appElement = app();
// const appDivElement = document.getElementById('app')
// appDivElement.appendChild(appElement);

import AppComp from './AppComp'
import * as ReactDOM from 'react-dom'
import React from 'react'

//const appCompElement = AppComp();
const appDivElement = document.getElementById('app')
//ReactDOM.render(appCompElement, appDivElement);
ReactDOM.render(<AppComp />, appDivElement);

