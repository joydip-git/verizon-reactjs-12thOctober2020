import React, { Component, PureComponent } from 'react'
import { render } from 'react-dom';
import './Person.css'
/**
 * props = {
 *     personData:{
 *        id: 1,
          name: 'ani',
          age: 20
       },
       changeHandler={this.personChangeHandler}
 *  }
 */
/*
const Person = (props) => {
    console.log('[Person] rendered')
    const { personData, changeHandler } = props;
    const nameInputRef = React.createRef();
    const focusNameInput = () => {
        nameInputRef.current.focus();
    }
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
                <input type='text' value={personData.name} onChange={(e) => changeHandler('name', e.target.value, personData.id)} ref={nameInputRef} />
                <br />
                Age:&nbsp;
                <input type='text' value={personData.age} onChange={(e) => changeHandler('age', parseInt(e.target.value), personData.id)} />
                <br />
                <button onClick={focusNameInput}>Focus</button>
            </div>
        </>
        
    );
}
*/

// class Person extends PureComponent {
class Person extends Component {
    constructor() {
        super()
        //this.state = {}
        console.log('[Person] created')
    }
    nameInputRef = React.createRef();
    focusNameInput = () => {
        this.nameInputRef.current.focus();
    }
    shouldComponentUpdate(newProps) {
        console.log('[Person] should render?')
        console.log(this.props)
        console.log(newProps)
        if (this.props.personData === newProps.personData) {
            return false;
        } else {
            return true;
        }
    }
    render() {
        console.log('[Person] rendered')
        const { personData, changeHandler } = this.props;
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
                <input type='text' value={personData.name} onChange={(e) => changeHandler('name', e.target.value, personData.id)} ref={this.nameInputRef} />
                    <br />
                Age:&nbsp;
                <input type='text' value={personData.age} onChange={(e) => changeHandler('age', parseInt(e.target.value), personData.id)} />
                    <br />
                    <button onClick={this.focusNameInput}>Focus</button>
                </div>
            </>
            /* </React.Fragment> */
        );
    }
    componentDidUpdate() {

    }
    componentDidMount() {
        console.log('[Person] mounted in ADOM')
    }
    componentWillUnmount() {
        console.log('[Person] dismounted from ADOM')
    }
}
export default Person;