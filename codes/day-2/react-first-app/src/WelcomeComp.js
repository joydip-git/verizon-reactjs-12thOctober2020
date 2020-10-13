import * as React from 'react'

const Welcome = () => {
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
    const welcomeElement = React.createElement(
        'span',
        {
            id: 'welcomeSpan',
            style: { fontSize: 'medium' }
        },
        'Hello React'
    );    
    return welcomeElement;
}
export default Welcome;