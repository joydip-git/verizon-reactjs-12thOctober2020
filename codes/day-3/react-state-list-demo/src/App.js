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
  }

  render() {
    return (
      <div>
        <Person personData={this.state.people[0]} />
      </div>
    );
  }
}
export default App;
