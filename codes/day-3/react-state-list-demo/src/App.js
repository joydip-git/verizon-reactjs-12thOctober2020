import React, { Component, createRef } from 'react'
import Counter from './Counter';
import Person from './Person';
import PersonDetail from './PersonDetail';
import { people } from './peopleModel'

class App extends Component {
  // constructor() {
  //   super()
  //   console.log('[App] created')
  // }
  //myData = ;

  appInputRef = createRef(); //{current:}
  counterComponentRef = createRef();
  state = {
    errorMessage: '',
    personId: 0,
    show: true,
    counter: 0,
    people: people
  }
  static getDerivedStateFromProps(newProps, lastState) {
    return {
      counter: lastState.counter + newProps.val
    }
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
  changeShowHandler = () => {
    this.setState(ps => {
      return {
        show: !ps.show
      }
    })
  }

  selectPersonHadler = (personId) => {
    this.setState({
      personId: personId
    })
  }
  render() {
    console.log('[App] rendered')
    return (
      <div className='container'>
        <button onClick={this.changeShowHandler}>{this.state.show ? 'Hide' : 'Show'}</button>
        <br />
        <br />
        {/* <button onClick={() => this.counterComponentRef.current.focusCounterInputHandler().focus()}>Focus Counter Input From App</button> */}
        <button onClick={() => this.counterComponentRef.current.focus()}>Focus Counter Input From App</button>
        <br />
        App Input:&nbsp;<input type='text' ref={this.appInputRef}
          onChange={this.inputHandler} />&nbsp;
        {
          this.state.errorMessage !== '' && (<span>{this.state.errorMessage}</span>)
        }
        <br />
        <button onClick={this.inputHandler}>Focus</button>
        {
          this.state.show && (
            <div className='panel panel-primary'>
              {
                this.state.people.map((p) => {
                  return <Person
                    key={p.id}
                    personData={p}
                    changeHandler={this.personChangeHandler}
                    select={this.selectPersonHadler}
                  />
                })
              }
            </div>
          )
        }
        <br />
        <br />
        { this.state.personId > 0 && <PersonDetail pid={this.state.personId} />}
        <br />
        <div>
          <Counter ref={this.counterComponentRef} counterValue={this.state.counter} changeCounter={this.changeCounterHandler} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('[App] mounted in ADOM')
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
