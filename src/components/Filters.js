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
          placeholder='Busca a tu personaje favorito'
          className='Form__input'
        />
        <select
          onChange={handleSelect}
          value={selectValue}
          id=""
          className='Form__select'
        >
          <option
            value="Seleciona una casa"
            className='Form__select-option'
          >
            Seleciona una casa
          </option>
          <option
            value="Gryffindor"
            className='Form__select-option'
          >
            Gryffindor
          </option>
          <option
            value="Hufflepuff"
            className='Form__select-option'
          >
            Hufflepuff
          </option>
          <option
            value="Slytherin"
            className='Form__select-option'
          >
            Slytherin
          </option>
          <option
            value="Ravenclaw"
            className='Form__select-option'
          >
            Ravenclaw
           </option>
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