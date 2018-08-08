import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {

    render() {
        console.log('filters props', this.props)
        const {handleInput} = this.props;
        const {inputState} = this.props;
        console.log('input state', inputState)
        return (
            <form className="Form">
                <label htmlFor="buscador">Busca un personaje</label>
                <input onChange={handleInput} id="buscador" type="text" value={inputState} />
            </form>
        );
    }
}

export default Filters;