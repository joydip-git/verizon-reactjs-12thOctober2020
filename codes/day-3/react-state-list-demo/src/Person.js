import React from 'react'
import './Person.css'
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
            <div className='panel panel-heading'>
                PersonDetail
            </div>
            <div className='panel panel-body'>
                Id:&nbsp;
                <input type='text' value={personData.id} readOnly />
                <br />
                Name:&nbsp;
                <input type='text' value={personData.name} />
                <br />
                Age:&nbsp;
                <input type='text' value={personData.age} />
            </div>
        </>
        /* </React.Fragment> */
    );
}
export default Person;