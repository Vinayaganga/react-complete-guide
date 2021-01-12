import React, { Component } from 'react';
import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 , id:"assdd"},
      { name: 'Manu', age: 29, id:"eiufier" },
      { name: 'Stephanie', age: 26, id: "sfjdjsd" }
    ],
    otherState: 'some other value',
    showPersons:false
  }
  deletePersonHandler = (index)=>{
   // const persons= this.state.persons.slice();
   const persons= [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }
  nameChangedHandler = (event, id) => {
    const personIndex= this.state.persons.findIndex(p=>{
      return p.id===id
    })
    const person= {
      ...this.state.persons[personIndex]
    };
    person.name= event.target.value;
    const persons=[...this.state.persons]
    persons[personIndex]=person;
    // const person = Object.assign({}, this.state.persons[personIndex]);
    this.setState( {
      persons: persons
    } )
  }
  togglePersonsHandler = () =>{
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    let persons=null;
    if(this.state.showPersons){
      persons=( <div>
        <Persons persons = {this.state.persons} clicked = {this.deletePersonHandler} changed = {this.nameChangedHandler} />
        </div>);
    }

    

    return (
        <div className={classes.App}>
          <Cockpit showPersons= {this.state.showPersons} persons={this.state.persons} clicked= {this.togglePersonsHandler}/>
          {persons}
      </div>
      
    );
  }
}
export default App;
