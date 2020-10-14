import React, { Component } from 'react'
import Person from './Person';

class App extends Component {
  constructor() {
    super()
    this.state = {
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
  render() {
    console.log('[App] rendered')
    return (
      <div className='container'>
        <div className='panel panel-primary'>
          {

            this.state.people.map((p) => {
              return <Person key={p.id} personData={p} changeHandler={this.personChangeHandler} />
            })
          }
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
