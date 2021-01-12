import React from 'react';
/* import Radium from 'radium'; */
// import styled from 'styled-components';
 import classes from  './Person.css'

/* const StyledDiv= styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #cccccc;
    padding: 16px;
    text-align: center;
    @media(min-width:500px){
            width: 450px;
    }`; */
const person = (props) => {
    /* const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
    } */
    return (
       // <div className="Person" style={style}>
      //  <StyledDiv>
      <div className={classes.Person}>
           <p onClick={props.click}>I'm {props.name}. I am {props.age} years old !</p>
            <p>{ props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
      </div>
           
      //  </StyledDiv>
    )
}
/* export default Radium(person); */
export default person;