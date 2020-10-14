import React, { Component, createRef } from 'react'
import Counter from './Counter';
import Person from './Person';

class App extends Component {
  constructor() {
    super()
    this.state = {
      errorMessage: '',
      data: 100,
      counter: 0,
      people: [
        {
          id: 1,
          name: 'anil',
          age: 20
        },
        {
          id: 2,
          name: 'sunil',
          age: 30
        },
        {
          id: 3,
          name: 'joy',
          age: 40
        }
      ]
    }
    this.appInputRef = React.createRef(); //{current:}
    this.counterComponentRef = React.createRef();
    console.log('[App] ctor called')
  }
  personChangeHandler = (propertyName, newPropertyValue, personId) => {
    const foundPersonRef = this.state.people.find((p) => p.id === personId);
    const foundPersonIndex = this.state.people.findIndex((p) => p.id === personId);

    let copyOfPeople = [...this.state.people]
    let copyOfFoundReson = { ...foundPersonRef }; //{ id: 1, name: 'anil', age: 20}

    copyOfFoundReson[propertyName] = newPropertyValue;
    copyOfPeople[foundPersonIndex] = copyOfFoundReson;

    this.setState({
      people: copyOfPeople
    }, () => console.log(this.state.people));
  }
  changeCounterHandler = () => {
    // this.setState((currentState) => {
    //   return {
    //     counter: currentState.counter + 1
    //   }
    // }, () => console.log(this.state));
    this.setState((currentState, props) => {
      return {
        counter: currentState.counter + props.val
      }
    }, () => console.log(this.state));
  }

  inputHandler = () => {
    //this.appInputRef.current.focus();
    if (this.appInputRef.current.value === '') {
      this.setState({
        errorMessage: 'please enter value'
      })
    } else {
      this.setState({
        errorMessage: ''
      })
    }
  }

  render() {
    console.log('[App] rendered')
    return (
      <div className='container'>
        <button onClick={() => this.counterComponentRef.current.focusCounterInputHandler()}>Focus Counter Input From App</button>
        <br />
        App Input:&nbsp;<input type='text' ref={this.appInputRef}
          onChange={this.inputHandler} />&nbsp;
        {
          this.state.errorMessage !== '' && (<span>{this.state.errorMessage}</span>)
        }
        <br />
        <button onClick={this.inputHandler}>Focus</button>
        <div className='panel panel-primary'>
          {
            this.state.people.map((p) => {
              return <Person key={p.id} personData={p} changeHandler={this.personChangeHandler} />
            })
          }
        </div>
        <br />
        <div>
          <Counter ref={this.counterComponentRef} counterValue={this.state.counter} changeCounter={this.changeCounterHandler} />
        </div>
      </div>
    );
  }
}
export default App;
/**
 * {
 *  type:'Person',
 *  key:null,
 *  ref:null,
 *  props:{}
 * }
 */
