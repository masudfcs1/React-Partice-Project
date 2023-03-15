import React, { useState } from 'react';

import Button from '../../UI/Button/Button';

import styled from 'styled-components';

  const FormControl =styled.div`
  
  .form-control {
    margin: 0.5rem 0;
  }
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invaild ? 'red' : 'black')}
  }
  
  & input {
    display: block;
    width: 100%;
    border: ${props =>props.invaild ? 'red' : '#ccc'} ;
    background: ${props => props.invaild ? '#ffd7d7':'transparent'}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

 & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  

  
  
  `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isVaild, setVaild]=useState(true)



  const goalInputChangeHandler = event => {
       if(event.target.value.trim().length>0){
         setVaild(true)
       }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setVaild(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
        <FormControl invaild={!isVaild}>
        <label style={{color: !isVaild ? 'red':'#ccc' }} > Course Goal</label>
        <input style={{
          borderColor: !isVaild ? 'red': '#ccc',
          background: !isVaild ? 'salmon': 'transparent'
        }}  type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
