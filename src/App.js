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
    ]
});
const [otherState, setOtherState]=useState("Some other value");
console.log(personsState,otherState);
const switchNameHandler = (newName)=>{
    // console.log('Was clicked!')
    // Don't do this //personsState.persons[0].name = "Vinaya Ashwin";
    setPersonsState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: 'Ashwin',
          age: 31
        },
        {
          name: 'Eeshan',
          age: 2
        }]
      });
    };
const nameChangedHandler = (event)=>{
  setPersonsState({
    persons: [
      {
        name: 'Vinaya Ashwin',
        age: 29
      },
      {
        name: event.target.value,
        age: 31
      },
      {
        name: 'Eeshan',
        age: 2
      }]
    });
  };
  const style= {
    backgroundColor: 'white',
    font:'inherit',
    border:'1px solid blue',
    padding:'8px',
    cursor:'pointer'
  }
      return (
        <div className="App">
          <h1>Hi, I'm a React App!</h1>
          <p>This is really working!</p>
          <button onClick={()=> switchNameHandler('Vinaya A')}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler.bind(this,'Vinaya Ashwin!')} changed={nameChangedHandler}>My Hobbies: Computer Games</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
         
        </div>
      );
      // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Hi I\'m a React App!!!'));
    }

export default app;
