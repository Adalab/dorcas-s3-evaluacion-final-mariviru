import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {

  render() {
    const { handleInput } = this.props;
    const { inputState } = this.props;
    return (
      <form className="Form">
        <label htmlFor="buscador">Busca un personaje</label>
        <input onChange={handleInput} id="buscador" type="text" value={inputState} />
      </form>
    );
  }
}

export default Filters;