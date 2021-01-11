import React, { Component } from 'react';
/* import Radium,{ StyleRoot} from 'radium'; */
/* import styled from 'styled-components'; */
import classes from  './App.css';
import Person from './Person/Person';

/* const StyledButton = styled.button`
  background-color: ${props=>props.alt?'red':'green'};
  color:white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover  {
    background-color: ${props=>props.alt?'salmon':'lightgreen'};
    color: black;
  }
`; */

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
    /* const style = {
      backgroundColor: 'green',
      color:"white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    }; */
    let persons=null;
    let btnClass= ''
    if(this.state.showPersons){
      persons=( <div>
        {this.state.persons.map((person,index)=>{
          return <Person click= {()=>this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id} changed={(event)=>this.nameChangedHandler(event, person.id)} />
        })}
        </div>);
        /* style.backgroundColor='red';
        style[':hover']={
          backgroundColor:'lightred',
          color:'black'
        }; */
       // btnClass.push(classes.red)
       btnClass = classes.red
    }

    const assignedClasses = [];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold);
    }

    return (
     /*  <StyleRoot> */
        <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
         className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
      /* </StyleRoot> */
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default App;
/* export default Radium(App); */
