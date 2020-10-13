import * as React from 'react'
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
    const welcomeCompElement = React.createElement(
        'span',
        {
            id: 'welcomeSpan',
            style: { fontSize: 'medium' }
        },
        'Hello React'
    );    
    return welcomeCompElement;
}
export default WelcomeComp;