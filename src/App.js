import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = props => {
  const [personsState, setPersonsState]=useState({persons: [
      {
        name: 'Vinaya',
        age:28
      },
      {
        name: 'Ashwin',
        age:31
      },
      {
        name: 'Eeshan',
        age:1
      }
    ],
    otherState: "Some other value"
});
      return (
        <div className="App">
          <h1>Hi, I'm a React App!</h1>
          <p>This is really working!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Computer Games</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
      );
      // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Hi I\'m a React App!!!'));
    }

export default app;
state = {
    
    switchNameHandler = () => {
    // console.log('Was clicked!')
    // Don't do this //personsState.persons[0].name = "Vinaya Ashwin";
    this.setState({
      persons: [
        {
          name: 'Vinaya Ashwin',
          age: 28
        },
        {
          name: 'Ashwin',
          age: 31
        },
        {
          name: 'Eeshan',
          age: 2
        }
      ]
    })
