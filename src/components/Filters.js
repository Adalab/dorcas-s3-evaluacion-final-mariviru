import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filters.css';

class Filters extends Component {

  render() {
    const {
      handleInput,
      inputState,
      selectValue,
      handleSelect,
    } = this.props;

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
        <select onChange={handleSelect} value={selectValue} id="">
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </form>
    );
  }
}

export default Filters;

Filters.propTypes = {
  handleInput: PropTypes.func.isRequired,
  inputState: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};