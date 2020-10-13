import React from 'react'
//component: WelcomeComp
//element: welcomeCompElement
const WelcomeComp = () => {
    //<span id='welcomeSpan' style='font-size:medium'>Hello React</span>

    /**
     * {
     *      type:'span',
     *      key:null,
     *      ref:null,
     *      props:{
     *          id:'welcomeSpan',
     *          style:{fontSize: 'medium'}
     *          children:['Hello React']
     *      }
     * }
     */
    // const welcomeCompElement = React.createElement(
    //     'div',
    //     {
    //        
    //     },
    //     [
    //      React.createElement('span',{},'Hello React JS'), 
    //      React.createElement('span',{},'Hello React JS')
    //     ]
    // );  
    const spanStyle = {
        fontSize: 'medium'
    }
    const welcomeCompElement = (
        <div>
            <span>welcome</span>
            <span id='welcomeSpan' style={spanStyle}>
                Hello React JS
            </span>
        </div>
    );
    return welcomeCompElement;
}
export default WelcomeComp;