import React from 'react'
import './Person.css'
/**
 * props = {
 *     personData:{
 *        id: 1,
          name: 'anil',
          age: 20
       },
       changeHandler={this.personChangeHandler}
 *  }
 */
const Person = (props) => {
    console.log('[Person] rendered')
    const { personData, changeHandler } = props;

    return (
        // <React.Fragment>
        <>
            <br />
            <div className='panel panel-heading'>
                Details of <b>{personData.name}</b>
            </div>
            <div className='panel panel-body'>
                Id:&nbsp;
                <input type='text' value={personData.id} readOnly />
                <br />
                Name:&nbsp;
                <input type='text' value={personData.name} onChange={(e) => changeHandler('name', e.target.value, personData.id)} />
                <br />
                Age:&nbsp;
                <input type='text' value={personData.age} onChange={(e) => changeHandler('age', parseInt(e.target.value), personData.id)} />
            </div>
        </>
        /* </React.Fragment> */
    );
}
export default Person;