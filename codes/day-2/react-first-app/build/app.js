//root component file where other components will be nested
import welcome from './welcome'; //component: app function
//element: 'appElement'

const app = () => {
  //this will create an HTML element: div
  const appElement = document.createElement('div');
  appElement.id = 'appDiv';
  appElement.style.backgroundColor = 'lime'; //appending a another component (welcome) in div element

  const welcomeElement = welcome();
  appElement.appendChild(welcomeElement); //returning this div element

  return appElement;
};

export default app; // module.exports["default"] = app;