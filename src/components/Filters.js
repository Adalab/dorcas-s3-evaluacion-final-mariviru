import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Filters.propTypes = {
 handleInput: PropTypes.func.isRequired,
 inputState: PropTypes.string.isRequired,
};