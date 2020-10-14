import React from 'react'

/**
 * props = {
 *     personData:{
 *        id: 1,
          name: 'anil',
          age: 20
       }
 *  }
 */
const Person = (props) => {
    const { personData } = props;
    return (
        // <React.Fragment>
        <>
            Name:&nbsp;
            <input type='text' value={personData.name} />
            <br />
            Name:&nbsp;
            <input type='text' value={personData.age} />
        </>
        /* </React.Fragment> */
    );
}
export default Person;