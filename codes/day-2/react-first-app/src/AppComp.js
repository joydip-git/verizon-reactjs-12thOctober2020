//root component file where other components will be nested
import WelcomeComp from './WelcomeComp'
import React from 'react'
//component: AppComp function
//element: 'appCompElement'
const AppComp = () => {
    //appending a another component (welcome) in div element
    //const welcomeCompElement = WelcomeComp();

    //this will create a React element
    // const appCompElement = React.createElement(
    //     'div',
    //     {
    //         id: 'appDiv',
    //         style: { backgroundColor: 'lime' }
    //     },
    //     welcomeCompElement);
    const appCompElement = (
        <div id='appDiv' style={{ backgroundColor: 'lime' }}>
            {/* {welcomeCompElement}*/}
            <WelcomeComp />
        </div>
    );
    return appCompElement;
}
export default AppComp;
// module.exports["default"] = app;