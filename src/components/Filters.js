import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {

  render() {
    const { handleInput } = this.props;
    const { inputState } = this.props;
    return (
      <form className="Form">
        <label 
          htmlFor="buscador" 
          className='Form__title' >
            Harry Potter Characters
          </label>
        <input 
          onChange={handleInput} 
          id="buscador" 
          type="text" 
          value={inputState}
          className='Form__input'
        />
      </form>
    );
  }
}

export default Filters;