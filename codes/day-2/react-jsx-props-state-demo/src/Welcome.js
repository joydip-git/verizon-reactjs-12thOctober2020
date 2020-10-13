import React from 'react'

/**
 * properties = {
 *   data:20,
 *   handler:changeValueHandler,
 *   name:'joydip'
 * }
 */
export default function Welcome(properties) {
    console.log('welcome rendered')
    //properties.data = properties.data + 1;
    const divStyle = {
        backgroundColor: 'lime'
    }
    return (
        <div id='myDiv' style={divStyle}>
            Hello React JS
            <br />
            <span>{properties.name}</span>
            <br />
            Data:&nbsp;
            <input type='text' value={properties.data} onChange={properties.handler} />
        </div>
    );
}
/**
 * {
 *  type:'div',
 *  key:null,
 *  ref:null,
 *  props:{
 *      id:'myDiv',
 *      style:{
        backgroundColor: 'lime'
        },
        data:20
 *  }
 * }
 */